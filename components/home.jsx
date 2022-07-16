import React from 'react';
import {Text, View} from "react-native";
import styles from "../style";
import result from './results.json'
import Card from './Card';
import ListCard from './listCard';

export default function  Home(){
    return(
        <View style={styles.container}>
            <ListCard/>
        </View>
    )
}