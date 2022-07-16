import React from 'react';
import list from './results.json';
import {SafeAreaView, ScrollView, Text} from "react-native";
import Card from "./Card";

export default function ListCard(){

    return(
        <SafeAreaView>
            <ScrollView>
                {list.map((item,i)=>(
                    <Card key={i}>
                        <Text>{item.poste}</Text>
                        <Text>{item.societe}</Text>
                        <Text>{item.contrat}</Text>
                        <Text>{item.description}</Text>
                    </Card>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}