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
- RN-4 : splash screen : first screen to start, after 5 seconds if no click detected start main flow
- RN-5 : tab bar : Main flow that contains all controllers
- RN-5 : list view : 1st tab, onclick go to POIView
- RN-6 : web view : 2nd tab, assets loaded from local + custom behaviour
- RN-7 : keypad : 3rd tab, find your collection based on cartel, onValidate go to POIView
- RN-8 : poi view : Detailed view with audio, image and text

## Specifications

- full embbeded assets
- input json content description
- input json structure application
- input application style
