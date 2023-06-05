import { View, Text, SafeAreaView, Button } from 'react-native';

export default function SettingsScreen(props) {

    const { navigation } = props;

    const goToHome = () => {
        navigation.navigate("Home");
    }

  return (
    <SafeAreaView>
        <Text> SETTINGS SCREEN... </Text>
        <Button title='GO HOME' onPress={ goToHome } />
    </SafeAreaView>
  )
}