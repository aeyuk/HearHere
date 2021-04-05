import React, {Component} from 'react';
import { Icon } from 'react-native-elements';
import { Image } from 'react-native';
import { SlideUpImage } from './SlideUpImage.js';

import {  
  HAPPY, 
  LISTENING, 
  TOO_LOUD1,
  TOO_LOUD2,
  TOO_LOUD3
} from '../Assets/Images/Images.js'


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
      currentMetering: 0.0,
      elephant: HAPPY,
      message: "Record a sound and see how loud it is!"
    };

    prepareRecordingPath(audioPath){
      AudioRecorder.prepareRecordingAtPath(audioPath, {
        SampleRate: 22050,
        Channels: 1,
        AudioQuality: "Low",
        AudioEncoding: "aac",
        AudioEncodingBitRate: 32000,
        MeteringEnabled: true
      });
    }

    componentDidMount() {
      AudioRecorder.requestAuthorization().then((isAuthorised) => {
        this.setState({ hasPermission: isAuthorised });

        if (!isAuthorised) return;

        this.prepareRecordingPath(this.state.audioPath);

        AudioRecorder.onProgress = (data) => {
          this.setState({currentMetering: Math.floor(data.currentMetering + 80)});
          this.setState({currentTime: Math.floor(data.currentTime)});
          console.log("Current metering: ", this.state.currentMetering);
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

      this.setState({recording: true, elephant: LISTENING, message: "Listening!"});

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
      this.setElephantAndMessage()
    }

    setElephantAndMessage() {
      var elephant = HAPPY;
      var message = "This level of sound is safe for your hearing!"
      if (this.state.currentMetering >= 71 && this.state.currentMetering < 85) {
        elephant = TOO_LOUD1
        message = "Sound at this level can damage your hearing after a few hours of listening."
      } else if (this.state.currentMetering >= 85 && this.state.currentMetering < 100) {
        elephant = TOO_LOUD2
        message = "Sound at this level can damage your hearing after a few minutes of listening."
      } else if (this.state.currentMetering >= 100) {
        elephant = TOO_LOUD3
        message = "Sound at this level is damaging to your ears for any amount of time!!"
      } 
      this.setState({elephant: elephant, message: message});
    }

    render() {

      return (
        <View style={styles.container}>
          {this._renderButton("RECORD", () => {this._record()}, this.state.recording )}
          {this._renderButton("STOP", () => {this._stop()} )}
          <Text style={styles.message}>{this.state.message}</Text> 
          <SlideUpImage elephant={this.state.elephant} 
                        recording={this.state.recording} 
                        stoppedRecording={this.state.stoppedRecording}/>
        </View>
      );
    }
  }


  var styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
      // bottom: '-30%'
      // position: 'absolute'
    },
    message: {
      fontSize: 20,
      color: "#000000",
      fontWeight: 'bold',
      margin: 10,
      flexWrap: 'wrap',
      textAlign: 'center'
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
      backgroundColor: "#38B6E1"    
    },
  });

export default SoundRecorder;