import { Checkbox, HStack } from 'native-base';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView,  Image,  TextInput, TouchableOpacity } from 'react-native';
import { logo } from '../../Assets';
import Input from '../../Components/InputComponent';
import {style} from './style'
export default function Profile() {
    return (
        <SafeAreaView style={[style.container]}>
            <ScrollView style={[style.scrollContainer]}>
                <Text style={style.title}>Profile</Text>
                <View style={[style.loginContainer]}>
                    <View style={style.profile}>
                        <Text style={style.key}>Name</Text>
                        <Text style={style.Value}>John Doe</Text>
                    </View>
                   <View style={style.divider}></View>
                   <View style={style.profile}>
                        <Text style={style.key}>Email</Text>
                        <Text style={style.Value}>johndoe123@mail.com</Text>
                    </View>
                   <View style={style.divider}></View>
                   <View style={style.profile}>
                        <Text style={style.key}>Phone</Text>
                        <Text style={style.Value}>9785756987</Text>
                    </View>
                   <View style={style.divider}></View>
                   <View style={style.profile}>
                        <Text style={style.key}>Password</Text>
                        <Text style={style.Value}>************</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
