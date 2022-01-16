import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TextInput, TouchableOpacity, Modal} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {launchImageLibrary} from "react-native-image-picker";

function HomeScreen(props) {  
    const [show, setShow] = useState(false); 
    const [userInput, setUserInput] = useState(null);

    const handleAddPhoto =  () => {
        let options = {};

        launchImageLibrary(options, response => {console.log("response", response)});
    };

    const handlePost = () => console.log("Post clicked, should upload stuff to backend");

    return (
      <SafeAreaView style={styles.container}>
        <Text
            style={styles.greeting}>
                Hello!
        </Text>

        <Image 
            source={require('../assets/streak.png')} 
            style={styles.streak}/>

        <View 
          style={styles.promptCont}>

            <Image 
                source={require('../assets/todaysPrompt.png')} 
                style={styles.promptContTitle}/>
                
            <Image 
                source={require('../assets/promptLogo.png')} 
                style={styles.promptLogo}/>

            <Text numberOfLines={2} style={styles.promptText}>What is the highlight of your day?</Text>

            <TouchableOpacity onPress={() => setShow(true)}>
                <Image
                    style={styles.answerButton}
                    source={require('../assets/answerButton.png')}/>
            </TouchableOpacity>

            <Text style={styles.time}>2 hrs 15 min remaining</Text>
        </View>

        <Modal 
            transparent={true}
            visible={show}
            onRequestClose={() => setShow(false)}>
                <View style={{backgroundColor: "#000000aa", flex: 1}}>
                    <View style={{flex: .2}}></View>
                    <View
                        style={styles.modalTop}
                    >
                        <Text 
                            style={styles.modalTitle}>
                            Answer Prompt
                        </Text>
                        <TouchableOpacity onPress={() => setShow(false)}>
                            <Text style={styles.modalHeaderCloseText}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{backgroundColor: "#ffffff", padding: 50, flex: .8,}}>
                        <Text style={styles.modalPrompt}>What is the highlight of your day?</Text>
                        <TextInput 
                            style={styles.input}
                            multiline={true}
                            placeholder="Type your answer..."
                            onChangeText={(val) => setUserInput(val)}/>
                        <View style={{flexDirection: "row", alignItems: "stretch"}}>
                            <TouchableOpacity onPress={handleAddPhoto}>
                                <Image
                                    style={styles.addPhotoButton}
                                    source={require('../assets/addPhotoButton.png')}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handlePost}>
                                <Image
                                    style={styles.postButton}
                                    source={require('../assets/postButton.png')}/>
                            </TouchableOpacity>   
                        </View>
                        
                    </View>
                </View>
        </Modal>
        
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },

    greeting: { 
        position: "absolute",
        left: 32, 
        top: 76,
        width: 117,
        height: 27,
        fontSize: 23,
    },

    streak: { 
        position: "absolute",
        left: 32, 
        top: 135
    },

    promptCont: {
        width: 311,
        height: 424,
        left: 32,
        top: 265,
        
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
      },

    promptContTitle: { 
        left: 77, 
        top: 24,
        height: 18,   
    },

    promptLogo: { 
        position: "absolute",
        width: 90.85,
        height: 107,
        left: 110,
        top: 81,  
    },

    promptText: {
        position: "absolute",
        width: 227,
        height: 48,
        left: 42,
        top: 227,

        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },

    answerButton: {
        width: 231,
        height: 43,
        left: 40,
        top: 300,
    },

    time: {
        position: "absolute",
        width: 171,
        height: 18,
        left: 76,
        bottom: 24,

        fontWeight: "bold",
        fontSize: 15,
        opacity: 0.4,
        textAlign: "center",
    },

    modalTop: {
        backgroundColor: "#F4F4F4",
        width: 375,
        height: 53,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },


    modalTitle: {
        position: "absolute",
        left: 128, 
        top: 17,
        width: 119,
        height: 19,
        fontSize: 16
    },

    modalHeaderCloseText: {
        position: "absolute",
        left: 341, 
        top: 17,
        width: 119,
        height: 19,
        fontSize: 16
    },

    modalPrompt: {
        position: "absolute",
        width: 264,
        height: 19,
        left: 56,
        bottom: 564.5,

        fontSize: 16,
        textAlign: "center",
        color: "#430CB9"
    },

    input: {
        backgroundColor: "#F2F2F2",
        borderRadius: 20,
        width: 311,
        height: 159,
        top: 50,
        right: 15,
        paddingTop: 30,
        padding: 30,
    },

    addPhotoButton: {
        width: 125,
        height: 40,
        right: 12,
        top: 80,
    },

    postButton: {
    width: 60,
    height: 40,
    left: 110,
    top: 80
    },
  });
  

export default HomeScreen;