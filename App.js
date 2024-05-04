
import  React from 'react';
import { View, Text, StatusBar,} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Search from './screens/search.js';
import Home from './screens/home.js';



const Tab = createBottomTabNavigator()
const App=()=> {
  return (
   <SafeAreaProvider>
    <View>
    {/* <Search/>  */}
    <StatusBar barStyle="dark-content" backgroundColor="#00aaff"/>
   </View>
   <NavigationContainer>
    <Tab.Navigator
    screenOptions ={({route})=>({
      tabBarIcon:({color})=>{
        let iconName;
        if(route.name==="Home"){
          iconName = 'home-city-outline'
        }else if(route.name==="search"){
          iconName = 'city'
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={color}/>
      }
    })}
    >
      <Tab.Screen name='Home' component={Home}
      initialParams={{city:"MyCity"}}
      />
      <Tab.Screen name='search' component={Search}/>
    </Tab.Navigator>
   </NavigationContainer>
   </SafeAreaProvider>
  );
};


export default App;