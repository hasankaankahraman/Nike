import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from 'react-native';
// import products from '../data/products';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {cartSlice} from '../redux/store/cartSlice';

export default function ProductDetailsScreen({navigation}) {
  const {width} = useWindowDimensions();
  // const product = products[1];

  const product = useSelector(state => state.products.selectedProduct);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartSliceItem({product}));
    //  product:product olamsı lazım key=value olunca tek yazılıyor.
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      {/* Image Carousel */}

      <ScrollView>
        <FlatList
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={product.images}
          renderItem={({item}) => (
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          )}
        />
        {/* Title */}
        <Text style={styles.title}>{product.name}</Text>

        {/* Price */}
        <Text style={styles.price}>${product.price}</Text>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable style={styles.button} onPress={addToCart}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
