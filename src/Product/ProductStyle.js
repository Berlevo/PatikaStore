import {StyleSheet, Dimensions} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#eceff1',
        margin: 10,
        padding: 15,
        marginBottom: 130,
    },
    image: {
        borderRadius: 10,
        height: Dimensions.get('window').height /4,
        resizeMode: 'contain',
        width: '100%',
    },
    title: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: "left",
    },
    price: {
        marginLeft: 20,
        fontSize: 20,
        textAlign: "left",
        marginBottom: 10,
        
    },
    imagecontainer: {
        marginTop:10,
        marginBottom: 10,
        alignItems: 'center',
        
    },
    Stock:{
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'red',
        marginBottom: 10,
    }
})