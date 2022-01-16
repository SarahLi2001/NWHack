import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableWithoutFeedback, Alert, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function HomeScreen(props) {  
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
            position: "absolute",
            width: 311,
            height: 424,
            left: 32,
            top: 265,
            
            backgroundColor: "#F2F2F2",
            borderRadius: 20,
          }}>
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