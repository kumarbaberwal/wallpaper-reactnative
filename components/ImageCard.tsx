import { Image, Pressable, StyleSheet, useColorScheme, View } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedText } from "./ThemedText";
import { IconSymbol } from "./ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { EvilIcons, Ionicons } from "@expo/vector-icons";

export function ImageCard({ wallpaper, onPress }: {
    wallpaper: Wallpaper,
    onPress: () => void,
}) {

    const theme = useColorScheme() ?? 'light';
    return <Pressable onPress={onPress}>
        <View>
            <Image
                style={styles.image}
                source={{ uri: wallpaper.uri }}
            />
            <View style={styles.labelContainer}>

                <ThemedText
                    style={styles.label}
                >
                    {wallpaper.name}
                </ThemedText>
                <View style={styles.iconContainer}>
                    <EvilIcons name="heart" size={32} color="white" />
                </View>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 200,
        borderRadius: 10,
    },
    label: {
        color: 'white',
    },
    labelContainer: {
        position: 'absolute',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        bottom: 0,
        width: '100%',
        padding: 5,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
    }
});