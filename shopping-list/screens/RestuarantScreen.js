import { View, Text, StyleSheet, FlatList } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import ReviewItem from '../components/ReviewItem';

export default function RestuarantScreen({ navigation }) {
  const restaurant = navigation.getParam('restaurant');
  
  let reviewRatingAverage = 0;
  let stars = [];
  
  restaurant.reviews.map((review) => {
    reviewRatingAverage += review.rating;
  });

  reviewRatingAverage = reviewRatingAverage / Object.keys(restaurant.reviews).length;

  for(let i = 0; i < reviewRatingAverage; i++) {
    stars.push(<AntDesign name="star" size={15} color="gold" key={i} />);
  }

  return(
    <View style={styles.container}>
      <View style={styles.caption}>
        <Ionicons name="ios-restaurant" size={45} color="grey" />
        <View style={styles.info}>
          <Text>{stars}</Text>
          <Text style={styles.title}>{restaurant.name}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.description}>
        <Text style={[styles.description_text, styles.terms]}>{restaurant.search_term}</Text>
        <Text style={[styles.description_text, styles.address]}>{restaurant.address}</Text>
        <View style={styles.divider} />
        <Text style={styles.description_text}>Neighborhood: {restaurant.neighborhood}</Text>
        <Text style={styles.description_text}>Map: {restaurant.latlng.lat}, {restaurant.latlng.lng}</Text>
        <View style={styles.divider} />
        <View style={styles.scheduleWrapper}>
          <View>
            <Text style={[styles.schedule]}>Mon: {restaurant.operating_hours.Monday}</Text>
            <Text style={[styles.schedule]}>Tue: {restaurant.operating_hours.Tuesday}</Text>
            <Text style={[styles.schedule]}>Wen: {restaurant.operating_hours.Wednesday}</Text>
            <Text style={[styles.schedule]}>Thr: {restaurant.operating_hours.Thursday}</Text>
          </View>
          <View>
            <Text style={[styles.schedule]}>Fri: {restaurant.operating_hours.Friday}</Text>
            <Text style={[styles.schedule]}>Sat: {restaurant.operating_hours.Saturday}</Text>
            <Text style={[styles.schedule]}>Sun: {restaurant.operating_hours.Sunday}</Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.reviews}>
        <FlatList
          data={restaurant.reviews}
          renderItem={({ item }) => (
            <ReviewItem
              review={item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)'
  },
  caption: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 15,
    marginTop: 20,
  },
  info: {
    marginLeft: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 15,
    marginHorizontal: 25,
  },
  description_text: {
    fontSize: 18,
    marginBottom: 10
  },
  terms: {
    color: 'grey',
  },
  address: {
    color: 'darkgreen',
  },
  divider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginBottom: 15,
  },
  reviews: {
    marginHorizontal: 25,
    height: 200,
  },
  scheduleWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  schedule: {
    fontSize: 12,
    marginHorizontal: 5,
    marginVertical: 5,
  }
});
