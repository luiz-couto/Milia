import React from 'react';
import { Text, View, Dimensions, PanResponder, Animated, TouchableOpacity, TouchableHighlight, Modal } from 'react-native';

import styles from './styles';
import { Divider } from 'react-native-elements';
import { Portal, Dialog, Paragraph, Button } from 'react-native-paper';

import ISpend from '../pages/ISpend/index';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

class SpendWidget extends React.Component {
    constructor() {
        super();

        this.state = {
            pan: new Animated.ValueXY(),
            showModal: false
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

    closeModal = () => {
        this.setState({ showModal: false })
    }

    render() {
        let panStyle = {
            transform: this.state.pan.getTranslateTransform()
        }
        return(
            <>
            <Animated.View
            {...this.panResponder.panHandlers}
                style={[panStyle, styles.circle]} 
            >
                <View style={{backgroundColor: 'white', marginTop: 0, borderRadius: 70, height: 70}}>
                <TouchableOpacity style={{alignItems: "center", flex: 1 }} onPress={() => {
                    this.setState({ showModal: true })
                    } }>
                    <Text style={{ fontSize: 50, marginBottom: 10, color: 'rgb(245, 233, 7)' }}>S</Text>
                </TouchableOpacity>
                </View>

            </Animated.View>
            { this.state.showModal && 
            <Portal>
             <Dialog
                style={{ backgroundColor: 'white' }}
                visible={true}
                onDismiss={() => {
                    this.setState({ showModal: false })
                }}>
               <Dialog.Title style={{ color: 'rgb(247, 212, 15)' }}> Note Expense </Dialog.Title>
               <ISpend  closeModal={this.closeModal}/>
             </Dialog>
            </Portal>}
            </>
        );
    }
}

export default SpendWidget;