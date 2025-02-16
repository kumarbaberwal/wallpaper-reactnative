import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { GestureHandlerRootView, Pressable } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FlipInEasyX } from 'react-native-reanimated';
import { ThemedText } from './ThemedText';

export const DownloadPicture = ({ onClose, wallpaper }: {
    onClose: () => void;
    wallpaper: Wallpaper
}) => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <GestureHandlerRootView
            style={styles.container}
        >
            <BottomSheet
                snapPoints={["90%"]}
                ref={bottomSheetRef}
                onChange={handleSheetChanges}
                enablePanDownToClose={true}
                onClose={onClose}
                handleIndicatorStyle={{ display: 'none' }}
                handleStyle={{ display: 'none' }}
            >
                <BottomSheetView style={styles.contentContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: wallpaper.uri }}
                    ></Image>
                    <View
                        style={styles.topbar}
                    >
                        <MaterialCommunityIcons name="close" size={32} color="white" />
                        <View style={styles.topbarInner}>
                            <MaterialCommunityIcons name="heart" size={32} color="white" />
                            <MaterialCommunityIcons name="share" size={32} color="white" style={{ marginLeft: 10, }} />
                        </View>

                    </View>
                    <View style={styles.textContainer}>
                        <ThemedText style={styles.text}>
                            {wallpaper.name}
                        </ThemedText>
                    </View>
                    <DownloadButton />
                </BottomSheetView>
            </BottomSheet>
        </GestureHandlerRootView>
    );
};

function DownloadButton() {
    return <Pressable
        style={{
            backgroundColor: 'black',
            margin: 20,
            padding: 15,
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <Text
            style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 600,
            }}
        >
            Download
        </Text>
    </Pressable>
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
        position: 'absolute',
        padding: 10,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    },
    topbarInner: {
        display: 'flex',
        flexDirection: 'row',

    },
    textContainer: {
        width: '100%',
    },
    text: {
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 600,
        color: 'black'
    }
});