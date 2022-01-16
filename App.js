// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, Image, SafeAreaView, TouchableWithoutFeedback, Button } from 'react-native';

// export default function App() {

//   const handlePress = () => console.log("Text clicked");

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1} onPress={handlePress}>hm</Text>
//       <Button 
//         color="orange"
//         title="click me" 
//         onPress={() => console.log("clicked me")}/>
//       <Image source={require('./assets/favicon.png')}/>
//       <TouchableWithoutFeedback onPress={() => console.log("I")}>
//         <Image source={{
//         width: 200,
//         height: 300,
//         uri: "https://picsum.photos/200/300"}}/>
//       </TouchableWithoutFeedback>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { LoginView } from './views/LoginView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login View"
            component={LoginView}
            options={{ title: "Read it Later - Maybe" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
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