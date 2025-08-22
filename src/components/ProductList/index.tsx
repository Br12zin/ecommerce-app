import { Text, View, FlatList } from 'react-native'
import ProductItem from '../ProductItem';
import {styles} from './style';



export const produtos = [
  {
    id: "1", 
    imagem:"https://as1.ftcdn.net/v2/jpg/10/74/83/10/1000_F_1074831096_xh0JH97lPgnADT8dQdYpTzMiu3YJTfYd.jpg", 
    name: "Camiseta", 
    price: 150},
  {
    id: "2", 
    imagem:"https://as2.ftcdn.net/v2/jpg/15/29/53/21/1000_F_1529532160_c8S9KSxs8YcRgimp8i74Dos0TMnUEbe6.jpg", 
    name: "Calça", 
    price:100},
  {
    id: "3", 
    imagem:"https://as2.ftcdn.net/v2/jpg/13/06/77/81/1000_F_1306778198_rXy4krffCozqLvK4MLXwFCGW4OQM5m6g.jpg", 
    name: "Tênis", 
    price:250},
  {
    id: "4", 
    imagem:"https://as1.ftcdn.net/v2/jpg/03/58/64/72/1000_F_358647248_6OtdUdwhwBeHEJx9Doikb2YoeQFRKfcG.jpg", 
    name: "Notebook", 
    price:3000},
  {
    id: "5", 
    imagem:"https://as2.ftcdn.net/v2/jpg/01/82/47/95/1000_F_182479593_7Ml86b9xXjYH9Ho7wBwyIm4IdaaHwaru.jpg", 
    name: "Relógio", 
    price:500},
  {
    id: "6", 
    imagem:"https://t3.ftcdn.net/jpg/14/20/43/66/240_F_1420436601_S7keynH6bScpX5BP5KsiFaFMR8gUViEr.jpg", 
    name: "Smartphone",
    price:2000},
  {
    id: "7", 
    imagem:"https://as2.ftcdn.net/v2/jpg/14/89/92/09/1000_F_1489920920_46ZCzmf7LXeRO4ZGb3Vg45V7cdYimyNl.jpg", 
    name: "sandália", 
    price:80},
  {
    id: "8", 
    imagem:"https://t4.ftcdn.net/jpg/04/84/25/13/240_F_484251346_6gSXeFvD8PiRAB7NHln5hrqBG3I5u7D3.jpg", 
    name: "óculos de sol", 
    price:120}
];

export default function ProductList(){
  return(
    <View>
      <Text style={styles.title}>Produtos</Text>
      <FlatList 
      style={styles.list}
        data={produtos} // onde os dados são passados como array na props data
        horizontal //para deixar a lista posição horizontal
        showsHorizontalScrollIndicator={false} // para esconder a barra de rolagem horizontal
        keyExtractor={item => item.id} //para definir uma chave única para cada item
        renderItem={({ item }) => <ProductItem id={item.id} name={item.name} price={item.price} imagem={item.imagem} />} // para renderizar cada item da lista, passando o nome da categoria como props para o componente CategoryItem
      />
    </View>
  )
}