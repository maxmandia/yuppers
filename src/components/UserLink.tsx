import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Post } from '../interfaces/post';

interface UserLinkProps {
  item: Post;
}

const UserLink = (props: UserLinkProps) => {
  const { item } = props;

  if (
    item.web3Preview?.attachments?.length <= 0 ||
    item.web3Preview?.attachments[0]?.title === '' ||
    item.web3Preview?.attachments[0]?.description === ''
  ) {
    return null;
  }

  return (
    <View style={styles.linkContainer}>
      <Image
        style={styles.linkImage}
        resizeMode="cover"
        source={{
          uri: item.web3Preview.attachments[0].images[0],
        }}
      />

      <View style={styles.linkFooterContainer}>
        <Text style={styles.linkTitle}>
          {item.web3Preview.attachments[0].title}
        </Text>
        <Text numberOfLines={2} style={styles.linkDescription}>
          {item.web3Preview.attachments[0].description}
        </Text>
        <View style={styles.linkUrlContainer}>
          {item.web3Preview.attachments[0].favicon && (
            <Image
              style={styles.linkFavicon}
              source={{
                uri: item.web3Preview.attachments[0].favicon,
              }}
            />
          )}
          <Text numberOfLines={1} style={styles.linkUrl}>
            {item.web3Preview.attachments[0].url}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default UserLink;

const styles = StyleSheet.create({
  linkContainer: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkImage: {
    width: '103%',
    height: 150,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    borderColor: 'grey',
  },
  linkFooterContainer: {
    padding: 12,
    flexDirection: 'column',
    gap: 5,
    borderTopColor: 'white',
    borderColor: 'grey',
    borderWidth: 0.2,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
  },
  linkTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  linkDescription: {
    fontSize: 13,
  },
  linkUrlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkFavicon: {
    height: 10,
    width: 10,
  },
  linkUrl: {
    color: '#ADADAD',
    fontSize: 12,
  },
});
