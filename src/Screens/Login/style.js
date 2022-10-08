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
    logo: {
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10,
        marginRight: 20
    },
    loginContainer: {
        width: win.width - 40,
        margin: 20,
        // height: 400,
        borderWidth: 0.9,
        borderRadius: 25,
        alignSelf: 'center',
        backgroundColor: 'rgba(7,32,34,255)',
        borderColor: '#3c5c64'
    },
    loginfont: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
        alignSelf: 'center',
        margin: 20

    },
    font_Color: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
    },
    input_cont: {
        margin: 20
    },
    textinput: {
        padding: 15,
        borderColor: '#3c5c64',
        width: '95%',
        borderWidth: 0.9,
        marginTop: 15,
        alignSelf: 'center',
        borderRadius: 15,
        color: '#fff',
        backgroundColor: 'rgba(21,48,48,255)',
    },
    button: {
        padding: 15,
        width: '95%',
        backgroundColor: 'rgba(1,95,243,255)',
        borderRadius: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    forgotPass:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    }

})
