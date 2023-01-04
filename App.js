// Step 2 - import required libraries
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
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
    title : "Biriyani Blues",
    tagline: "Asian cuisin, $$$",
    eta: "10-50",
    imagePath: require('./assets/images/biriyani.jpeg'),
    openStatus: 'Closed Now!',

  }
]

const menuData = [
  {
    restaurantId : "Biriyani Blues",
    items: [{
      title: "Biriyani",
      contents: [
        {title: "Chicken Biriyani", price : "5.99$", imagePath: require('./assets/images/biriyani.jpeg')},
        {title: "Veg Biriyani", price : "3.99$", imagePath: require('./assets/images/biriyani.jpeg')},
        {title: "Hyderabadi Biriryani", price : "5.99$", imagePath: require('./assets/images/biriyani.jpeg')},
        {title: "Mutton Biriyani", price : "7.99$", imagePath: require('./assets/images/biriyani.jpeg')}
      ]
    }, 
    {
      title: "Polao",
      contents: [
        {title: "White polao", price : "1.99$", imagePath: require('./assets/images/polao.jpeg')},
        {title: "Vegetable polao", price : "2.49$", imagePath: require('./assets/images/polao.jpeg')},
        {title: "Cauliflower polao", price : "1.99$", imagePath: require('./assets/images/polao.jpeg')}
      ]
    },
    {
      title: "Drinks",
      contents: [
        {title: "Borhani", price : "1.99$", imagePath: require('./assets/images/borhani.jpeg')},
        {title: "Coka cola", price : "2.49$", imagePath: require('./assets/images/borhani.jpeg')},
        {title: "Pepsi", price : "1.99$", imagePath: require('./assets/images/borhani.jpeg')},
        {title: "7up", price : "1.99$", imagePath: require('./assets/images/borhani.jpeg')}
      ]
    }]
  },
  {
    restaurantId : "Cream & Cake",
    items: [{
      title: "Cakes",
      contents: [
        {title: "Fruit Cake", price : "1.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "No Cream Chocolate Cake", price : "1.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "Vanilla Cake", price : "2.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "Orange Cake", price : "2.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "Red Velvet Cake", price : "3.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "Moist Chocolate Cake", price : "4.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "Choco Lava Cake", price : "3.99$", imagePath: require('./assets/images/pastry.jpeg')},
        {title: "Cupcakes", price : "0.99$", imagePath: require('./assets/images/pastry.jpeg')}
      ]
    },{
      title: "Ice Cream",
      contents: [
        {title: "Vanilla Ice Cream", price : "1.99$", imagePath: require('./assets/images/icecream.jpeg')},
        {title: "Strawberry Ice Cream", price : "1.99$", imagePath: require('./assets/images/icecream.jpeg')},
        {title: "Chocolate Ice Cream", price : "2.99$", imagePath: require('./assets/images/icecream.jpeg')}
      ]
    }]
  },
  {
    restaurantId : "Burger King",
    items: [{
      title: "Burgers",
      contents: [
        {title: "Vegetable Burger", price : "1.99$", imagePath: require('./assets/images/burgers.jpeg')},
        {title: "Chicken Burger", price : "2.99$", imagePath: require('./assets/images/burgers.jpeg')},
        {title: "Beef Burger", price : "3.99$", imagePath: require('./assets/images/burgers.jpeg')},
        {title: "Spicy 8-layer Burger", price : "5.99$", imagePath: require('./assets/images/burgers.jpeg')}
      ]
    },{
      title: "Pizza & Puffs",
      contents: [
      {title: "Chicken Puff", price : "2.99$", imagePath: require('./assets/images/snacks.jpeg')},
      {title: "Chicken Pizza", price : "3.99$", imagePath: require('./assets/images/snacks.jpeg')},
      {title: "Beef Puff", price : "3.99$", imagePath: require('./assets/images/snacks.jpeg')},
      {title: "Sandwich", price : "1.99$", imagePath: require('./assets/images/snacks.jpeg')}
    ]
    }]
  }
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

function menuPress(title){
  alert('Confirm order for ' + title + '?');
}

function Menu({route}){
  const {resId} = route.params;
  const resMenu = menuData.find(item => item.restaurantId === resId);

  return (
    <SafeAreaView>
      <ScrollView style={{height: "100%"}}>
        <TableView appearance='light'>
          {resMenu.items.map((item) => (
            <Section 
              header={item.title} 
              key={item.title} 
              headerTextColor='black' 
              headerTextStyle={styles.sectionHeaderStyle}
            >
              {item.contents.map((cellItem) =>
                <Cell 
                  key={cellItem.title}
                  cellStyle='Basic'
                  onPress={() => menuPress(cellItem.title)}
                  contentContainerStyle={{marginHorizontal: 20, marginVertical: 10, height: 100}}
                  cellContentView={
                    <View style={styles.menuCellStyle}>
                      <View style={{flex: 2}}>
                        <Text style={styles.menuCellTitleStyle}>{cellItem.title}</Text>
                        <Text style={styles.menuCellDetailStyle}>Price : {cellItem.price}</Text>
                      </View>
                      <ImageBackground style={{flex:1}} source={cellItem.imagePath} resizeMode='cover'></ImageBackground>
                    </View>
                  }
                />
              )}
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
  },
  sectionHeaderStyle:{
    fontWeight:'600', 
    textTransform:'uppercase', 
    backgroundColor:'rgba(10, 0, 255, 0.1)', 
    height: 35, 
    textAlign: 'center', 
    fontSize: 25,
  },
  menuCellStyle: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  menuCellTitleStyle:{
    fontSize: 20,
    fontWeight: '600',
    padding: 5,
    color: 'violet'
  },
  menuCellDetailStyle:{
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
    color: 'rgba(10, 0, 255, 0.5)'
  }
});