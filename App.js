import React from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import CardDetail from "./src/components/CardDetail";
import products_data from "./src/products_data.json"
import SeekBar from "./src/components/SeekBar";

function App() {

    const renderProducts = ({ item }) => <CardDetail product={item} />
    const keyProducts = item => item.id.toString()

    return (
        <SafeAreaView
            style={styles.container}>

            <View style={styles.headerTop}>
                <Text style={styles.header} >PATİKA STORE</Text>
            </View>

            <View
                style={styles.search}>
                <SeekBar />
            </View>

            <View
                style={styles.inside_container}>

                <FlatList
                    numColumns={"2"}
                    data={products_data}
                    renderItem={renderProducts}
                    keyExtractor={keyProducts}
                />

            </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "space-around",
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#7835AC"
    },
    inside_container: {
        backgroundColor: "white",
        height: hp("90%"),
        width: wp("100%"),
        justifyContent: "space-around",
        alignItems: "center"
    },
    search: {
        height: hp(11),
        backgroundColor: "grey",
        borderRadius: 10
    },
    headerTop: {
        backgroundColor: "white",
        height: hp(13),
        width: wp("100%"),
        paddingTop: 22
        
    }
})

export default App;