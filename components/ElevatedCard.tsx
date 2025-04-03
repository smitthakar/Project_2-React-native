import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ElevatedCard extends Component {
  render() {
    return (
      <View>
        <Text style = {styles.heading}>ElevatedCard</Text>
        <ScrollView horizontal={true} style= {styles.container}>
            <View style= {[styles.card ,styles.elevatedCard]}>
                <Text>1</Text>
            </View>
            <View style= {[styles.card ,styles.elevatedCard]}>
                <Text >2</Text>
            </View>
            <View style= {[styles.card ,styles.elevatedCard]}>
                <Text >3</Text>
            </View>
            <View style= {[styles.card ,styles.elevatedCard]}>
                <Text >4</Text>
            </View>
            <View style= {[styles.card ,styles.elevatedCard]}>
                <Text >5</Text>
            </View>
            <View style= {[styles.card ,styles.elevatedCard]}>
                <Text >6</Text>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        paddingHorizontal :8,
        fontWeight: 'bold',
    },
    container:{
    },

    card:{
        margin:8,
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },
    elevatedCard:{
        backgroundColor:'#FDAB9E',
        elevation:4,
    },

});