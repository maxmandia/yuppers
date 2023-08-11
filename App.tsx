import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navbar from './src/components/Navbar';
import Categories from './src/components/Categories';
import Posts from './src/components/Posts';
import { Post } from './src/interfaces/post';
import { postWithLink } from './src/data/post-with-link';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchData() {
    try {
      const req = await fetch('https://api.yup.io/feed/dailyhits?start=1');
      const data = await req.json();

      console.log(data);
      setPosts([...data, postWithLink]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
      <Categories />
      <Posts posts={posts} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
