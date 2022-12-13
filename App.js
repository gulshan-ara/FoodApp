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
import { useNavigation } from '@react-navigation/native';
// step 3 - wrap the contents of App in a navigationContainer
const Stack = createStackNavigator();

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

const menuData = [
  {
    restaurantId : "Biriyani Blues",
    imagePath: require('./assets/images/polao.jpeg'),
    items: [{
      title: "Gelato",
      contents: [
        {title: "Vanilla"},
        {title: "Chocolate"},
        {title: "Mint"}
      ]
    }, 
    {
      title: "vanilla",
      contents: [
        {title: "Vanilla"},
        {title: "Chocolate"},
        {title: "Mint"}
      ]
    }]
  },
  {
    restaurantId : "Cream & Cake",
    imagePath: require('./assets/images/ice-cream.jpeg'),
    items: [{
      title: "Cream",
      contents: [
        {title: "Vanilla white"},
        {title: "Chocolate"},
        {title: "Strawberry"}
      ]
    }]
  },
  {
    restaurantId : "Burger King",
    imagePath: require('./assets/images/burger.jpeg'),
    items: [{
      title: "Coffee",
      contents: [
        {title: "Flat white"},
        {title: "Latte"},
        {title: "Caffe Americano"}
      ]
    }]
  },
  {
    restaurantId : "Dessert Dairy",
    imagePath: require('./assets/images/custard.jpeg'),
    items: [{
      title: "Pastry",
      contents: [
        {title: "Vanilla"},
        {title: "Chocolate"},
        {title: "Red Velvet"}
      ]
    }]
  },
]

// step 5 - Custom HomeScreenCell
const HomeScreenCell = (props) => (
  <Cell
    {...props}
    contentContainerStyle={{margin: 10, height: 290}}
    onPress={props.action}
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
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView style={{height: "100%"}}>
        <TableView appearance='light'>
          <Section
            header='' 
            hideSeparator="true"
            sectionTintColor="#ccc"
          >
            {restaurantData.map((item) => (
              <HomeScreenCell key={item.title}
              title={item.title}
              tagline={item.tagline}
              eta= {item.eta}
              imageSrc={item.imagePath}
              openStatus={item.openStatus}
              action={()=> navigation.navigate('Menu', {resId : item.title})}
              />
            ))}
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

function Menu({route}){
  const {resId} = route.params;
  const resMenu = menuData.find(item => item.restaurantId === resId);

  return (
    <SafeAreaView>
      <ScrollView style={{height: "100%"}}>
        <TableView appearance='light' style={{backgroundColor: '#00000000'}}>
          {resMenu.items.map((item) => (
            <Section header={item.title} key={item.title} headerTextColor='black' headerTextStyle={{fontWeight:'bold', textTransform:'uppercase', backgroundColor:'rgba(10, 0, 255, 0.1)', height: 35, textAlign: 'center', paddingTop: 5, fontSize: 20}}>
              {item.contents.map((cellItem) =>(
                <Cell key={cellItem.title} title={cellItem.title} cellStyle='Basic' />
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='Restaurant' 
         component={HomeScreen}
         options={{
          headerStyle: {
            backgroundColor: 'plum',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: 35
          },
        }}
        >
        </Stack.Screen>
        <Stack.Screen
         name='Menu' 
         component={Menu}
         options={{
          headerStyle: {
            backgroundColor: 'plum',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'cursive',
            fontSize: 35
          },
        }}
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
    borderWidth: 2,
    zIndex: 1
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

