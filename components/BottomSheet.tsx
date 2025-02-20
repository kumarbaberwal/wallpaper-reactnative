import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

export const DownloadPicture = ({ onClose, wallpaper }: { onClose: () => void; wallpaper: Wallpaper }): JSX.Element => {
    const bottomSheetRef = useRef<BottomSheet>(null);

    const handleSheetChanges = useCallback((index: number) => {
        console.log("handleSheetChanges", index);
    }, []);

    return (
        <GestureHandlerRootView style={styles.container}>
            <BottomSheet
                snapPoints={["90%"]}
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enablePanDownToClose
                onClose={onClose}
                handleIndicatorStyle={{ display: "none" }}
                handleStyle={{ display: "none" }}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Image style={styles.image} source={{ uri: wallpaper.uri }} />

                    <View style={styles.topbar}>
                        <MaterialCommunityIcons
                            name="close"
                            size={32}
                            color="white"
                            onPress={() => {
                                bottomSheetRef.current?.close();
                                onClose();
                            }}
                        />
                        <View style={styles.topbarInner}>
                            <MaterialCommunityIcons name="heart" size={32} color="white" />
                            <MaterialCommunityIcons name="share" size={32} color="white" style={{ marginLeft: 10 }} />
                        </View>
                    </View>

                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{wallpaper.name}</Text>
                    </View>
                    <DownloadButton url={wallpaper.uri} name={wallpaper.name} />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

function DownloadButton({ url, name }: {
    url: string;
    name: string;
}): JSX.Element {
    return (
        <Pressable style={styles.downloadButton}
            onPress={async () => {
                console.log("Download Button Pressed")

                const { status } = await MediaLibrary.requestPermissionsAsync();
                if (status !== 'granted') {
                    console.log("Permission denied!");
                    return;
                }

                try {
                    const fileUri = FileSystem.documentDirectory + `${name}.jpg`;

                    const { uri } = await FileSystem.downloadAsync(url, fileUri);

                    await MediaLibrary.saveToLibraryAsync(uri);
                    alert("Image Saved")
                    console.log("Download successful!");

                } catch (error) {
                    console.error("Download failed:", error);
                }

            }}
        >
            <Text style={styles.downloadButtonText}>Download</Text>
        </Pressable >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
    },
    image: {
        height: "80%",
        borderRadius: 15,
    },
    topbar: {
        position: "absolute",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    topbarInner: {
        flexDirection: "row",
    },
    textContainer: {
        width: "100%",
    },
    text: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "600",
        color: "black",
    },
    downloadButton: {
        backgroundColor: "black",
        marginHorizontal: 40,
        marginVertical: 10,
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    downloadButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
    },
});