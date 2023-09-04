import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {useDispatch} from 'react-redux';
import {cartSlice} from '../redux/store/cartSlice';
const CartListItem = ({cartItem}) => {
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productko: cartItem.product.id,
        amount: 1,
      }),
    );
  };

  const decreaseQuantity = () => {
    dispatch(
      cartSlice.actions.changeQuantity({
        productko: cartItem.product.id,
        amount: -1,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: cartItem.product.image}} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.product.name}</Text>
        <Text style={styles.size}>Size {cartItem.size}</Text>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
            <Text>+</Text>
          </TouchableOpacity>
          <Text style={styles.itemTotal}>
            ${cartItem.product.price}x{cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    width: width,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: '40%',
    aspectRatio: 1,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
  size: {
    fontSize: 16,
    color: 'gray',
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    color: 'gray',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    height: 20,
    width: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTotal: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: '500',
  },
});

export default CartListItem;
