import { FlatList } from 'react-native';

import CategoryItem from './CategoryItem';

export default function Categories({ products, activeCategory, SetActiveCategory }) {
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <CategoryItem
          image={item.image}
          caption={item.caption}
          index={index}
          active={item.caption === activeCategory}
          handlePress={() => SetActiveCategory(item.caption)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
