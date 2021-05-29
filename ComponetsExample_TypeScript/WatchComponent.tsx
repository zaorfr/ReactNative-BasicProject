import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
interface IOwnProps {
  currentTime: string;
  currentDay: string;
  handleStateChange: (value: string) => void;
}

type Props = IOwnProps;

export class WatchComponentView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  public componentDidMount() {
    this.props.handleStateChange('test');
  }
  public render() {
    return (
      <View style={styles.containerCircle}>
        <View style={styles.CircleShapeView}>
          <Text style={styles.daysText}>{this.props.currentDay}</Text>
          <Text style={styles.timeText}>{this.props.currentTime}</Text>
        </View>
      </View>
    );
  }
}

export const ComponentView = WatchComponentView;
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
