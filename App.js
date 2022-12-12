// Step 2 - import required libraries
import {registerRootComponent} from 'expo';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Image} from 'react-native';
import { ImageBackground } from 'react-native-web';

// step 5 - Custom HomeScreenCell
const HomeScreenCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{borderRadius: 25, margin: 10, backgroundColor: 'black',height: 290}}
    cellContentView={
      <View 
        style={{alignItems:'flex-start', flexDirection: 'column', flex: 1, paddingTop: 10}}
      >
        <ImageBackground source={require("./assets/ice-cream.jpeg")} resizeMode="cover" style={{width: 340, height: 220}}></ImageBackground>
        <Text style={{color: 'blueviolet', fontSize: 25, fontWeight: 'bold', backgroundColor:'white', width: 340, borderBottomEndRadius: 10, marginTop: 5}}>{props.title}</Text>
        <Text style={{color: 'blueviolet', fontSize: 20}}>This is tagline : {props.tagline}</Text>
      </View>
    }
  />
);

// Step 4 - HomeScreen
function HomeScreen(){
  return (
    <SafeAreaView>
      <ScrollView style={{height: "100%"}}>
        <TableView appearance='light'>
          <Section
            header='' 
            hideSeparator="true"
            sectionTintColor="#ccc"
          >
            <HomeScreenCell
              title="Joe's Gelato"
              tagline="Desert, Ice Cream"
            />
            <HomeScreenCell
              title="Joe's Gelato"
              tagline="Desert, Ice Cream"
            />
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

function Menu(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>It's Menu</Text>
    </View>
  );
}

// step 3 - wrap the contents of App in a navigationContainer
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='Restaurant' 
         component={HomeScreen}
        >
        </Stack.Screen>
        <Stack.Screen
         name='Menu' 
         component={Menu}
        >
        </Stack.Screen>
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
  cellMargin: {
    borderRadius: 5
  }
});

registerRootComponent(App);

