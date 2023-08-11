import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { Post } from '../interfaces/post';
import moment from 'moment';
import Ionicons from '@expo/vector-icons/Ionicons';
import UserMedia from './UserMedia';
import UserLink from './UserLink';
import ImageView from 'react-native-image-viewing';

interface PostsProps {
  posts: Post[];
}

type ImageType = {
  uri: string;
};

const Posts = (props: PostsProps) => {
  const { posts } = props;
  const [isPhotoVisible, setIsPhotoVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageType[]>([]);

  if (!posts) {
    return null;
  }

  return (
    <View style={styles.postsContainer}>
      <FlatList
        data={posts}
        contentContainerStyle={{
          paddingBottom: 200,
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.postContainer}>
              <ImageView
                images={selectedImage}
                imageIndex={0}
                visible={isPhotoVisible}
                onRequestClose={() => setIsPhotoVisible(false)}
              />
              <View style={styles.postHeader}>
                {item.web3CreatorProfile.avatar !== '' ? (
                  <Image
                    style={styles.profileImage}
                    source={{
                      uri: item.web3CreatorProfile.avatar ?? null,
                    }}
                  />
                ) : (
                  <View style={styles.profileImage} />
                )}
                <Text numberOfLines={1} style={styles.fullName}>
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
              <View style={styles.postTextContentContainer}>
                <Text style={styles.postText}>{item.previewData.title}</Text>
                <UserMedia
                  setIsPhotoVisible={setIsPhotoVisible}
                  setSelectedImage={setSelectedImage}
                  item={item}
                />
                <UserLink item={item} />
              </View>
              <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.metaContainer}>
                  <Ionicons name="heart-outline" size={16} color="#ADADAD" />
                  <Text style={styles.metaCountText}>
                    {item.web3Preview.meta.likeCount}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.metaContainer}>
                  <Ionicons
                    name="chatbubble-outline"
                    size={16}
                    color="#ADADAD"
                  />
                  <Text style={styles.metaCountText}>
                    {item.web3Preview.meta.replyCount}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.metaContainer}>
                  <Ionicons name="repeat-outline" size={16} color="#ADADAD" />
                  <Text style={styles.metaCountText}>
                    {item.web3Preview.meta.replyCount}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.metaContainer}>
                  <Ionicons
                    name="ellipsis-horizontal-outline"
                    color="#ADADAD"
                    size={16}
                  />
                  <Text style={styles.metaCountText}>
                    {item.web3Preview.meta.replyCount}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  // header section
  postsContainer: {
    marginVertical: 5,
  },
  postContainer: {
    paddingHorizontal: '3%',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5E5',
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
    maxWidth: 115,
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
  // content section
  postTextContentContainer: {
    paddingVertical: 10,
  },
  postText: {},

  // footer section
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaCountText: {
    fontSize: 12,
  },
});
