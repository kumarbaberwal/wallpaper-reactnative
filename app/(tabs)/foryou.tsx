import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SplitView } from '@/components/SplitView';
import { View } from 'react-native';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, useWallpapers } from '@/hooks/useWallpapers';

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Suggested" component={Suggested} />
            <Tab.Screen name="Liked" component={Liked} />
            <Tab.Screen name="Library" component={Library} />
        </Tab.Navigator>
    );
}

function Suggested() {
    const wallpapers = useSuggestedWallpapers();
    return <View style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers}></SplitView>
    </View>
}

function Liked() {
    const wallpapers = useLikedWallpapers();
    return <View style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers}></SplitView>
    </View>
}

function Library() {
    const wallpapers = useLibraryWallpapers();
    return <View style={{ flex: 1 }}>
        <SplitView wallpapers={wallpapers}></SplitView>
    </View>
}