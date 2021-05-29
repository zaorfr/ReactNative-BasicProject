import React, {Component} from 'react';
import {ComponentView} from './WatchComponent';
interface IState {
  currentTime: string;
  currentDay: string;
  dummy: string;
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
    this.state = {currentTime: '', currentDay: '', dummy: ''};
    this.handleStateChange = this.handleStateChange.bind(this);
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
  public handleStateChange(value: string) {
    this.setState({dummy: value});
  }
  // renders the content for the app
  render() {
    return (
      <ComponentView
        currentTime={this.state.currentTime}
        currentDay={this.state.currentDay}
        handleStateChange={this.handleStateChange}
      />
    );
  }
}
