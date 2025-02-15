import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
    return <View>
        <Text>
            Explore page
        </Text>
        <Link href={'/(nobottomtabs)/accountinfo'}>
            <Text>
                Root Page
            </Text>
        </Link>
    </View>
}