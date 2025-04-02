import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style = {styles.heading}>Flat Cards</Text>
        <View style ={ styles.container}>
            <View style = {[styles.card , styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style = {[styles.card , styles.cardTwo]}>
                <Text>Red</Text>
            </View>
            <View style = {[styles.card , styles.cardThree]}>
                <Text>Red</Text>
            </View>
        </View>

    </View>
  )
}

export default FlatCards;

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        paddingHorizontal :8,
        fontWeight: 'bold',
    },
    container:{
        flex:1,
        flexDirection:'row',
    },
    card: {
        flex:  1,
        height:100,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6,
       margin:8,
    },
    cardOne:{
        backgroundColor:'red',
    },
    cardTwo:{
        backgroundColor:'blue',
    },
    cardThree:{
        backgroundColor:'green',
    },
});