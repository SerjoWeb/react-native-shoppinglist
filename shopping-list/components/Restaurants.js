import { View, StyleSheet, Text, ActivityIndicator, FlatList } from 'react-native';
import { useEffect } from 'react';

import useRestaurants from '../hooks/useRestaurants';
import RestuarantItem from './RestuarantItem';

export default function Restaurants({ searchTerm }) {
  const [{data, loading, error}, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(searchTerm);
  }, [searchTerm]);

  if (loading) return (
    <View style={[styles.restaurants, styles.loader]}>
      <ActivityIndicator size='large' color='grey' />
    </View>
  );

  if (error) return (
    <View style={[styles.restaurants, styles.loader]}>
      <Text style={styles.error}>{error}</Text>
    </View>
  );

  return (
    <View style={styles.restaurants}>
      <Text style={styles.caption}>Top Restaurants</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <RestuarantItem
            restaurant={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  restaurants: {
      marginHorizontal: 25,
      marginVertical: 15,
      marginTop: 5,
      height: 228,
  },
  caption: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  error: {
    fontSize: 20,
    color: 'darkred',
    textAlign: 'center',
  },
  loader: {
    animation: 'spin 2s linear infinite',
  },
});
