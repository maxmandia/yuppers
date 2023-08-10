import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { categories } from '../data/categories';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('For You');

  function handleCategoryPress(category: string) {
    setSelectedCategory(category);
  }

  if (!categories) {
    return null;
  }

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.categoryContainer}
      contentContainerStyle={{
        flexDirection: 'row',
        gap: 12,
        paddingRight: 35,
      }}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(category)}
          style={styles.categoryButton}
          key={index}
        >
          <Text
            style={
              selectedCategory === category
                ? styles.categoryTextSelected
                : styles.categoryText
            }
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categoryContainer: {
    paddingHorizontal: '5%',
    paddingVertical: 10,
  },
  categoryButton: {
    backgroundColor: '#EEF0F4',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 20,
  },
  categoryText: {
    fontSize: 12,
    color: '#818286',
  },
  categoryTextSelected: {
    fontSize: 12,
    color: 'black',
    fontWeight: '600',
  },
});
