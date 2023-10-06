import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function SignUp() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.signUp}>Войти</Text>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
  },
  signUp:{
    fontSize:18,
    backgroundColor:"#65A9DB",
    paddingVertical:13,
    paddingHorizontal:30,
    borderRadius:20,
  }
});
