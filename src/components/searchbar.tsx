import { View , Text , StyleSheet, TextInput } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Searchbar() {
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <FontAwesome size={15} name="search" color="gray" />
                <TextInput style={styles.textInput} placeholder="Search..."/>
            </View>
        </View>
    )
}   

const styles =  StyleSheet.create({
    container: {
        marginTop: 35,
        marginBottom: 35,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textInputContainer: {
        backgroundColor: 'white',
        padding: 13,
        flex: .85,
        shadowColor: 'black',
        shadowOffset: {width: 0 , height: 1},
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 2, // Shadow blur radius
    },
    textInput: {
        flex: .75,
        fontSize: 13,
        paddingLeft: 10
    }
})




