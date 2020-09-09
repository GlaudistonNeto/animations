import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LarAnimada: new Animated.Value(150),
      AltAnimada: new Animated.Value(35),
      OpAnimada: new Animated.Value(0)
    };
    this.loadGraphic = this.loadGraphic.bind(this);
  }
  loadGraphic() {
    Animated.sequence([
      Animated.timing(
        this.state.OpAnimada,
        {
          toValue: 1,
          duration: 1000
        }
      ),
      Animated.timing(
        this.state.AltAnimada,
        {
          toValue: 300,
          duration: 400
        }
      )
    ]).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: '#4169E1'
        }}>

          <TouchableOpacity onPress={this.loadGraphic}>
            <Text style={{ fontSize: 25, color: '#fff' }}>
              Generate Graphic
            </Text>
          </TouchableOpacity>

        </View>

        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <Text>Vendas</Text>
          <Animated.View
            style={{
              width: this.state.LarAnimada,
              height: this.state.AltAnimada,
              backgroundColor: '#FF0000',
              justifyContent: 'center',
              opacity: this.state.OpAnimada
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 22,
                textAlign: 'center'
              }}
            >
              R$: 150,00.
          </Text>
          </Animated.View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({});
