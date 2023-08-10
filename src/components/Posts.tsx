import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import React from 'react';
import { Post } from '../interfaces/post';
import moment from 'moment';

interface PostsProps {
  posts: Post[];
}

const Posts = (props: PostsProps) => {
  const { posts } = props;

  if (!posts) {
    return null;
  }

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <View style={styles.postHeader}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: item.web3CreatorProfile.avatar ?? null,
                }}
              />
              <Text style={styles.fullName}>
                {item.web3Preview.creator.fullname}
              </Text>
              <Image
                style={styles.protocolImage}
                source={require('../assets/images/bluesky.png')}
              />
              <Text numberOfLines={1} style={styles.handle}>
                @{item.web3CreatorProfile.handle}
              </Text>
              <View style={styles.dot} />
              <Text style={styles.createdAt}>
                {moment(item.createdAt).fromNow()}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  postsContainer: {
    paddingHorizontal: '5%',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  profileImage: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: 'blue',
  },
  fullName: {
    fontWeight: '500',
    fontSize: 12,
  },
  protocolImage: {
    width: 12,
    height: 12,
    borderRadius: 30,
    backgroundColor: 'blue',
  },
  handle: {
    color: '#ADADAD',
    fontSize: 12,
    maxWidth: 100,
  },
  dot: {
    height: 3,
    width: 3,
    borderRadius: 3,
    backgroundColor: '#ADADAD',
  },
  createdAt: {
    color: '#ADADAD',
    fontSize: 12,
  },
});
