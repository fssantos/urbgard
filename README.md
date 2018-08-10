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

```echo 'export JAVA_HOME=/usr/local/android-studio/jre' >> ~/.bashrc```

In order to take effect on the current terminal, execute it:
```source /etc/profile/```

If it doesn't take effect instantly, reebot the system.









