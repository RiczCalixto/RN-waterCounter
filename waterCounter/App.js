/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Platform, Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consumido: 0,
      status: 'Ruim!! Bora beber mais água!!',
      pct: 0
    };
    this.onAddWatter = this.onAddWatter.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onUpdate() {
    let s = this.state;
    s.pct = parseFloat(((s.consumido / 2000) * 100).toFixed(2));

    if (s.pct >= 100) {
      s.status = "Excelente"
    } else if (s.pct >= 70) {
      s.status = "Chegando lá.."
    } else if (s.pct >= 50) {
      s.status = "Falta menos do que faltava!!"
    } else {
      s.status = "Ruim!! Bora beber mais água!! "
    }


    this.setState(s);
  }
  onAddWatter() {
    let s = this.state;
    s.consumido += 200;
    this.setState(s)
    this.onUpdate();

  }

  onReset() {
    let s = this.state;
    s.consumido = 0
    s.status = 'Ruim!! Bora Beber Mais água!!'
    s.pct = 0

    this.setState(s);
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('./img/waterbg.png')}
          style={styles.bgImage}>
          <View>
            <View style={styles.infoArea}>
              <View style={styles.area}>
                <Text style={styles.titleArea}>Meta</Text>
                <Text style={styles.dataArea}>2000ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.titleArea}>Consumido</Text>
                <Text style={styles.dataArea}>{this.state.consumido}ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.titleArea}>Status</Text>
                <Text style={styles.dataArea}> {this.state.status}</Text>
              </View>
            </View>

            <View style={styles.percentageArea}>
              <Text style={styles.percentageText}>
                {this.state.pct}%
              </Text>
            </View>

            <View style={styles.btnArea}>
              <Button title="Beber 200ml"
                onPress={this.onAddWatter} />

            </View>
            <View style={styles.btnArea}>
              <Button title="Resetar meta"
                onPress={this.onReset} />
            </View>

          </View>

        </ImageBackground>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#FFFFFF'
  },
  bgImage: {
    flex: 1,
    width: null
  },
  infoArea: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50
  },
  area: {
    flex: 1,
    alignItems: 'center'
  },
  titleArea: {
    color: '#34b2fc'
  },
  dataArea: {
    color: '#2b4274',
    fontSize: 15,
    fontWeight: 'bold'
  },
  percentageArea: {
    marginTop: 180,
    alignItems: 'center'
  },
  percentageText: {
    fontSize: 70,
    color: '#FFFFFF',
    backgroundColor: 'transparent'
  },
  btnArea: {
    marginTop: 30,
    alignItems: 'center'
  }
});
