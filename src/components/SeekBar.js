import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const SeekBar = () => {

    const[value, setValue] = useState("");

    return(
        <View>
            <TextInput 
                style={styles.bar}
                value={value}
                onChange={(text) => setValue(text)}
                placeholder="Ara..." />
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: "white",
        color: "gray",
        fontWeight: "normal",
        fontSize: 15,
        width: wp("100%"),
        borderColor: "gray",
        borderRadius: 10,
        borderWidth: 2
    }
})

export default SeekBar;