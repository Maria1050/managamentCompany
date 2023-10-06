import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function AboutUs() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.aboutUs}>О нас</Text>
      <a href={''}>Пользовательское соглашение</a>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "60%",
    position: "absolute",
    bottom: "50px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: 'center'
  },
  aboutUs:{
    fontSize:18,
    backgroundColor:"#4285B4",
    paddingVertical:13,
    paddingHorizontal:30,
    borderRadius:20
  }
});
