import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function ActionCard  () {
function openWebsite(Website : string){
      Linking.openURL(Website)
} 
  return (
    <View>
        <Text style = {styles.heading}>Blog Card</Text>
        <View style = {[styles.card , styles.elevatedCard]}>
          <View >
            <Text style = {styles.blogHeading}>JavaScript Tutorial</Text>
          </View>
          <Image
            source={{
              uri: 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png',
            }}
            style = {styles.blogImage}
          />
        
        <View style= {styles.bodyContainer}>
          <Text style= {styles.bodyText} numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            doloremque perspiciatis dolor iure, impedit hic culpa sit voluptas
            beatae unde saepe qui quibusdam ratione corporis ullam rem
            repudiandae praesentium, explicabo repellendus. Quaerat, fugit
            consectetur!
          </Text>

          <View style= {styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://www.w3schools.com/js/')}>
              <Text style={styles.footerText}>Read more</Text>
              </TouchableOpacity>
            </View>
        </View>
        </View>
      </View>
  );
}

// export default ActionCard;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  card: {
    width: 390,
    height: 300,
    marginHorizontal:8,
    borderRadius:8,
    marginBottom:12,
    marginTop:12,
    
  },
  elevatedCard: {
    backgroundColor: '#A62C2C',
    elevation:10
  },
  blogHeading: {
    padding:9,
    fontSize: 19,
    fontWeight:'bold',
    color:'#ffffff',
  },
  blogImage: {
    height: 150,
    // width:00
    objectFit: 'fill',
  },
  bodyContainer: {
    padding:10,
    height:150,
    // width:390,

  },
  bodyText:{
    fontWeight:500,
    color:'#fff',
    fontSize:16
  },
  footerContainer:{
    paddingTop:10,
    
  },
  footerText:{
    color:'#fff',
    fontSize:16,
    textAlign:'right',
    paddingEnd:10
  }
});