import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { elevation } from '../common/styles';

export default function CategoryItem({
  image,
  caption,
  index,
  active,
  handlePress,
}) {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[
        styles.elevation,
        styles.categoryItem,
        index === 0 ? {marginLeft: 25} : {marginLeft: 5},
        index === 5 ? {marginRight: 25} : {marginRight: 5},
        active ? {backgroundColor: 'rgb(241,186,87)'} : {backgroundColor: 'white'}
      ]}>
          <View style={styles.imageWrapper}>
            <Image source={image} style={styles.image} />
          </View>
          <Text style={styles.text}>{caption}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  elevation,
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 15,
  },
  image: {
    width: 35,
    height: 35
  },
  imageWrapper: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
  },
  text: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
