import { StyleSheet, View, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ReviewItem({
    review,
}) {
  let stars = [];

  for(let i = 0; i < review.rating; i++) {
    stars.push(<AntDesign name="star" size={15} color="gold" key={i} />);
  }

  return (
    <View style={styles.ReviewItem}>
      <View style={styles.rating}>
        <Text style={styles.name}>{review.name}</Text>
        <Text>{stars}</Text>
      </View>
      <Text>{review.comments}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ReviewItem: {
    backgroundColor: 'white',
    marginVertical: 3,
    alignSelf: 'stretch',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 4,
    padding: 5,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  }
});

