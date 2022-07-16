import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import results from './components/results.json';
import {useState} from "react";
import Card from "./components/Card";
import Home from "./components/home";
import styles from "./style";
import ListCard from "./components/listCard";
export default function App() {

  return (
        <Home/>
      );
}

