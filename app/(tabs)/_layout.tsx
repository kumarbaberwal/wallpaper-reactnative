import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
    const colorScheme = useColorScheme() ?? 'light';
    return (
        <Tabs
            screenOptions={{
                // tabBarActiveTintColor: colorScheme === 'dark' ? 'white' : 'black',
                tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
                headerShown: false,
                tabBarStyle: { backgroundColor: Colors[colorScheme].background },
            }} >
            <Tabs.Screen
                name="foryou"
                options={{
                    title: 'For you',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="font" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}
