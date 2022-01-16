import React from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableWithoutFeedback, Alert, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function TestScreen(props) {
    const handlePress = () => console.log("Text clicked");
  
    return (
      <SafeAreaView style={styles.container}>
        <View 
          style={{
            backgroundColor: "dodgerblue",
            width: "50%",
            height: 70,
          }}>
        </View>
        <Text numberOfLines={1} onPress={handlePress}>hm</Text>
        <Button 
          color="orange"
          title="click me" 
          onPress={() => 
            Alert.alert("My title", "My message",[
              {text: "Yes", onPress: () => console.log("Yes")}, 
              {text: "No", onPress: () => console.log("No")},
          ])
          }
        />
        <Image source={require('../assets/favicon.png')}/>
        <TouchableWithoutFeedback onPress={() => console.log("I")}>
          <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"}}/>
        </TouchableWithoutFeedback>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default TestScreen;