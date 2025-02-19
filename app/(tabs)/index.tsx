import { DownloadPicture } from "@/components/BottomSheet";
import { ImageCard } from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { SplitView } from "@/components/SplitView";
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { useState } from "react";
import { Image, StyleSheet, useColorScheme, View } from "react-native";

export default function Index(): JSX.Element {
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);
    return (
        <ThemedView style={{ flex: 1 }}>
            <ParallaxScrollView
                headerBackgroundColor={{ dark: "black", light: "white" }}
                headerImage={
                    <Image style={{ flex: 1 }} source={{ uri: wallpapers[0].uri }} />
                }
            >
                <ThemedView>
                    <SplitView wallpapers={wallpapers} onSelectWallpaper={setSelectedWallpaper} />
                </ThemedView>
            </ParallaxScrollView>

            {/* BottomSheet placed separately to avoid gesture conflicts */}
            {selectedWallpaper && (
                <View style={StyleSheet.absoluteFill}>
                    <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />
                </View>
            )}
        </ThemedView>
    );
}
