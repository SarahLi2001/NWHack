import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function HomeScreen(props) {  
    const [isModalVisible, setIsModalVisible] = React.useState(false);

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
        onPress={() => 
            Alert.prompt("Answer Prompt", "Prompt", (text) => console.log(text))}>
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