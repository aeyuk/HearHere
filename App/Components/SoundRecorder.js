import React, {Component} from 'react';
import { Icon } from 'react-native-elements';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Platform,
  PermissionsAndroid,
} from 'react-native';

import Sound from 'react-native-sound';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

class SoundRecorder extends Component {

    state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      finished: false,
      audioPath: AudioUtils.DocumentDirectoryPath + '/test.aac',
      hasPermission: undefined,
      decibels: 0.0,
    };

    prepareRecordingPath(audioPath){
      AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        AudioEncodingBitRate: 32000,
        MeteringEnabled: "true"
      });
    }

    componentDidMount() {
      AudioRecorder.requestAuthorization().then((isAuthorised) => {
        this.setState({ hasPermission: isAuthorised });

        if (!isAuthorised) return;

        this.prepareRecordingPath(this.state.audioPath);

        AudioRecorder.onProgress = (data) => {
          this.setState({decibels: Math.floor(data.currentMetering)/20});
          this.setState({currentTime: Math.floor(data.currentTime)});
          // console.log(Math.floor(data.currentMetering) + 160, Math.floor(data.currentPeakMetering) + 160);
        };

        AudioRecorder.onFinished = (data) => {
          // Android callback comes in the form of a promise instead.
          if (Platform.OS === 'ios') {
            this._finishRecording(data.status === "OK", data.audioFileURL, data.audioFileSize);
          }
        };
      });
    }

    _renderButton(title, onPress, active) {
      var style = (active) ? styles.activeButton : styles.button;

      var icon = (title === "RECORD") ? "mic-outline" : "pause-outline";

      return (
        <TouchableHighlight onPress={onPress} underlayColor="false">
          <Icon name={icon} type="ionicon" size={35} color="white" style={style}/>
        </TouchableHighlight>
      );
    }

    async _stop() {
      if (!this.state.recording) {
        console.warn('Can\'t stop, not recording!');
        return;
      }

      this.setState({stoppedRecording: true, recording: false});

      try {
        const filePath = await AudioRecorder.stopRecording();

        if (Platform.OS === 'android') {
          this._finishRecording(true, filePath);
        }
        return filePath;
      } catch (error) {
        console.error(error);
      }
    }

    async _record() {
      if (this.state.recording) {
        console.warn('Already recording!');
        return;
      }

      if (!this.state.hasPermission) {
        console.warn('Can\'t record, no permission granted!');
        return;
      }

      if(this.state.stoppedRecording){
        this.prepareRecordingPath(this.state.audioPath);
      }

      this.setState({recording: true});

      try {
        const filePath = await AudioRecorder.startRecording();
      } catch (error) {
        console.error(error);
      }
    }

    _finishRecording(didSucceed, filePath, fileSize) {
      this.setState({ finished: didSucceed });
      console.log(`Finished recording of duration ${this.state.currentTime} seconds at path: ${filePath} and size of ${fileSize || 0} bytes`);
      // console.log(`Decibel level: ${this.state.decibels}`);
    }

    render() {

      return (
        <View style={styles.container}>
          <View style={styles.controls}>
            <Text style={styles.progressText}>{this.state.decibels} dBs</Text>
            {this._renderButton("RECORD", () => {this._record()}, this.state.recording )}
            {this._renderButton("STOP", () => {this._stop()} )}
            <Text style={styles.progressText}>{this.state.currentTime}s</Text>
          </View>
        </View>
      );
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    controls: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    progressText: {
      padding: 45,
      fontSize: 50,
      color: "#000"
    },
    activeButton: {
      paddingTop: 20,
      marginBottom: 20,
      width: 80,
      height: 80,
      borderRadius: 80/2,
      backgroundColor: "red"
    },
    button: {
      paddingTop: 20,
      marginBottom: 20,
      width: 80,
      height: 80,
      borderRadius: 80/2,
      backgroundColor: "#38B6E1"    },

  });

export default SoundRecorder;