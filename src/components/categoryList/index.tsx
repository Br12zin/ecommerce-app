import { Text, View, Image } from 'react-native'
import React from 'react'
import { styles } from './style';


interface CategoryListProps {
  word: string;
}

const CategoryList: React.FC<CategoryListProps> = ({word}) => {

    return (
      <View style={}>
        <Text>{word}</Text>
      </View>
    )
}

export default CategoryList;