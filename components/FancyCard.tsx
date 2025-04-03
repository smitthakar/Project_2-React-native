import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
<style>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap');
</style>

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>FancyCard</Text>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Image
            source={{
              uri: 'https://images.indianexpress.com/2017/09/sidi_saiyyed_mosque_-_marble_screen.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Sidi Saiyad</Text>
            <Text style={styles.cardLabel}>Mosque in Ahmedabad, Gujarat</Text>
            <Text style={styles.cardDecription}>
              The Sidi Sayed Mosque is famed for its exquisite jali windows,
              spider web fine, depicting the intricate intertwining branches of
              the 'tree of life'.
            </Text>
            <Text style={styles.cardFooter}>
              Images may be subject to copyright
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  card: {
    width:390,
    height:360,
    borderRadius:8,
    marginHorizontal:10,
    marginVertical:16,
  },

  ElevatedCard: {
    backgroundColor:'#A62C2C',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    }
  },
  cardImage: {
    border:8,
    height: 180,
    borderTopLeftRadius:6,
    borderTopRightRadius:6
  },
  cardBody: {
    flex:1,
    flexGrow:1,
    paddingHorizontal:12
  },

  cardTitle: {
    fontSize:29,
    // fontWeight:'bold',
    paddingHorizontal:6,
    color:'white',
    marginBottom:6,
    marginTop:12,
    fontFamily:'Red Hat Display'
},
cardLabel: {
    color:'white',
    fontSize:16,
    fontWeight:'600',
    marginBottom:10,
    paddingHorizontal:6,
    fontFamily:'Red Hat Display',
  },
  cardDecription: {
    width:385,
    fontSize:14,
    marginBottom:10,
    color:'#F2EFE7',
    paddingHorizontal:6,
    fontStyle:'italic',
    fontFamily:'Monrope',
  },
  cardFooter: {
    color:'white',
    paddingHorizontal:6,
    fontSize:12,
    // fontStyle:'italic',
    fontFamily:'Red Hat Display'
    },
});
