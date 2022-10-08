import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../Screens/Profile';
import Login from '../Screens/Login';
import Register from '../Screens/Register';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logo } from '../Assets';

const Stack = createNativeStackNavigator();
export default function Route(props) {
    const navigation = useNavigation()
    return (
        <Stack.Navigator initialRouteName="LOGIN" >
            <Stack.Screen name="PROFILE" component={Profile}
                options={{
                    header: () => (
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: '#011c1d',

                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack()
                                }}>
                                <View style={{ marginLeft:20, backgroundColor:'#143031' ,marginTop:20, borderColor: '#fff', borderRadius: 10, alignSelf: 'center' }}>
                                    <Text style={{ paddingBottom:3 ,paddingTop:0,paddingLeft:4 ,paddingRight:4,fontSize: 30, fontWeight: '600', color: '#fff' }}>{' < '}</Text>
                                </View>
                            </TouchableOpacity>
                            <Image source={logo} style={{ height: 80 }} resizeMode='contain' />
                        </View>
                    ),
                }}
            />
            <Stack.Screen name="LOGIN" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="REGISTER" component={Register} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
