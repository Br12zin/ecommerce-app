import { Text, View, FlatList } from 'react-native'
import ProductItem from '../ProductItem';
import {styles} from './style';
import { useEffect, useState } from 'react';
import ProductService from '@//models/services/ProductService';
import { Product } from '@//models/types/Product';




export default function ProductList(){

  const [data, setData] = useState<Product[]>([]);
  const _service = new ProductService();

  useEffect(()=>{
    _service.getAll().then((response)=> {
      setData(response);
    });
  }, []);

  return(
    <View>
      <Text style={styles.title}>Promoções</Text>
      <FlatList 
      style={styles.list}
        data={data} // onde os dados são passados como array na props data
        horizontal //para deixar a lista posição horizontal
        showsHorizontalScrollIndicator={false} // para esconder a barra de rolagem horizontal
        keyExtractor={item => item.id_produto.toString()} //para definir uma chave única para cada item
        renderItem={({ item }) => <ProductItem id={item.id_produto.toString()} name={item.produto} price={item.preco} imagem={`http://10.63.45.25:8084/produtos/imagens/${item.imagem}`} />} // para renderizar cada item da lista, passando o nome da categoria como props para o componente CategoryItem
      />
    </View>
  )
}