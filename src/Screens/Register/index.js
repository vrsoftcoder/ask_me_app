import React from 'react';
import { View, Text, SafeAreaView, ScrollView,  Image,  TextInput, TouchableOpacity } from 'react-native';
import { logo } from '../../Assets';
import Input from '../../Components/InputComponent';
import {style} from './style'
export default function Register() {
    return (
        <SafeAreaView style={[style.container]}>
            <ScrollView style={[style.scrollContainer]}>
                <Image source={logo} style={[style.logo]} />
                <View style={[style.loginContainer]}>
                    <Text style={[style.loginfont]}>Register</Text>
                    <View style={[style.input_cont]}>
                        <Input title={'First Name'} placeholder={'First Name'} />
                        <Input title={'Last Name'} placeholder={'Last Name'} />
                        <Input title={'Email'} placeholder={'Email'} />
                        <Input title={'Phone Number'} placeholder={'Phone Number'} />
                        <TouchableOpacity style={[style.button]}>
                            <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', }}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
