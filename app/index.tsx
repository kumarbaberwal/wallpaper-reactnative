import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval =
            setInterval(() => {
                setCount(count => count + 1);
            }, 1000)


        return () => {
            clearInterval(interval);
        }
    }, []);

    const setZero = () => {
        setCount(0);
    }

    return <View>
        <Text>
            {count}
        </Text>
        <Button title="Press Me" onPress={setZero}></Button>
    </View >
}