import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyleSheet, View, Text} from 'react-native';

const MyText = props => {

    return (

        <View>
            <Text style={styles.text}>{props.text}</Text>
        </View>
       
    );
};

const styles = StyleSheet.create({
    text: {
      color: '#111825',
      fontSize: 18,
      marginTop: 16,
      marginLeft: 35,
      marginRight: 35,
    },
  });

  export default MyText;