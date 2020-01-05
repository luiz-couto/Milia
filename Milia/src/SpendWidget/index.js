import React from 'react';
import { Text, View, Dimensions, PanResponder, Animated, TouchableOpacity, TouchableHighlight } from 'react-native';

import styles from './styles';
import { Divider } from 'react-native-elements';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class SpendWidget extends React.Component {
    constructor() {
        super();

        this.state = {
            pan: new Animated.ValueXY(),
        };

        this._val = { x:0, y:0 }
        this.state.pan.addListener((value) => this._val = value);

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (e, gesture) => true,
            onPanResponderMove: Animated.event([
              null, { dx: this.state.pan.x, dy: this.state.pan.y }            
            ]), 
            onPanResponderGrant: (evt, gestureState) => {
                this.state.pan.setOffset(this.state.pan.__getValue());
                this.state.pan.setValue({ x: 0, y: 0 });
            },
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return gestureState.dx != 0 && gestureState.dy != 0;
            }
            
        });
        
    }

    render() {
        let panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return(
            
            <Animated.View
            {...this.panResponder.panHandlers}
                style={[panStyle, styles.circle]} 
            >
                <View style={{backgroundColor: 'white', marginTop: 0, borderRadius: 70, height: 70}}>
                <TouchableOpacity style={{alignItems: "center" }} onPress={() => {alert('CLICKED') }}>
                    <Text style={{ fontSize: 65, marginBottom: 10 }}>!</Text>
                </TouchableOpacity>
                </View>

            </Animated.View>
            
        );
    }
}

export default SpendWidget;