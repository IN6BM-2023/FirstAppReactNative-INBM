import { View, Text, SafeAreaView, Button } from 'react-native';

export default function HomeScreen( props ) {

    const { navigation } = props;

    const goToSettings = () => {
        navigation.navigate("Settings");
    }

  return (
    <SafeAreaView>
        <Text> HOME SCREEN :D </Text>
        <Button title='Ir a Ajustes' onPress={ goToSettings } />
    </SafeAreaView>
  )
}