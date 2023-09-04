import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React from 'react';
// import products from '../data/products';
import {useSelector, useDispatch} from 'react-redux';
import {productsSlice} from '../redux/store/productSlice';

export default function ProductsScreen({navigation}) {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const products = useSelector(state => state.products.products); //state.name.dizi
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products}
      renderItem={({item}) => (
        <Pressable
          onPress={() => {
            // update selected product
            dispatch(productsSlice.actions.setSelectedProduct(item.id));
            navigation.navigate('Product Details');
          }}>
          <Image source={{uri: item.image}} style={styles.image} />
        </Pressable>
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  image: {height: 200, width: 200, margin: 10},
});
