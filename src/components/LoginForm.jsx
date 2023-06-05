import { View, Text, TextInput, Button } from 'react-native';

export default function LoginForm() {

    return (
        <View>
            <Text>Login Form</Text>
            <TextInput placeholder='Email' />
            <TextInput placeholder='Password' />
            <Button title='Enviar' onPress={() => console.log('Hola Mundo')} />
        </View>
    )
}