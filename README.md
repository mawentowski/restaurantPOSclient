```shell
# nodeJS is dependency, check others.
# create an expo app
npx create-expo-app AwesomeProject
cd AwesomeProject
# starts server where you can scan your phone
npx expo start
# Install react native paper
npm install react-native-paper
# work on the web: https://docs.expo.dev/workflow/web/
npx expo install react-dom react-native-web @expo/webpack-config
# start the webpack dev server with:
npx expo start --web
# View at something like http://localhost:19006
```

Sample food delivery app:
https://github.com/anggaprytn/Restaurant_Client

Components:
https://callstack.github.io/react-native-paper/docs/components/Button/

# Lessons learned

If you use `StyleSheet`, you must import it _in the file_: `import { StyleSheet } from "react-native"`.

I think each component needs `import * as React from "react";`, but not sure.
