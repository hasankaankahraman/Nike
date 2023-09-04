import React from 'react';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import ShoppingCart from './src/screens/ShoppingCart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, Text} from 'react-native';
import {selectNumberOfItems} from './src/redux/store/cartSlice';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  const numberOfItems = useSelector(selectNumberOfItems);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({navigation}) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{flexDirection: 'row'}}>
                <Text>Basket</Text>
                <Text style={{marginLeft: 10}}>{numberOfItems}</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{presentation: 'modal'}}
        />
        <Stack.Screen
          name="Cart"
          component={ShoppingCart}
          options={{presentation: 'modal'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
