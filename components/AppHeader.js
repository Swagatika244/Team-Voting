import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Team Voting App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'aqua',
    borderBottomWidth: 5

  },
  text:{
    padding: 20,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

