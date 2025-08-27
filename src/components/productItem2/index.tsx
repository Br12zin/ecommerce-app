import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useRouter } from 'expo-router';

interface ProductItem2Props {
    id: string;  
    name: string;
    price: number;
    imagem: string;
}

const ProductItem2: React.FC<ProductItem2Props> = ({name, price, imagem, id}) => {
    const router = useRouter();

    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.ProductItem}
            onPress={() => router.push({
              pathname:"/ProductDetail/[id]", 
              params: {id: id}})}
          >
            <Image source={{uri: imagem}} style={styles.image}  />
          </TouchableOpacity>

          <View style={styles.details}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>{'R$' + price.toFixed(2)}</Text>
          </View>
        </View>

        {/* Linha separada */}
        <View style={styles.line} />
      </View>
    )
}

export default ProductItem2;
