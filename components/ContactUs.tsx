import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactUs() {

    const Contacts = [
      {
        uid: 1,
        name: 'Smit Thakar',
        status: 'MERN Stack Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
      },
      {
        uid: 2,
        name: 'Darshan Sarvaiya',
        status: 'Java Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        uid: 3,
        name: 'Vaidik Limbachiya',
        status: 'MERN Stack Developer',
        imageUrl:
          'https://media.istockphoto.com/id/2160502733/photo/working-day-in-office.jpg?s=2048x2048&w=is&k=20&c=RhqBuGMPkdKYXzBovK1xU652uSqTZIZKfmKGEUFwSu8=',
      },
      {
        uid: 4,
        name: 'Drasti Pithva',
        status: 'Java Developer',
        imageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
      },
    ];
  return (
    <View>
      <Text style={styles.headingText}>ContactUs</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {Contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, paddingHorizontal: 8, fontWeight: 'bold'},
  container: {
    marginTop: 8,
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    padding: 8,
    backgroundColor: '#706D54',
    borderRadius: 10,
  },
  userImage: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 13,
    color: '#fff',
  },
});