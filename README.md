IMPORTANT: SPLASH SCREEN IS ONLY CONFIGURED TO ANDROID. This tutorial explains both Android and iOS:

https://medium.com/@pqkluan/how-to-implement-splash-screen-in-react-native-navigation-ee2184a1a96




Installing all package dependencies:
```
    npm install
```

Building to Android Simulator or device:
```
    npm run android
```

Running on Android
```
    npm start
```

Building to a real Android device which will use it on production(.apk):
```
   npm run build-android 
```

Developing on a real device:

https://facebook.github.io/react-native/docs/running-on-device

```
adb shell input keyevent 82
```

```
adb -s <device name> reverse tcp:8081 tcp:8081

adb devices
```

________________
How to open emulator without oppening Android Studio
cd  ~/Android/Sdk/emulator && ./emulator -avd Pixel_API_28

________________
How to debug React Native Code and Redux Store?
The best tool is (react Native Debugger)[https://github.com/jhen0409/react-native-debugger];

It's not a package, it's a tool. Therefore it needs to be downloaded and installed:
(Download of last release)[https://github.com/jhen0409/react-native-debugger/releases];

____________________
React Native Navigation package:
It's equivalent to React Router but once mobile hasn't URLs
it needs another approach to controll on which screens we're.

There are two main steps to install (react-native-navigation library)[https://github.com/wix/react-native-navigation](see (Documentation)[https://wix.github.io/react-native-navigation/#/installation-android])

Note: it needs to be installed separetly on Android and on iOS;

____________________
Updating build Gradle from 2.0 to 3.0 version:
Google Maps API for example uses 3.0 gradle version. Normally it will be already configured.

In the case its not:
https://itnext.io/install-react-native-maps-with-gradle-3-on-android-44f91a70a395
______________
Troubleshotting

1. ERROR  Packager can't listen on port 8081
Sometimes npm start command continues to use the 8081 port even when it was stopped. Therefore it needs to be killed.

On Linux:

```sudo lsof -i :8081 //see who is using 8081 port ```
```kill -9 <pid> //pid is the process id you got using the command above```

PS: normally there will be more than one process listening/using this port (Debugger, Emulator, etc). You should kill "NODE" process;

2. Wrong JAVA_HOME folder: 
How to set JAVA_HOME to env variable:

First, add it to bashrc file running the command below (maybe jre folder will be different on your computer):

```echo 'export JAVA_HOME=/usr/local/android-studio/jre/bin' >> ~/.bashrc```

In order to take effect on the current terminal, execute it:
```source /etc/profile/```

If it doesn't take effect instantly, reebot the system.

3. adb devices shows a device without permissions:

```
sudo ./adb kill-server
sudo ./adb start-server
sudo ./adb devices
```









