import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navbar from './src/components/Navbar';
import Categories from './src/components/Categories';

export default function App() {
  const [apiData, setApiData] = useState([]);

  async function fetchData() {
    try {
      const req = await fetch('https://api.yup.io/feed/dailyhits');
      const data = await req.json();
      console.log(data);
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // fetchData();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Categories />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
