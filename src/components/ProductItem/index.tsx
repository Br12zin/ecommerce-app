import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useRouter } from 'expo-router';


interface ProductItemProps {
    id: string;  
    name: string;
    price: number;
    imagem: string;

}

const ProductItem: React.FC<ProductItemProps> = ({name, price, imagem, id}) => {

    const router = useRouter();

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.ProductItem}
        onPress={() => router.push({
          pathname:"/ProductDetail/[id]", 
          params: {id: id}})
        }
        >

        <Image source={{uri: imagem}}  style={styles.image} resizeMode='cover' />
        <Text style={styles.title}>{name}</Text>
        <Text>{'R$' + price}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default ProductItem;