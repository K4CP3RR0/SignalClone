import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      padding:10,
  
    },
    image: {
      width:50,
      height:50,
      borderRadius:50,
      marginRight:10,
    },
    badgeContainer :{
      backgroundColor:'#3A76F0',
      width:20,
      height:20,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      left:45,
      top:10,
      borderWidth:1,
      borderColor:'white',
  
    },
    badgeText :{
      fontSize:12,
      color:'white',
    },
    rightContainer:{
      flex:1,
      
      justifyContent:'center',
    },
    row: {
      flexDirection:'row',
      justifyContent:'space-between',
      
      
    },
    name: {
      fontWeight:'bold',
      fontSize:18,
      marginBottom:3,
      
    },
    text: {
     
      color: 'grey'
    },
  });
  export default styles;