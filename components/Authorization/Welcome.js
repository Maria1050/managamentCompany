import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.wel}>HomeChat</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wel: {
    width: "100%",
    fontSize: 24,
    backgroundColor: "cyan",
    padding: 20,
    paddingLeft: 40,
    fontWeight:"bold",
  },
});
