import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { useState } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Restaurants from '../components/Restaurants';

export default function HomeScreen() {
  const [activeCategory, SetActiveCategory] = useState('');

  const products = [
    {
      caption: 'Burger',
      image: require('../assets/product-images/burger.ios.png')
    },
    {
      caption: 'Pizza',
      image: require('../assets/product-images/pizza.ios.png')
    },
    {
      caption: 'Pasta',
      image: require('../assets/product-images/pasta.ios.png')
    },
    {
      caption: 'Steak',
      image: require('../assets/product-images/steak.ios.png')
    },
    {
      caption: 'Cake',
      image: require('../assets/product-images/cake.ios.png')
    },
    {
      caption: 'Drink',
      image: require('../assets/product-images/smoothies.ios.png')
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search searchCategory={SetActiveCategory} />
      <Categories
        products={products}
        activeCategory={activeCategory}
        SetActiveCategory={SetActiveCategory}
      />
      <Restaurants searchTerm={activeCategory} />
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)'
  }
});
