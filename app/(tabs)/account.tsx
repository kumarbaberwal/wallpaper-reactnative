import { DownloadPicture } from "@/components/BottomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";


export default function Account() {
    const [pictureOpen, setPictureOpen] = useState(false);
    return <View style={{ flex: 1 }}>
        <Text>
            Account page
        </Text>
        <Button
            title="Open bottom sheet"
            onPress={() => {
                setPictureOpen(true);
            }}
            color={'orange'}
        >
        </Button>
        {/* {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />} */}
    </View>
}