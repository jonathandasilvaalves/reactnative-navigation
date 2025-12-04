import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'

import { Product } from "@/app/Product";
import { Home } from "@/app/Home";

export type BottomRoutesList = {
  home: undefined
  product: undefined | { id: string }
}

export type BottomRoutesProps<T extends keyof BottomRoutesList> = BottomTabScreenProps<BottomRoutesList, T>;

const Tab = createBottomTabNavigator<BottomRoutesList>();

export function BottomRoutes() {
  return (
    <Tab.Navigator 
      initialRouteName="home" 
      screenOptions={{ 
        headerShown: false,
        tabBarActiveTintColor: '#2c46b1',
        tabBarInactiveTintColor: '#777',
        tabBarLabelPosition: 'beside-icon'
         }}>
      <Tab.Screen 
        name="home" 
        component={Home} 
        options={{ 
          tabBarLabel: "Inicio",
          tabBarIcon: ({color, size}) => <MaterialIcons name="home" color={color} size={size} /> }} />
      <Tab.Screen 
        name="product" 
        component={Product} 
        options={{
          tabBarLabel: "Produto",
          tabBarIcon: ({color, size}) => <MaterialIcons name="add-circle" color={color} size={size} />
      }}/>
    </Tab.Navigator>
  );
}