import React, {useEffect, useState} from 'react';
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState('');

  const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  const renderItem = ({item}) => <Item title={item.name} />;
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then((res) => {
        setCountries(res.data);
        setLoad(true);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    return error ? (
      error.message
    ) : (
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    );
  } else {
    return <ActivityIndicator />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#000000',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color: '#FFFFFF',
  },
});

export default App;
