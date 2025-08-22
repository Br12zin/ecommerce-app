import { Text, View, FlatList } from 'react-native'
import CategoryItem from '../categoryItem';
import {styles} from './style'



const categories = [
  {id: "1", name: "Eletrônicos"},
  {id: "2", name: "Roupas"},
  {id: "3", name: "Esportes"},
  {id: "4", name: "Casa"},
  {id: "5", name: "Calçados"},
  {id: "6", name: "Moda feminina"},
  {id: "7", name: "Moda masculina"},
  {id: "8", name: "acessórios"}
];

export default function CategoryList(){
  return(
    <View>
      <Text style={styles.title}>Categorias</Text>
      <FlatList 
      style={styles.list}
        data={categories} // onde os dados são passados como array na props data
        horizontal //para deixar a lista posição horizontal
        showsHorizontalScrollIndicator={false} // para esconder a barra de rolagem horizontal
        keyExtractor={item => item.id} //para definir uma chave única para cada item
        renderItem={({ item }) => <CategoryItem name={item.name} />} // para renderizar cada item da lista, passando o nome da categoria como props para o componente CategoryItem
      />
    </View>
  )
}