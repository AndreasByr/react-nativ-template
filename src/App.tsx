import { StyleSheet, Text, View } from 'react-native';
import Template from './components/template/Template';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        <h1> React Nativ Template</h1>
      </Text>
      <Template sampleTextProp="Hello World!" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
