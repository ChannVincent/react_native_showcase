# React Native Showcase

React Native application for Android and iOS.

## Init project

To create a new project :
- cd path/to/your/git/folder
- react-native init project_name
=> once finished :
- open "project_name" folder with Deco IDE (https://www.decosoftware.com/)
- run cmd-P to build iOS project
=> you can now run your project on iOS or Android simulator

To import this project :
- cd path/to/your/project/folder
- npm install (install node modules and all dependencies listed in your "packages.json")
=> once finished :
- open "project_name" folder with Deco IDE (https://www.decosoftware.com/)
- run cmd-P to build iOS project
=> you can now run your project on iOS or Android simulator

Run on Android :
- With your Android Studio install you can then install many Android emulators
- In your "android > local.properties" set path to Android SDK : sdk.dir=/Users/vincentchann/Library/Android/sdk
- To get the list of your emulators : /Users/vincentchann/Library/Android/sdk/tools/emulator -list-avds
- To run your emulators : /Users/vincentchann/Library/Android/sdk/tools/emulator -avd Nexus_5_API_23 -netdelay none -netspeed full

Generate release APK :
- https://facebook.github.io/react-native/docs/signed-apk-android.html
- cd android && ./gradlew assembleRelease

Generate release IPA :
- https://medium.com/react-native-development/deploying-a-react-native-app-for-ios-pt-1-a79dfd15acb8
- generate JS bundle : react-native bundle --entry-file index.ios.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
- open react-native showcase with XCode
- import & choose the right certificate
- generate Archive
- upload to iTunes Connect or export as Adhoc

## Setup

IDE :
- Neuclide single package built on top of Atom by Facebook specifically for React Native.

Library list :
- Architecture : React, Redux, React-Redux, ReduxThunk.
- Navigation : react-native-router-flux
- Skinning : native-base (split skinning depending on platform : https://nativebase.io/?ref=producthunt)

## Roadmap MVP (Minimum Valuable Product)

- RN-1 : init : configure project
- RN-2 : navigation : set navigation screens with fake scenes
- RN-3 : redux : set redux architecture to pass data between scenes
- RN-4 : app style : set styling library : native base : group all the design in one file
- RN-5 : app structure : set scene sequence from 1 file
- RN-6 : asset manager : load image from different path

- RN-7 : splash screen : first screen to start, after 5 seconds if no click detected start main flow
- RN-8 : tab bar : Main flow that contains all controllers
- RN-9 : list view : 1st tab, onclick go to POIView
- RN-10 : web view : 2nd tab, assets loaded from local + custom behaviour
- RN-11 : keypad : 3rd tab, find your collection based on cartel, onValidate go to POIView
- RN-12 : poi view : Detailed view with audio, image and text

- RN-? : test automation

## Specifications

- full embbeded assets
- input json content description
- input json structure application
- input application style
