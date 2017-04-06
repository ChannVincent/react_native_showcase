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
