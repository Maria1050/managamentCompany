
import * as React from 'react';
import { View,StyleSheet } from 'react-native';

import Input from './components/Authorization/Input.js';
import Registration from './components/Authorization/Registration.js';
import SignUp from './components/Authorization/SignUp.js';
import Welcome from './components/Authorization/Welcome.js';
import AboutUs from './components/Authorization/AboutUs.js';


export default function App() {
  return (
    <div className='main' style={styles.main}>
      <Welcome />
      <View style={styles.container}>
        <Input />
        <SignUp />
        <Registration />
      </View>
      <AboutUs />
    </div>
  );
}



const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    position: "relative",
    backgroundColor: "#D7F5FF"
  },
  container: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)'
  },
});
