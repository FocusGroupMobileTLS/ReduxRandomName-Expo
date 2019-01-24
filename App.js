import React, {Component} from 'react'
import {AppRegistry} from 'react-native'
import AppController from './AppController'
import {name as appName} from './app.json'
import { Provider } from 'react-redux'
import configStore from './configStore'

const store = configStore()

export default class App extends Component {
    render() {
        return(
            <Provider store={store}>
                <AppController/>
            </Provider>
        );
    }
}
