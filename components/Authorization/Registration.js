import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Registration() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.registration}>Регистрация</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    marginTop:10,
  },
  registration:{
    fontSize:18,
    paddingVertical:13,
    paddingHorizontal:30,
  }
});
