/* 1- DECLARAÇÃO/IMPORT DAS BIBLIOTECAS */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View , StatusBar} from 'react-native';

/* 2- CRIA OS COMPONENTES */
const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

export class Splash extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
      <MyStatusBar backgroundColor="#00AEEF" barStyle="light-content" />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Welcome to Disney World!</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Powered by React Native</Text>
        </View>
      </View>
    )
  }
}

/* 3- CRIA OS ESTILOS */
const styles = StyleSheet.create ({

  wrapper: {
    flex:1,
    backgroundColor: '#00AEEF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontFamily: 'New Waltograph',
    color: 'white',
    fontSize: 35,
  },

  subtitle: {
    fontFamily: 'New Waltograph',
    color: 'white',
    fontSize: 20,
    fontWeight: '200',
    padding: 16
  },

  titleWrapper: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: 10 
  }
});
