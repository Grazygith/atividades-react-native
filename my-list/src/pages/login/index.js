import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// 1. Correção do Import do Feather (padrão Expo)
import { Feather } from '@expo/vector-icons'; 

import Logo from '../../assets/logo.png';
// 2. Importação correta da variável 'themes'
import { themes } from '../../global/themes'; 
import { style } from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function getLogin() {
    try {
      setLoading(true);

      if (!email || !password) {
        setLoading(false);
        return Alert.alert('Atenção', 'Informe os campos obrigatórios!');
      }

      setTimeout(() => {
        if (email === 'teste@gmail.com' && password === '123456') {
          Alert.alert('Logado com sucesso!');
        } else {
          Alert.alert('Usuário não encontrado');
        }
        setLoading(false);
      }, 3000);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode='contain'
        />
        <Text style={style.text}>Bem vindo de volta !</Text>
      </View>

      <View style={style.boxMid}>
        <Text style={style.titleInput}>ENDEREÇO DE E-MAIL</Text>
        <View style={style.BoxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={(e) => setEmail(e)}
          />
          {/* 3. Ajustado para themes.colors.gray */}
          <Feather
            name='mail'
            size={20}
            color={themes.colors.gray} 
          />
        </View>

        <Text style={style.titleInput}>SENHA</Text>
        <View style={style.BoxInput}>
          <TextInput
            style={style.input}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Feather
              name={showPassword ? 'eye-off' : 'eye'}
              size={20}
              color={themes.colors.gray}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.boxBottom}>
        <TouchableOpacity style={style.button} onPress={() => getLogin()}>
          {loading ? (
            <ActivityIndicator color="#FFF" size="small" />
          ) : (
            <Text style={style.textButton}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={style.textBottom}>
        Não tem conta?{' '}
        <Text style={{ color: themes.colors.primary }}>Crie agora</Text>
      </Text>
    </View>
  );
}