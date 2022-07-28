import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import styles from './ProductStyle';

const ProductCards = ({product}) => {
    return(
        <View style={styles.container}>
           <View style={styles.imagecontainer}>
            <Image style = {styles.image} source = {{uri: product.imgURL}}/>
            </View>
            <Text style = {styles.title}>{product.title}</Text>
            <Text style = {styles.price}>{product.price}</Text>
            {!product.inStock && <Text style = {styles.Stock}>STOKTA YOK</Text>}
        </View>
    );
};
/*s
<View style={styles.imagecontainer}>
<Image style = {styles.image} source = {{uri: product.imgURL}}/>
</View>
*/
export default ProductCards;