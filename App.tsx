import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from "styled-components/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import ListView from './src/screens/ListView';
import ListEdit from './src/screens/ListEdit';
import List from './src/screens/List';
import Calendar from './src/screens/Calendar';
import * as Font from 'expo-font';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { useCallback, useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import COLORS from "./src/styles/theme";


export default function App() {

    const Stack = createNativeStackNavigator();

    const [appReady, setAppReady] = useState(false)
    const [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
        Poppins_800ExtraBold,
    })

    useEffect(() => {
        (async () => {
            try {
                await Font.loadAsync({
                    Poppins_300Light,
                    Poppins_400Regular,
                    Poppins_500Medium,
                    Poppins_700Bold,
                    Poppins_800ExtraBold,
                })
            } catch (e) {
                console.warn(e)
            } finally {
                setAppReady(true)
            }
        })()
    }, [])

    const onLayout = useCallback(() => {
        if (appReady) {
            SplashScreen.hideAsync()
        }
    }, [appReady])

    if (!appReady) {
        return null
    }

    return (
        <ThemeProvider theme={COLORS}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="List" component={List} />
                    <Stack.Screen name="ListView" component={ListView} />
                    <Stack.Screen name="ListEdit" component={ListEdit} />
                    <Stack.Screen name="Calendar" component={Calendar} />
                </Stack.Navigator>
            </NavigationContainer>
        </ThemeProvider>
    );
}
