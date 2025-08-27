import { Text, View } from 'react-native'
import React from 'react'
import colors from '@//styles/colors';
import Title from '@//components/title';
import Promo from '@//components/promo';
import { ScrollView } from 'react-native';
import CategoryList from '@//components/categoryList';
import ProductList from '@//components/ProductList';
import ProductList2 from '@//components/productList2';


export default function Index() {

    return (
      <>  
      <View style={{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center", 
        backgroundColor: colors.gray[800]
        }}>


          <ScrollView>
        <Title word={"Título"} />
        <Promo urlImage={"https://t4.ftcdn.net/jpg/02/81/21/03/240_F_281210331_DUn5TlK0N3Wq9aVMQmU3Ytmx3KhFFT0I.jpg"}/>
        <CategoryList />
        <ProductList />
        <ProductList2 />
          </ScrollView>
      </View>
      </>
    );
}