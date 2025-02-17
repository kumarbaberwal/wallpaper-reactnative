import { DownloadPicture } from "@/components/BottomSheet";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Pressable, SafeAreaView, StyleSheet, Text, useColorScheme, View } from "react-native";


export default function Account() {
    const theme = useColorScheme() ?? "light";
    return <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <View style={{ flex: 1 }}>
            <LoginButtons />
            <ThemeSelector />
        </View>
    </SafeAreaView >
}

function LoginButtons() {
    const theme = useColorScheme() ?? 'light';
    return <>
        <AuthButton
            icon={<Ionicons
                size={25}
                name="logo-google"
                color={theme === 'dark' ? 'white' : 'black'}
            ></Ionicons>
            }
            label="Sign in"
        >

        </AuthButton >
        <AuthButton
            icon={<Ionicons
                size={30}
                name="logo-apple"
                color={theme === 'dark' ? 'white' : 'black'}
            ></Ionicons>}
            label="Sign in"
        >

        </AuthButton>
    </>
}


function Header() {
    return <View style={styles.header}>
        <ThemedText style={styles.headerText}>
            Panels
        </ThemedText>
        <ThemedText style={styles.headerSubText}>
            Sign in to save your data
        </ThemedText>
    </View>
}

function ThemeSelector() {
    return <View style={styles.header}>
        <ThemedText style={styles.headerText}>
            Settings
        </ThemedText>
        <ThemedText style={styles.headerSubText}>
            Theme
        </ThemedText>
        <View style={styles.themeSelectorContainer}>
            <ThemeSelectorButton title="System" selected={true} />
            <ThemeSelectorButton title="Dark" selected={false} />
            <ThemeSelectorButton title="Light" selected={false} />
        </View>
    </View>
}

function ThemeSelectorButton({ title, selected }: { title: string, selected: boolean }) {
    return <Pressable style={styles.themeSelectorChild}>
        <ThemedText style={styles.themeSelectorChildText}>
            {title}
        </ThemedText>
    </Pressable>
}

function AuthButton({ label, icon }: {
    label: string,
    icon: any
}) {
    const theme = useColorScheme() ?? "light";
    return <Pressable
        style={{
            backgroundColor: theme === 'dark' ? 'black' : 'white',
            marginHorizontal: 40,
            marginVertical: 10,
            padding: 12,
            gap: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            flexDirection: 'row'
        }}
    >
        {icon}
        <Text
            style={{
                color: theme === 'dark' ? 'white' : 'black',
                fontSize: 20,
                fontWeight: 600,
            }}
        >
            {label}
        </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 25,
        fontWeight: 600,
        color: 'black',
    },
    headerSubText: {
        fontSize: 15,
        fontWeight: 300,
        color: 'black',
    },
    header: {
        padding: 20,
        margin: 20,
    },
    themeSelectorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    themeSelectorChild: {
        padding: 13,
        backgroundColor: 'black',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    themeSelectorChildText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 500,
    }
})