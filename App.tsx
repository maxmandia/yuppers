import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Navbar from './src/components/Navbar';
import Categories from './src/components/Categories';
import Posts from './src/components/Posts';
import { Post } from './src/interfaces/post';

export default function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [startingPage, setStartingPage] = useState<number>(0);

  async function fetchData() {
    try {
      const req = await fetch(
        `https://api.yup.io/feed/dailyhits?start=${startingPage}&limit=10`
      );
      const data = await req.json();

      setPosts((prev: Post[] | []) => {
        if (prev.length <= 0) {
          return data;
        } else {
          return [...prev, ...data];
        }
      });
      setStartingPage((prev) => prev + 10);
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
      <Posts fetchData={fetchData} posts={posts} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
