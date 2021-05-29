import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
interface IState {
  curexch: currentExchange | null;
}
type Props = null;
type currentExchange = {
  base: string;
  date: string;
  rates: rates;
};
type rates = {
  GBP: number;
  USD: number;
};
export default class App extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);
    this.state = {curexch: null};
  }
  public componentDidMount() {
    this.getCurExFromApi();
  }
  public getCurExFromApi = () => {
    fetch('https://api.ratesapi.io/api/latest?symbols=USD,GBP')
      .then((response) => response.json())
      .then((json: currentExchange) => {
        this.setState({curexch: json});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // renders the content for the app
  render() {
    return this.state.curexch === null ? (
      <ActivityIndicator />
    ) : (
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>
            Base Currency: {this.state.curexch.base}
          </Text>
        </View>
        <View style={styles.ShapeView}>
          <Text style={styles.rates}>USD: {this.state.curexch.rates.USD}</Text>
          <Text style={styles.rates}>GBP: {this.state.curexch.rates.GBP}</Text>
        </View>
      </View>
    );
  }
}
// CSS styles used
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C8C8C8',
    backgroundColor: '#000000',
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: '#C8C8C8',
    fontWeight: 'bold',
  },
  rates: {
    top: 90,
    left: 60,
    fontSize: 25,
    color: '#C8C8C8',
  },
  ShapeView: {
    width: 270,
    height: 270,
    borderRadius: 4,
    borderWidth: 10,
    borderColor: '#C8C8C8',
    backgroundColor: '#000000',
  },
});
