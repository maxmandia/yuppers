import { StyleSheet, Text, Image } from 'react-native';
import React from 'react';
import { Post } from '../interfaces/post';

interface UserMediaProps {
  item: Post;
}

const UserMedia = (props: UserMediaProps) => {
  const { item } = props;

  if (
    item.web3Preview?.attachments?.length <= 0 ||
    item.web3Preview?.attachments[0]?.images.length <= 0 ||
    item.web3Preview?.attachments[0]?.images[0] === ''
  ) {
    return null;
  }

  return (
    <>
      <Image
        style={styles.userMediaImage}
        resizeMode="cover"
        source={{
          uri: item.web3Preview?.attachments[0]?.images[0],
        }}
      />
    </>
  );
};

export default UserMedia;

const styles = StyleSheet.create({
  userMediaImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginTop: 20,
  },
});
