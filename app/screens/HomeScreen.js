import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity, Modal} from 'react-native';
import { StatusBar } from 'expo-status-bar';

function HomeScreen(props) {  
    const handleAnswer = () => console.log("Answer clicked");

    return (
      <SafeAreaView style={styles.container}>
        <Text
            style={{ 
            position: "absolute",
            left: 32, 
            top: 76,
            width: 117,
            height: 27,
            fontSize: 23,}}>
                Hello!
        </Text>

        <Image 
            source={require('../assets/streak.png')} 
            style={{ position: "absolute",
            left: 32, 
            top: 135}}/>

        <View 
          style={{
            width: 311,
            height: 424,
            left: 32,
            top: 265,
            
            backgroundColor: "#F2F2F2",
            borderRadius: 20,
          }}>

            <Image 
                source={require('../assets/todaysPrompt.png')} 
                style={{ 
                left: 77, 
                top: 24,
                height: 18,
                }}/>

        <TouchableOpacity 
        onPress={handleAnswer}>
          <Image
           style={{
            width: 231,
            height: 43,
            left: 40,
            top: 315,
          }}
          source={require('../assets/answerButton.png')}/>
        </TouchableOpacity>
        </View>

        <Modal 
            transparent={true}
            visible={false}>
                <View style={{backgroundColor: "#000000aa", flex: 1}}>
                    <View style={{flex: .2}}></View>
                    <View style={{backgroundColor: "#ffffff", padding: 50, borderRadius: 24, flex: .8, justifyContent: 'flex-end',}}>
                        <Text>nAUR</Text>
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
  });
  

export default HomeScreen;