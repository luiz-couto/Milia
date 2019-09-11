import React from 'react';
import { Text, View, Dimensions, PanResponder, Animated } from 'react-native';

import styles from './styles';
import { Divider } from 'react-native-elements';

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
            />
        );
    }
}

export default SpendWidget;