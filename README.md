# HearHere

## PLEASE:

## Brief Tech Details
* Built with react-native
* You'll need to have Node and npm installed
* Install the react-native cli with `npm install -g react-native-cli`
* I was programming for ios to start... I don't know what the headaches would be for transferring to android.
* When you've cloned the repo, you may need to do a pod install:
```
cd ios
pod install
```
* If you're working on a mac, you will probably need to have Xcode installed
* Start the app with `npx react-native run-ios`

## Screens

### Home
The home page is pretty blank as of right now. I'd like to eventually have a loading page with an animation/logo that fades into the homescreen. 
It will probably stay pretty bare.

### Listen
This is one of the two probably most difficult parts of the app. We need to find the best third-party option for recording audio and measuring decibels.
Challenges:
* Getting app permission to record audio
* Having audio stop recording once user lifts finger
* Being factually accurate in how much damage certain decibel levels would cause
* Creating and inserting animations for each decibel level, i.e "That sound was as loud as a *blender*! If you listened to it for *x* amount of time it would cause *x* amount of damage
* Educating but not scaring the children

### Game
Eventually this game will be something along the lines of children being able to drag a music note through the ear and stop and learn about each of the parts. 
It could probably just be some sort of sequential "slides" type of thing where they press the next button and it takes them to the next step
Challenges:
* Animating the ear
* Being factually accurate

### Careers
I think this screen should be pretty easy. I think about six? different careers related to hearing/deafness/auditory care could be on the page, maybe with a cute picture for each one. 
And then on-tap, a pop up window would appear with a brief snippet of what they do.
