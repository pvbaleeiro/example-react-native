/* 1- DECLARAÇÃO/IMPORT DAS BIBLIOTECAS */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, NativeModules } from 'react-native';
import { Welcome } from './welcome.js';
import { Splash } from './splash.js';


/* 2- CRIA OS COMPONENTES */
export default class example extends Component {
  render() {
    return (
        <Splash>
        </Splash>
    );
  }
}

/* 3- CRIA OS ESTILOS */
const styles = StyleSheet.create ({

  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
)

/* 4- EXIBE O COMPONENTE */
AppRegistry.registerComponent('example', () => example);
