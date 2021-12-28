import React , {useState} from 'react'
import { View, Text, StyleSheet,TextInput, Pressable, KeyboardAvoidingView } from 'react-native'
import { AntDesign, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
const signalBlue = '#3A76F0';
const MessageInput = () => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        //send message
        console.warn("sending: ",message);
    }
    const onPlusClicked = () => {
        //send message
        console.warn("On plus clicked");
    }
    const onPress = () => {
        if(message){
            sendMessage();
        }
        else {
            onPlusClicked();
        }
    }
    
    
    return (
        <KeyboardAvoidingView style={styles.root}>
            <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.icon} />
                <TextInput style={styles.input} 
                placeholder='Signal message'
                value={message}
                onChangeText={setMessage}
                />
                <SimpleLineIcons name="camera" size={24} color="grey" style={styles.icon}/>
                <SimpleLineIcons name="microphone" size={24} color="grey" style={styles.icon}/>
            </View>
            <Pressable onPress={onPress}
            style={styles.buttonContainer}>
                
                {message ? <Ionicons name="send" size={20} color="white" />: <AntDesign name="plus" size={24} color="white" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    root: {
        flexDirection:'row',
        padding:10,

    },
    inputContainer: {
        backgroundColor:'#f2f2f2',
        flex:1,
        marginRight: 10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#dedede',
        alignItems:'center',
        flexDirection:'row',
        padding: 5,
        
    },
    buttonContainer: {
        width:40,
        height:40,
        backgroundColor:signalBlue,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText: {
        color:'white',
        fontSize:35,
    },
    input:{
        flex:1,
        marginHorizontal:5
    },
    icon:{
        marginHorizontal:3
    }
})

export default MessageInput
