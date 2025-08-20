import { Text, View } from 'react-native'
import React from 'react'
import colors from '@//styles/colors';
import Title from '@//components/title';
import Promo from '@//components/promo';


export default function Index() {

    return (
      <>  
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.gray[800]}}>
        <Title word={"Título"} />
        <Promo urlImage={"https://picsum.photos/200/300"}/>
      </View>
      </>
    );
}