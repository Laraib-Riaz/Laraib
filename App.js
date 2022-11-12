import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Sign from './src/screens/SignIn/Sign'
import SignUp1 from './src/screens/SignUp/SignUp1'
import SignUp2 from './src/screens/SignUp/SignUp2'
import Verification from './src/screens/Verification/Verification'
import ResetPass from './src/screens/ResetPass/ResetPass'
import ChangePass from './src/screens/ChangePass/ChangePass'
import Home from './src/screens/Home/Home'
import Topnavigator from './src/components/Navigators/Topnavigator'
import Setting from './src/screens/Setting/Setting'
import Profile from './src/screens/Profile/Profile'
import Notifications from './src/screens/Notifications/Notifications'
import BottomBar from './src/components/Navigators/BottomBar'
import VacationalP from './src/screens/VacationalPatrol/VacationalP'
import Promo from './src/screens/Promo/Promo'
import Wallet from './src/screens/Wallet/Wallet'

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wallet">
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Promo"
          component={Promo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VacationalP"
          component={VacationalP}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BottomBar"
          component={BottomBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Topnavigator"
          component={Topnavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp1"
          component={SignUp1}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Verification"
          component={Verification}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResetPass"
          component={ResetPass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChangePass"
          component={ChangePass}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({})
export default App
