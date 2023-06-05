import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginForm from './src/components/LoginForm';
import Saludar from './src/components/Saludar';
import NavigationDrawer from './src/navigation/NavigationDrawer';
import NavigationStack from './src/navigation/NavigationStack';
import NavigationTabs from './src/navigation/NavigationTabs';

export default function App() {
  return (

    <NavigationContainer>

      {/* <View style={styles.container}>
        <Text> APP Victor </Text>
        <LoginForm />
        <Saludar />
        <Saludar nombre='Carlos Gonzales' />
        <Saludar nombre="Sofia Mendoza" />
        <StatusBar style="auto" />
      </View> */}

      {/* <NavigationDrawer /> */}
      {/* <NavigationStack /> */}
      <NavigationTabs />

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
