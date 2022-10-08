import { Checkbox, HStack } from 'native-base';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView,  Image,  TextInput, TouchableOpacity } from 'react-native';
import { logo } from '../../Assets';
import Input from '../../Components/InputComponent';
import {style} from './style'
export default function Login(props) {
    return (
        <SafeAreaView style={[style.container]}>
            <ScrollView style={[style.scrollContainer]}>
                <Image source={logo} style={[style.logo]} />
                <View style={[style.loginContainer]}>
                    <Text style={[style.loginfont]}>Log In</Text>
                    <View style={[style.input_cont]}>
                    <Input title={'Email'} placeholder={'Email'} />
                    <Input title={'Password'} placeholder={'Password'} password={true}/>
                        <View>
                            <HStack space={6} style={[style.forgotPass]}>
                                <Checkbox shadow={2} value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked={false}>
                                   <Text style={{color:'#fff'}}>Remember me</Text> 
                                </Checkbox>
                                <Text style={{color:'#0052cb'}}>forgot Password ?</Text>
                            </HStack>
                        </View>
                        <TouchableOpacity style={[style.button]}>
                            <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', }}>Login</Text>
                        </TouchableOpacity>
                        <View style={{display:'flex' , flexDirection:'row' , justifyContent:'space-around'}}>

                        <TouchableOpacity onPress={()=>props.navigation.navigate('REGISTER')}>
                            <Text style={{ color: '#fff', fontSize:12, alignSelf: 'center', }}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('PROFILE')}>
                            <Text style={{ color: '#fff', fontSize: 13, alignSelf: 'center', }}>Profile</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
