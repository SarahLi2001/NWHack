import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableWithoutFeedback, Alert, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function HomeScreen(props) {  
    return (
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
        <View 
          style={{
            position: "absolute",
            width: 311,
            height: 106,
            left: 32,
            bottom: 571,
            
            backgroundColor: "#F2F2F2",
            borderRadius: 20,
          }}>
        <Text>No</Text>
        </View>

        <View 
          style={{
            
            position: "absolute",
            width: 311,
            height: 424,
            left: 32,
            bottom: 265,
            
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
      alignItems: 'center',
    },
  });
  

export default HomeScreen;