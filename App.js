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
import { ImageBackground } from 'react-native';

const restaurantData = [
  {
    title : "Biriyani Blues",
    tagline: "Asian cuisin, $$$",
    eta: "10-50",
    imagePath: require('./assets/images/polao.jpeg'),
    openStatus: 'Closed Now!',

  },
  {
    title : "Cream & Cake",
    tagline: "Dessert, Ice Cream, $$$",
    eta: "10-30",
    imagePath: require('./assets/images/ice-cream.jpeg'),
    openStatus: 'Open Now!'
  },
  {
    title : "Burger King",
    tagline: "American, Burgers, $$$",
    eta: "10-30",
    imagePath: require('./assets/images/burger.jpeg'),
    openStatus: 'Closed Now!'
  },
  {
    title : "Dessert Dairy",
    tagline: "Dessert, Custard, $$$",
    eta: "15-40",
    imagePath: require('./assets/images/custard.jpeg'),
    openStatus: 'Closed Now!'
  },
]

// step 5 - Custom HomeScreenCell
const HomeScreenCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{margin: 10, height: 290}}
    cellContentView={
      <View style={styles.container}>
        <ImageBackground source={props.imageSrc} resizeMode='cover' style={styles.imageStyle}>
          <View style={styles.etaStyle}>
            <Text style={styles.etaText}>{props.eta}</Text>
            <Text style={styles.etaText}>mins</Text>
          </View>
        </ImageBackground>
        <Text style={styles.titleText}>{props.title}</Text>
        <Text style={styles.taglineText}>Rating : ⭐️⭐️⭐️⭐️⭐️</Text>
        <Text style={styles.taglineText}>{props.tagline}</Text>
        <View style={styles.openStatusStyle}>
          <Text style={{fontSize: 25, fontWeight:'bold'}}>{props.openStatus}</Text>
        </View>
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
            {restaurantData.map((item, index) => (
              <HomeScreenCell key={item.title}
              title={item.title}
              tagline={item.tagline}
              eta= {item.eta}
              imageSrc={item.imagePath}
              openStatus={item.openStatus}
              />
            ))}
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
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingTop: 10
  },
  titleText: {
    color: 'blueviolet', 
    fontSize: 25, 
    fontWeight: 'bold',  
    width: '100%', 
    marginTop: 10,
    backgroundColor: 'plum', 
    height: 30
  },
  taglineText:{
    color: 'blueviolet',
    fontSize: 15, 
    fontWeight:'800', 
    marginTop: 5
  },
  etaStyle:{
    position: 'absolute', 
    top: 120, 
    left: 180, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    height: 85, 
    width: 120, 
    borderRadius: 50, 
    overflow: 'hidden', 
    borderColor: 'blue', 
    borderWidth: 2
  },
  etaText:{
    fontSize: 25, 
    fontWeight:'bold'
  },
  imageStyle:{
    width: '100%', 
    height: 170
  },
  openStatusStyle:{
    position: 'absolute',
    top: 230, 
    left: 160, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    height: 35
  }
});

registerRootComponent(App);

