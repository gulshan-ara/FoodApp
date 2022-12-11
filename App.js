// Step 2 - import required libraries
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

// Step 4 - HomeScreen
function HomeScreen(){
  return (
    <SafeAreaView>
      <ScrollView style={{height: "100%"}}>
        <TableView>
          <Section 
            header='' 
            hideSeparator="true"
            sectionTintColor="#ccc"
          >
            <Cell cellStyle='Basic' title='Basic Cell' detail='Details'></Cell>
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

function Restaurant(){
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>It's Restaurant</Text>
    </View>
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
         name='Home' 
         component={HomeScreen}
        >
        </Stack.Screen>
        <Stack.Screen
         name='Restaurant' 
         component={Restaurant}
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
});
