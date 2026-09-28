import React, { useState } from 'react';
import { Text, View, Image, Alert } from 'react-native';
import { style } from './styles';
import logo from '../../assets/logo.png';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import Feather from 'react-native-vector-icons/Feather';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    function getLogin() {
        try {
            setLoading(true);

            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
            }

            setTimeout(() => {
                Alert.alert('Logado com sucesso!');
                setLoading(false);
            }, 1500);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={logo} 
                    style={style.logo}
                />
                <Text style={style.text}>Bem-vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                <Input
                    title="ENDEREÇO DE E-MAIL"
                    value={email}
                    onChangeText={setEmail}
                    IconRight={Feather}
                    iconRightName="mail"
                />

                <Input
                    title="SENHA"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={showPassword}
                    IconRight={Feather}
                    iconRightName={showPassword ? 'eye-off' : 'eye'}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>

            <View style={style.boxBottom}>
                <Button 
                    text="ENTRAR" 
                    loading={loading}
                    onPress={getLogin}
                />
            </View>
        </View>
    );
}