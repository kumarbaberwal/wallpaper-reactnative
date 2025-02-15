import { Stack } from "expo-router";

export default function NoBottomTabLayout() {
    return <Stack>
        <Stack.Screen
            name="accountinfo"
            options={{
                headerShown: true, headerTitle: 'Account Info',
            }}
        />
    </Stack>
}