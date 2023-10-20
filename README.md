```shell
# create an expo app
npx create-expo-app AwesomeProject
cd AwesomeProject
# starts server where you can scan your phone
npx expo start
# Install react native paper
npm install react-native-paper
# install expo-clo to view changes on the web simultaneously
npm install -g expo-cli
```

Sample food delivery app:
https://github.com/anggaprytn/Restaurant_Client

Components:
https://callstack.github.io/react-native-paper/docs/components/Button/

# Lessons learned

If you use `StyleSheet`, you must import it _in the file_: `import { StyleSheet } from "react-native"`.

I think each component needs `import * as React from "react";`, but not sure.
