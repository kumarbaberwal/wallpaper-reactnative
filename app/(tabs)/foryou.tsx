import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SplitView } from "@/components/SplitView";
import { useColorScheme, View, StyleSheet } from "react-native";
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, Wallpaper } from "@/hooks/useWallpapers";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { DownloadPicture } from "@/components/BottomSheet";

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
    const colorScheme = useColorScheme() ?? "light";
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

    return (
        <ThemedView style={{ flex: 1 }}>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: Colors[colorScheme].background,
                    },
                    tabBarActiveTintColor: Colors[colorScheme].tabIconSelected,
                }}
            >
                <Tab.Screen name="Suggested">
                    {() => <Suggested onSelectWallpaper={setSelectedWallpaper} />}
                </Tab.Screen>
                <Tab.Screen name="Liked">
                    {() => <Liked onSelectWallpaper={setSelectedWallpaper} />}
                </Tab.Screen>
                <Tab.Screen name="Library">
                    {() => <Library onSelectWallpaper={setSelectedWallpaper} />}
                </Tab.Screen>
            </Tab.Navigator>

            {/* BottomSheet placed outside to avoid gesture conflicts */}
            {selectedWallpaper && (
                <View style={StyleSheet.absoluteFill}>
                    <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />
                </View>
            )}
        </ThemedView>
    );
}

function Suggested({ onSelectWallpaper }: { onSelectWallpaper: (wallpaper: Wallpaper) => void }) {
    const wallpapers = useSuggestedWallpapers();
    return (
        <ThemedView style={{ flex: 1 }}>
            <SplitView wallpapers={wallpapers} onSelectWallpaper={onSelectWallpaper} />
        </ThemedView>
    );
}

function Liked({ onSelectWallpaper }: { onSelectWallpaper: (wallpaper: Wallpaper) => void }) {
    const wallpapers = useLikedWallpapers();
    return (
        <ThemedView style={{ flex: 1 }}>
            <SplitView wallpapers={wallpapers} onSelectWallpaper={onSelectWallpaper} />
        </ThemedView>
    );
}

function Library({ onSelectWallpaper }: { onSelectWallpaper: (wallpaper: Wallpaper) => void }) {
    const wallpapers = useLibraryWallpapers();
    return (
        <ThemedView style={{ flex: 1 }}>
            <SplitView wallpapers={wallpapers} onSelectWallpaper={onSelectWallpaper} />
        </ThemedView>
    );
}
