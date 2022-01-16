import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Modal, ScrollView, RefreshControl} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HistoryScreen(props) {

    const [Entries, setEntries] = React.useState([ //get from backend
        {day: 1, prompt: "What is your favorite color?", answer: "Blue"},
        {day: 2, prompt: "What is your favorite animal?", answer: "Dog"},
        {day: 3, prompt: "What is your favorite food?", answer: "Pizza"},
        {day: 4, prompt: "What is your favorite sport?", answer: "Soccer"},
        {day: 5, prompt: "What is your favorite movie?", answer: "Star Wars"},
        {day: 6, prompt: "What is your favorite book?", answer: "Harry Potter"},
        {day: 7, prompt: "What is your favorite band?", answer: "The Beatles"},
        {day: 8, prompt: "What is your favorite coding language?", answer: "None"},
        {day: 9, prompt: "What is your favorite TV show?", answer: "Game of Thrones"},
        {day: 10, prompt: "What is your favorite restaurant?", answer: "Any"},
    ]);

    const[Refreshing, setRefreshing] = React.useState(false);

    const onRefresh = () => { //take in variable for new data when it's added
        setRefreshing(true);
        setEntries([...Entries, {day: 11, prompt: "new prompt", answer: "new answer"}]);
        setRefreshing(false);
    }

    return (
        <ScrollView
        style={styles.body}
        refreshControl = {
            <RefreshControl
            refreshing={Refreshing}
            onRefresh={onRefresh}
            />
        }
        >
            {
                Entries.map((entry) => {
                    return (
                        <View style={styles.entry}>
                            <Text style={styles.day}>Day {entry.day}</Text>
                            <Text style={styles.question}>{entry.prompt}</Text>
                            <Text style={styles.prompt}>{entry.answer}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
    },
    entry: {
        justifyContent: "center",
        alignItems: "center",
    },
    day: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        color: "#000",
    },
    prompt: {
        fontSize: 15,
        fontStyle: "italic",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        color: "#000",
    },
    answer: {
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        color: "#000",
    }
 });