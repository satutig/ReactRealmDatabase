import React, { Component } from 'react';
import PropTypes from 'prop-types';
import{View} from 'react-native';
import Mybutton from './Mybutton';
import Mytext from './Mytext';
import realm from 'realm';
import MyText from './Mytext';
import MyButton from './Mybutton';

let realm;
export class HomeScreen extends React.Component{

constructor(props){

    super(props);
    realm = new Realm(

        {
            path : 'UserDataBase.realm',
            schema:[

                {

                    name: 'user_details',
                    properties:{
                        user_id:{type:'int', default:0},
                        user_name:'string',
                        user_address:'string',
                        user_contact:'string',
                    },
                },
            ],

        }
    );
}
    render(){

        return (

            <View
              style={
                  {
                      flex:1,
                      backgroundColor:'white',
                      flexDirection:'column',
                  }
              }
            >
                <MyText>
                    'Realm operations '
                </MyText>

                <MyButton
                    title='Register'
                    customClick = {
                        () => 
                            this.props.navigation.navigate('Register')
                    }
                >
                    
                </MyButton>

                <MyButton title="View" customClick = {
                    ()=> this.props.navigation.navigate('View')
                }>


                </MyButton>

                <MyButton title="View All" customClick = {
                    () => this.props.navigation.navigate('ViewAll')
                }>

                </MyButton>

                <MyButton title = "Delete" customClick={
                    ()=> this.props.navigation.navigate('Delete')
                }>

                </MyButton>

                <MyButton title="Update" customClick={
                    ()=> this.props.navigation.navigate('Update')
                }>

                </MyButton>


            </View>

        );
    }
}
