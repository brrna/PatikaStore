import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const CardDetail = ({ product }) => {
    return (
        <View
            style={styles.card}>

            <View style={styles.img}>
                <Image source={{ uri: product.imgURL }} style={styles.image} />
            </View>
            <View style={styles.text}>
                <Text style={styles.title} >{product.title}</Text>
                <Text style={styles.price} >{product.price}</Text>
                <Text style={styles.stock} >{product.inStock ? "" : "STOKTA YOK"}</Text>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: wp("49%"),
        backgroundColor: "#C0C1C4",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 10,
        height: hp(33),
        marginVertical: 2,
        marginHorizontal: 2,
    },
    image: {
        height: hp(20),
        width: wp(48),
        resizeMode: "contain",
        borderRadius: 10
    },
    title: {
        backgroundColor: "#C0C1C4",
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
        height: hp(5)
    },
    price: {
        backgroundColor: "#C0C1C4",
        fontSize: 15,
        fontWeight: "bold",
        color: "#615E64",
        height: hp(3)
    },
    stock: {
        backgroundColor: "#C0C1C4",
        color: "red",
        fontSize: 20,
        fontWeight: "bold",
        height: hp(3)
    },
    img: {
        backgroundColor: "white",
        height: hp(20),
        borderRadius: 10
    }
})

export default CardDetail;