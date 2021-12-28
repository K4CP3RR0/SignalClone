import React from 'react';
import {View,Text, StyleSheet, FlatList ,SafeAreaView} from 'react-native';
import Message from '../components/Message';
import chatRoomData from '../assets/dummy-data/Chats';
import MessageInput from '../components/MessageInput';
import { useRoute } from '@react-navigation/core';
export default function ChatRoomScreen(){
    const route = useRoute();

    console.warn(route.params?.id);
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <Message message ={item} />}
            style={[styles.list]}
            inverted
            />
            <MessageInput/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'white',      
    }
})
