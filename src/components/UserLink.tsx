import { StyleSheet, Text, View } from 'react-native';
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
    <View>
      <Text>UserLink</Text>
    </View>
  );
};

export default UserLink;

const styles = StyleSheet.create({});
