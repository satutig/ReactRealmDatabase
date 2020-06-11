import React, { Component } from 'react';
import {TextInput, Text, StyleSheet, View} from 'react-native';

const Mytextinput = props => {

    return (

        <View
         style = {
            {

                marginLeft:30,
                marginRight:30,
                marginTop:10,
                borderColor: '#007FFF',
                borderWidth:1,
            }

         }
        >

            <TextInput
                underlineColorAndroid = 'transparent'
                placeholder = {props.placeholder}
                placeholderTextColor= '#007FFF'
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                value={props.value}

            >

        </TextInput>

        </View>
        

    );

};

export default Mytextinput;