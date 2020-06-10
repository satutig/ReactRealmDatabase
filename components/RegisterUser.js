import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{View, StyleSheet, ScrollView, Alert, KeyboardAvoidingView} from 'react-native';
import realm from 'realm';

let realm;

export default class RegisterUser extends React.Component{

    constructor(props){

        super(props);
        this.state={
            user_name:'',
            user_address:'',
            user_contact:''
        };

        realm = new Realm({
            path:'UserDatabase.realm'   
               
        });
    }

    /* register user in ralm database in table created user_details in HomeScreen View */

    render(){

        return(

            <View>

            </View>

        );
    }
}