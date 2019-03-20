# native-react-tic-tac-toe
# SET UP
This README will guide you in setting up your environment to write React Native code.
Tutorial for this specific project is here: //https://medium.com/@davidguandev/building-a-tic-tac-toe-in-react-native-2a3c44e697f2

ReadMe notes taken from here:
https://hackernoon.com/getting-started-with-react-native-in-2019-build-your-first-app-a41ebc0617e2

- Use a Mac, too much hassle on a PC
- Install Nodejs
	- If you have an older version of Node/npm try `n`.
		- `npm install -g n`
		- `n` this will show you what versions of Node you have
		- `n XX` will let you install another version of Node and switch between them easily
		- for this project I went to 11.10.0 by entering `sudo n 11.10.0`
		- if you need to switch to another version, for Clienteling for example.. `sudo n 6.12.3`
- Install Watchman
	- Open Terminal
	- Use Homebrew to install. If you don't have Homebrew yet, install it.
		- `brew install watchman`
- Should have Java SE Development Kit (JDK) version >=8. I didn't even bother looking, you should be good here.
- Need Xcode. Install if you don't have it.
- Install Android Studio if you don't have it. https://developer.android.com/studio/index.html
- Install React Native CLI with NPM in Terminal
	- `npm install -g react-native-cli`
	- `react-native --version` This doc was written for react-native-cli: 2.0.1 / react-native: 0.59.1
- Install React Native Debugger
	- `brew cask install react-native-debugger`
	- This will install it in your /applications/ folder
	- https://github.com/jhen0409/react-native-debugger

# PRACTICE PROJECT
If you want to create a sandbox just to play and learn, 
- Create a new directory, `mkdir myTestApp`
- Move to new direcotry, `cd myTestApp`
- Initialize a new react native app, `react-native init testApp1`

This command will create a new scaffold for you. Some key files to understand:
- App.js - the first file in any React Native app that is the entry point of the app development process. Whatever you write inside this file, it will get displayed on the mobile device.
- index.js - is the entry point to trigger the app on a device or simulator
- ios - is the folder containing an Xcode project and the code required to bootstrap this app for iOS devices
- android - is the folder containing android related code to bootstrap this app for Android devices
- package.json - where every dependency installed gets listed

# RUN THE APP
You'll want three terminal windows for this.
- One will run Metro (the server basically)
- One for the ios simulator
- One for the android simulator

Of course you don't need or probably even want to run both simulators at the same time.
First terminal: 
- `npm start`
This will fire up Metro and get everything ready. This must stay running in its own window/tab while you run the simulators.

## RUNNING ON IOS
Second terminal:
- `react-native run-ios`
This takes some time the first run. It eventually will open a simulator (which one depends on your version of xcode) and load your skeleton app. 
- running `xcrun simctl list devices` will give you a list of available simulators on your mac. You can pick any of them by:
- `react-native run-ios --simulator="iPhone 8 Plus"` using the name from the list you just retrieved

## RUNNING ON ANDROID
To run on emulator,
- Open Android Studio
- File > Open - Open your project at the android folder, not root. You're not developing here, just building for the emulator.
- Wait. It takes a minute to build.
- When its done, go to Tools > AVD Manager
- If you don't have any virtual devices, you'll need to create some
- Start the emulator you want to use.
- Once it starts, go to your Third terminal and run your app
	- `react-native run-android`

# MAKE SOME CHANGES
Modify App.js
`
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.instructions}>Hello World!</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
`
- Save
- Reload your emulators, 
	- Focus the emulator and double tap `R` on your keyboard for android
	- Focus the emulator and CMD + R for ios

# HOT RELOAD
Hot Reloading feature in react native application helps to display any updates occur in UI, whenever you save anything in react native app-code. On enabling this feature, you do not have to press Cmd + R on iOS and double R on Android again for seeing the changes on the UI you just made.
- Focus on emulator
- CMD + M (android)
- CMD + D (ios)
- Click on Enable Hot Reloading in the menu that opens.

# DEBUGGING AND REDUX TOOLS
- Open React Native Debugger from your Applications folder
- Start an emulator
- Open the dev panel (CMD + M android, or CMD + D ios)
- Stop Remote JS Debugging if running
- Click Start Remote JS Debugging
- Debugging will now be in the React Native Debugger along with Redux tools
