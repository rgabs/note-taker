# Note Taker App

It is a simple note taking application that runs on both android and ios.

### Setting up the system

- Latest android studio and SDK setup
- Android simulator running in the background
- XCode 9+ (If you have a mac)
- Yarn
- watchman
- react-native-cli
- Node V8+
- An IDE (preferrably Atom)

To install all of the above,
- Go to https://facebook.github.io/react-native/docs/getting-started.html
- Click on **Building Projects with Native Code**
- Follow the steps to install depencies

After the setup is done,
- `yarn`: To install node_modules
- `yarn ios`: To start iOS app.
- `yarn android`: To start Android app(Make sure that you have a device/emulator connected).

Note: For installing dependencies, yarn is recommended since all the package numbers are being locked using yarn.lock file.


## Running the application on local

- `yarn` to install all the dependencies.
- `yarn ios` will start the app on the ios emulator in development mode.
- `yarn android` will run the app on android device/emulator. Make sure that you have one of those connected.


## Viewing the app on expo

This app is hosted on Expo as well.
Steps to view the app on expo:

- Install Expo client app on your [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)/[iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) device.

- Open the app and scan this [QR code](#qr-code)
  <div style="text-align:center" id='qr-code'>
  <img src="/expo_qr.png" style="width: 80%;display:inline-block; max-width: 250px" hspace="20">
  <br></br>
  </div>

- Alternatively, you can paste this link on expo client app `exp://expo.io/@rgabs/note-taker`

## Screenshots

<div style="text-align:center" id='qr-code'>
<img src="/screenshots/1.png" style="width: 30%;display:inline-block;" hspace="20">
<img src="/screenshots/2.png" style="width: 30%;display:inline-block;" hspace="20">
<img src="/screenshots/3.png" style="width: 30%;display:inline-block;" hspace="20">
<img src="/screenshots/4.png" style="width: 30%;display:inline-block;" hspace="20">
<img src="/screenshots/5.png" style="width: 30%;display:inline-block;" hspace="20">
<img src="/screenshots/6.png" style="width: 30%;display:inline-block;" hspace="20">
</div>
