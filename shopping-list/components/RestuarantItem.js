import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

function RestuarantItem({
  restaurant,
  navigation,
}) {
  let reviewRatingAverage = 0;
  let stars = [];
  
  restaurant.reviews.map((review) => {
    reviewRatingAverage += review.rating;
  });

  reviewRatingAverage = reviewRatingAverage / Object.keys(restaurant.reviews).length;

  for(let i = 0; i < reviewRatingAverage; i++) {
    stars.push(<AntDesign name="star" size={15} color="gold" key={i} />);
  }

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Restuarant', {restaurant})}>
      <View style={[styles.elevation, styles.restuarantItem]}>
          <Ionicons name="ios-restaurant" size={35} color="grey" />
          <View style={styles.info}>
              <Text>{stars}</Text>
              <View>
                  <Text style={styles.caption}>{restaurant.name}</Text>
                  <Text style={styles.terms}>{restaurant.search_term}</Text>
                  <Text style={styles.address}>{restaurant.address}</Text>
              </View>
          </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  restuarantItem: {
    backgroundColor: 'white',
    marginVertical: 3,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    padding: 5,
  },
  info: {
    marginLeft: 10
  },
  caption: {
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 2,
  },
  terms: {
    marginBottom: 2,
    color: 'grey',
  },
  address: {
    color: 'darkgreen',
  },
});

export default withNavigation(RestuarantItem);
