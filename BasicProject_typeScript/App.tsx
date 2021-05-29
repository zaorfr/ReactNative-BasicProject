import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface IState {
  currentTime: string;
  currentDay: string;
}
type Props = null;
export default class App extends Component<Props, IState> {
  public daysArray: string[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];
  public timer: any = null;
  constructor(props: Props) {
    super(props);
    this.state = {currentTime: '', currentDay: ''};
  }
  // helper method to get current day and time
  getCurrentTime = () => {
    let hour: string = new Date().getHours().toString();
    let minutes: string = new Date().getMinutes().toString();
    let seconds: string = new Date().getSeconds().toString();
    let am_pm = 'pm';
    if (parseInt(minutes, 10) < 10) {
      minutes = '0' + minutes;
    }

    if (parseInt(seconds, 10) < 10) {
      seconds = '0' + seconds;
    }

    if (parseInt(hour, 10) > 12) {
      hour = (parseInt(hour, 10) - 12).toString();
    }

    if (parseInt(hour, 10) === 0) {
      hour = '12';
    }

    if (new Date().getHours() < 12) {
      am_pm = 'am';
    }

    this.setState({
      currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm,
    });

    this.daysArray.map((item, key) => {
      if (key === new Date().getDay()) {
        this.setState({currentDay: item.toUpperCase()});
      }
    });
  };
  // called before component destroyed
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  // called inmediately after component mounted
  componentDidMount() {
    this.timer = setInterval(() => {
      this.getCurrentTime();
    }, 1000);
  }
  // renders the content for the app
  render() {
    return (
      <View style={styles.containerCircle}>
        <View style={styles.CircleShapeView}>
          <Text style={styles.daysText}>{this.state.currentDay}</Text>
          <Text style={styles.timeText}>{this.state.currentTime}</Text>
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
  },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  timeText: {
    top: 90,
    left: 60,
    fontSize: 25,
    color: '#C8C8C8',
  },
  daysText: {
    top: 90,
    left: 60,
    color: '#C8C8C8',
    fontSize: 25,
    paddingBottom: 0,
  },
  containerCircle: {
    top: 200,
    left: 60,
    flex: 1,
  },
  CircleShapeView: {
    width: 270,
    height: 270,
    borderRadius: 580 / 2,
    borderWidth: 10,
    borderColor: '#C8C8C8',
    backgroundColor: '#000000',
  },
});
