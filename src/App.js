import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import ProductCards from './Product/ProductCard';
import Datas from './Data/Datas.json';

function App() {
  const [text, onChangeText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={TitleStyle.container}>
          <Text style={TitleStyle.baseText}>PATIKASTORE</Text>
        </View>
        <View style={SearchBox.container}>
          <TextInput
            style={SearchBox.input}
            placeholder="Ara..."
            onChangeText={onChangeText}
            defaultValue={text}
          />
        </View>
        <FlatList
          data={Datas}
          numColumns = {2}
          keyExtractor = {(item, index) => item.id}
          renderItem={({item}) => <ProductCards product={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const TitleStyle = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 10,
  },
  baseText: {
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

const SearchBox = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#eceff1',
    borderRadius: 10,
  },
  input: {
    height: 40,
    marginLeft: 15,
  },
});

export default App;
