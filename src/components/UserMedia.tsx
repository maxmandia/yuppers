import { StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import { Post } from '../interfaces/post';

type ImageType = {
  uri: string;
};

interface UserMediaProps {
  item: Post;
  setSelectedImage: React.Dispatch<React.SetStateAction<ImageType[]>>;
  setIsPhotoVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserMedia = (props: UserMediaProps) => {
  const { item, setSelectedImage, setIsPhotoVisible } = props;

  if (
    item.web3Preview?.attachments?.length <= 0 ||
    item.web3Preview?.attachments[0]?.images.length <= 0 ||
    item.web3Preview?.attachments[0]?.images[0] === ''
  ) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setSelectedImage([
          {
            uri: item.web3Preview?.attachments[0]?.images[0],
          },
        ]);
        setIsPhotoVisible(true);
      }}
    >
      <Image
        style={styles.userMediaImage}
        resizeMode="cover"
        source={{
          uri: item.web3Preview?.attachments[0]?.images[0],
        }}
      />
    </TouchableWithoutFeedback>
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
