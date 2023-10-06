import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput, Platform } from 'react-native';

export default function Input() {
  return (
    <KeyboardAvoidingView
     style={styles.inputGroup}
     behavior={Platform.OS ==="ios" ? "padding" : "height"}>
     <View style={styles.container}>
        <TextInput style = {styles.input} placeholder='Логин' />
     </View>
     <View style={styles.container}>
        <TextInput style = {styles.input} placeholder='Пароль'secureTextEntry />
     </View>
     
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding:15,
    borderColor:"black",
    borderWidth:1,
    fontSize:18,
    borderRadius:20,
  },
  inputGroup:{
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },
  container:{
    width:"80%",
    padding:5,
  }
});