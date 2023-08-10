import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Navbar = () => {
  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity>
        <Ionicons name="menu-outline" size={32} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="options-outline" size={26} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
  },
});
