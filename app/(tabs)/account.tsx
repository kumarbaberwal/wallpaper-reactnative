import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { Appearance, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Account() {
    const colorScheme = useColorScheme() || 'light';
    const styles = createStyles({ colorScheme: colorScheme });
    return <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={{ flex: 1 }}>
            <Header styles={styles} />
            <LoginButtons colorScheme={colorScheme} />
            <ThemeSelector styles={styles} />
            <About styles={styles} />
        </ThemedView>
        <StatusBar barStyle={'dark-content'}></StatusBar>
    </SafeAreaView>
}


function About({ styles }: {
    styles: any
}) {

    return <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>
            About
        </ThemedText>
        <ThemedView style={{ gap: 10, top: 10, }}>
            <Pressable>
                <ThemedText style={{ fontSize: 20 }}>
                    Account
                </ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{ fontSize: 20 }}>
                    Privacy Policy
                </ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{ fontSize: 20 }}>
                    Terms of Service
                </ThemedText>
            </Pressable>
            <Pressable>
                <ThemedText style={{ fontSize: 20 }}>
                    Licenses
                </ThemedText>
            </Pressable>
            <ThemedView>
                <ThemedText style={{ fontSize: 20 }}>
                    Version
                </ThemedText>
                <ThemedText>
                    1.1.0
                </ThemedText>
            </ThemedView>
        </ThemedView>
    </ThemedView>
}

function LoginButtons({ colorScheme }: {
    colorScheme: string | null | undefined;
}) {
    return <>
        <AuthButton
            icon={<Ionicons
                size={25}
                name="logo-google"
                color={colorScheme === 'dark' ? 'black' : 'white'}
            ></Ionicons>
            }
            label="Sign in"
            colorScheme={colorScheme}
        >

        </AuthButton>
        <AuthButton
            icon={<Ionicons
                size={30}
                name="logo-apple"
                color={colorScheme === 'dark' ? 'black' : 'white'}
            ></Ionicons>}
            label="Sign in"
            colorScheme={colorScheme}
        >

        </AuthButton>
    </>
}


function Header({ styles }: {
    styles: any;
}) {
    return <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>
            Panels
        </ThemedText>
        <ThemedText style={styles.headerSubText}>
            Sign in to save your data
        </ThemedText>
    </ThemedView>
}

function ThemeSelector({ styles }: {
    styles: any;
}) {
    return <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>
            Settings
        </ThemedText>
        <ThemedText style={styles.headerSubText}>
            Theme
        </ThemedText>
        <ThemedView style={styles.themeSelectorContainer}>
            <ThemeSelectorButton title="System" selected={true} colorScheme={'light'} styles={styles} />
            <ThemeSelectorButton title="Dark" selected={false} colorScheme={'dark'} styles={styles} />
            <ThemeSelectorButton title="Light" selected={false} colorScheme={'light'} styles={styles} />
        </ThemedView>
    </ThemedView>
}

function ThemeSelectorButton({ title, selected, colorScheme, styles }: {
    title: string;
    selected: boolean;
    colorScheme: "light" | "dark";
    styles: any;
}) {
    return <Pressable style={styles.themeSelectorChild}
        onPress={() => {
            Appearance.setColorScheme(colorScheme);
        }}
    >
        <ThemedText style={styles.themeSelectorChildText}>
            {title}
        </ThemedText>
    </Pressable>
}

function AuthButton({ label, icon, colorScheme }: {
    label: string;
    icon: any;
    colorScheme: string | null | undefined;
}) {
    return <Pressable
        style={{
            backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
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
        <ThemedText
            style={{
                color: colorScheme === 'dark' ? 'Black' : 'white',
                fontSize: 20,
                fontWeight: "600",
            }}
        >
            {label}
        </ThemedText>
    </Pressable>
}


function createStyles({ colorScheme }: {
    colorScheme: string | null | undefined;
}) {
    return StyleSheet.create({
        headerText: {
            fontSize: 25,
            fontWeight: "600",
        },
        headerSubText: {
            fontSize: 15,
            fontWeight: "300",
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
            backgroundColor: colorScheme === 'dark' ? 'white' : 'black',
            borderRadius: 10,
            borderColor: colorScheme === 'dark' ? 'white' : 'white',
            borderWidth: 1,
            flex: 0.3,
            alignItems: 'center',
            justifyContent: 'center'
        },
        themeSelectorChildText: {
            color: colorScheme === 'dark' ? 'black' : 'white',
            fontSize: 20,
            fontWeight: "500",
        },
    })
}