import { View , Text, StyleSheet, Pressable , TouchableOpacity } from "react-native"
import { Cigar } from "../../types"



interface ListProps {
    data: Cigar[]
}



export default function List({data}:ListProps) {


    const pushMe = () => {
        alert("Pushed")
    }

    return (
        <View style={styles.container}>
            <View style={styles.filterContainer}>
                <View style={styles.filters}>
                <Pressable onPress={() => {console.log("pressed")}}  style={({pressed}) => [{opacity: pressed ? .5 : 1}  , styles.buttonText]}>
                    <Text style={styles.buttonText} >Humidor View</Text>
                </Pressable>
                {/* <Pressable style={styles.button} onPress={pushMe}>
                    <Text style={styles.buttonText} >Customization</Text>
                </Pressable> */}
                </View>
            </View>
        </View>
    )
}

const styles =  StyleSheet.create({
    container : {
        flex: 1
    },
    filterContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 8,
        borderColor: '#BB7C3C',
        borderWidth: .5
    },
    buttonText: {
        fontSize: 13
    },
    filters: {
        flex: .7,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})