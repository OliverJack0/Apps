import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen(){
    return(
        <View style={styles.container}>
            <Image></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#58d8e3',
    },
});