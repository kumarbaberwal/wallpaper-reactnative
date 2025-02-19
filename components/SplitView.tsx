import { Wallpaper } from "@/hooks/useWallpapers";
import { ScrollView } from "react-native";
import { ImageCard } from "./ImageCard";
import { ThemedView } from "./ThemedView";
import { StyleSheet } from "react-native";

export function SplitView({
    wallpapers,
    onSelectWallpaper,
}: {
    wallpapers: Wallpaper[];
    onSelectWallpaper: (wallpaper: Wallpaper) => void;
}): JSX.Element {
    return (
        <ThemedView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexDirection: "row" }}>
                {[0, 1].map((column) => (
                    <ThemedView key={column} style={styles.innerContainer}>
                        {wallpapers
                            .filter((_, index) => index % 2 === column)
                            .map((item) => (
                                <ThemedView style={styles.imageContainer} key={item.uri}>
                                    <ImageCard onPress={() => onSelectWallpaper(item)} wallpaper={item} />
                                </ThemedView>
                            ))}
                    </ThemedView>
                ))}
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
    },
    imageContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
});
