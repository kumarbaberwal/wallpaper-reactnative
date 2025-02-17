import { Wallpaper } from "@/hooks/useWallpapers";
import { ScrollView, View } from "react-native";
import { ImageCard } from "./ImageCard";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { DownloadPicture } from "./BottomSheet";
export function SplitView({ wallpapers }: {
    wallpapers: Wallpaper[]
}) {
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null);
    return <View style={{ flex: 1 }}>

        <ScrollView contentContainerStyle={{ flexDirection: 'row' }}>
            <View style={styles.innerContainer}>
                {wallpapers.filter((_, index) => index % 2 === 0).map((item) => (
                    <View style={styles.imageContainer} key={item.name}>
                        <ImageCard onPress={() => setSelectedWallpaper(item)} wallpaper={item} />
                    </View>
                ))}
            </View>

            <View style={styles.innerContainer}>
                {wallpapers.filter((_, index) => index % 2 === 1).map((item) => (
                    <View style={styles.imageContainer} key={item.name}>
                        <ImageCard onPress={() => setSelectedWallpaper(item)} wallpaper={item} />
                    </View>
                ))}
            </View>
        </ScrollView>
        {selectedWallpaper && (
            <View style={styles.downloadContainer}>
                <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />
            </View>
        )}
    </View>
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
    },
    imageContainer: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    downloadContainer: {
        ...StyleSheet.absoluteFillObject,
    }
})