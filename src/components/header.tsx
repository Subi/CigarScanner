import { View , Text , StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome6';

export default function Header() {
    return (
            <View style={styles.header}>
                <FontAwesome size={30} name="bars" color="black"/>
                <View style={styles.avatarContainer}/>
            </View>
    )
}




const styles =  StyleSheet.create({
    header: {
        paddingTop: 25,
        // paddingHorizontal: 30,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    avatarContainer: {
        width: 32,
        height: 32,
        backgroundColor: 'blue',
        borderRadius: 30,
        borderWidth: .5,
    }
})