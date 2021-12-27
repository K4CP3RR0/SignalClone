import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import styles from './styles';
export default function ChatRoomItem({chatRoom}){
    const user = chatRoom.users[1];
    return (
      <View style={styles.container}>
      <Image source={{uri: 'user.imageUri'}} style={styles.image} />
      <View style={styles.badgeContainer}><Text style={styles.badgeText}>4</Text></View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>11:11 AM</Text> 
        </View>
        <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
    );

}