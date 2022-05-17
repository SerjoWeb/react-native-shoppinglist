import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerH1}>Grab your</Text>
      <Text style={styles.headerH2}>delicious meal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    marginHorizontal: 25,
  },
  headerH1: {
    fontSize: 35,
  },
  headerH2: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
