import React from 'react'
import { Stylesheet , View } from 'react-native'
import styles from "../style";

export default function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}