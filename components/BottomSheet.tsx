import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet, Image, useColorScheme } from "react-native";
import { GestureHandlerRootView, Pressable } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpapers";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ThemedText } from "./ThemedText";

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
                    <DownloadButton />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

function DownloadButton(): JSX.Element {
    return (
        <Pressable style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download</Text>
        </Pressable>
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