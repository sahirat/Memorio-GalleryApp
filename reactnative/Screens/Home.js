import { Text, View, Pressable, ImageBackground ,StyleSheet} from 'react-native'
import React from 'react'



const image = { uri: "https://i0.wp.com/i.pinimg.com/originals/2b/bf/52/2bbf529ab70cfe306df02c0cdef23f65.jpg" };
const Home = ({navigation}) => {
    return (

        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image} />
            <Text style={styles.text}>Memorio</Text>
            <View style={styles.contain}>
                <Pressable
                    onPress={() =>
                        navigation.navigate('Memorio', { name: 'Jane' })
                    }
                    style={styles.button}
                ><Text style={styles.bottomtext}>Get Started 👉</Text></Pressable>
            </View>
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        resizeMode: "cover",
        position: "absolute",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50,
    },
    text: {
        color: "white",
        fontSize: 60,
        lineHeight: 84,
        width: "100%",
        height: "100%",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "30%",

    },

    contain: {
        width: "100%",
        padding: 10,
        position: "absolute",
        bottom: 50,
    },
    button: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",

    },
    bottomtext: {
        fontSize: 15,
        fontWeight: "500",
        color: "black",
    },



});
export default Home
