import { Dimensions , StyleSheet } from "react-native"
const win = Dimensions.get('window')
export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#011c1d'
    },
    loginContainer: {
        width: win.width - 40,
        margin: 20,
        // height: 400,
        borderWidth: 0.9,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'rgba(7,32,34,255)',
        borderColor: '#3c5c64',
        paddingTop:20,
        paddingBottom:20,
    },
    title:{
       color:'#fff',
       fontSize:24 ,
       marginLeft:20    
    },
    profile:{
        marginLeft:20,
        marginRight:20
    },
    key:{
        fontSize:13,
        color:'#fff'
    },
    Value:{
        fontSize:20,
        color:'#fff'
    },
    divider:{
        margin:20,
        borderWidth:0.6,
        borderColor:'#112b2a'
    }
   

})
