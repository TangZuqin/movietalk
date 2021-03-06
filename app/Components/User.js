'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    ListView,
    ActivityIndicator,
    TouchableHighlight,
    NavigatorIOS
} from 'react-native';
import styles from '../Styles/Main';
import UserProfile from './UserProfile';


class User extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigatorIOS
                style={styles.container}
                initialRoute={{
                    title: '我的',
                    component: UserProfile
                }}
                shadowHidden={true}
                barTintColor="darkslateblue"
                titleTextColor="rgba(255,255,255,0.8)"
                tintColor="rgba(255,255,255,0.8)"
                translucent={true}
            />
        );
    }
}

export {User as default};