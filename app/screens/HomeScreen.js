import React, {useState} from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TextInput, TouchableOpacity, Modal} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen(props) {  
    const [show, setShow] = useState(false); 
    const [userInput, setUserInput] = useState(null)

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

        <TouchableOpacity onPress={() => setShow(true)}>
          <Image
           style={styles.answerButton}
          source={require('../assets/answerButton.png')}/>
        </TouchableOpacity>
        </View>

        <Modal 
            transparent={true}
            visible={show}>
                <View style={{backgroundColor: "#000000aa", flex: 1}}>
                    <View style={{flex: .2}}></View>
                    <View
                        style={styles.modalTop}
                    >
                        <Text 
                            style={styles.modalTitle}>
                            Answer Prompt</Text>
                    </View>
                    <View style={{backgroundColor: "#ffffff", padding: 50, flex: .8,}}>
                        <Text style={styles.modalPrompt}>What is the highlight of your day?</Text>
                        <TextInput 
                            style={styles.input}
                            multiline={true}
                            placeholder="Type your answer..."
                            onChangeText={(val) => setUserInput(val)}/>
                        <Text>{userInput}</Text>
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

    answerButton: {
        width: 231,
        height: 43,
        left: 40,
        top: 315,
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
  });
  

export default HomeScreen;