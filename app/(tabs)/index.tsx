import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { Link } from "expo-router";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";


export default function Index() {
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
    return <View style={{ flex: 1 }}>
        <ParallaxScrollView
            headerBackgroundColor={{ dark: 'black', light: 'white' }}
            headerImage={
                <Image
                    style={{ flex: 1 }}
                    source={{ uri: wallpapers[0]?.uri }}
                />}
        >
            <ThemedView
                style={styles.container}
            >
                <ThemedView
                    style={styles.innerContainer}
                >
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 0)}
                        renderItem={({ item }) => <View style={styles.imageContainer}>
                            <ImageCard
                                onPress={() => setSelectedWallpaper(item)}
                                wallpaper={item}
                            />
                        </View>}
                        keyExtractor={item => item.name}
                    ></FlatList>
                </ThemedView>

                <ThemedView
                    style={styles.innerContainer}
                >
                    <FlatList
                        data={wallpapers.filter((_, index) => index % 2 === 1)}
                        renderItem={({ item }) => <View style={styles.imageContainer}>
                            <ImageCard
                                onPress={() => { setSelectedWallpaper(item) }}
                                wallpaper={item}
                            />
                        </View>}
                        keyExtractor={item => item.name}
                    ></FlatList>
                </ThemedView>
            </ThemedView>
        </ParallaxScrollView>
        {selectedWallpaper && <DownloadPicture onClose={() => { setSelectedWallpaper(null) }} />}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
    },
    innerContainer: {
        flex: 1,
    },
    imageContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    }
})