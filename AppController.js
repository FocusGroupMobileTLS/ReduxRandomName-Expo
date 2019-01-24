import React, {Component} from 'react'
import {StyleSheet, Text, View, Button} from 'react-native'
import { fetchUser } from './actions/Actions'
import {connect} from 'react-redux'

export class AppController extends Component {

  buttonOrLoad() {
    if (this.props.isFetching == true) {
      return (
        <Text style={{...styles.indicator, ...{fontSize: 15}}}>
        Loading..
        </Text>
      );
    } else {
      return (
        <Button
          onPress={() => this.props.dispatch(fetchUser())}
          title="Fetch user"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"/>
      );
    }
  }

  render() {
    console.log(this.props);
    
    return (
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.indicator}>{this.props.firstName ?
                `${this.props.firstName} ${this.props.lastName} `
                : "Welcome to React Native!"}</Text>
          </View>
          <View style={styles.container}>
              {this.buttonOrLoad()}
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  indicator: {
    alignItems: 'center',
    fontSize: 30,
    width: 250,
    textAlign: 'center'
  }
});

const mapStateToProps = state => ({
  isFetching: state.reducer.isFetching,
  firstName: state.reducer.firstName,
  lastName: state.reducer.lastName
})

export default connect(mapStateToProps)(AppController)