import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import SpendWidget from '../../SpendWidget/index';

import styles from './styles';

class Main extends React.Component {
    render(){
        const navigation = this.props.navigation;
        return(
            <View>
                <SpendWidget />
                {/* <ImageBackground
                    
                    source={require('./main_background.png')}
                    style={styles.background}
                    resizeMode = 'cover'
                    
                /> */}
                <Image
                    source={require('./milia_logo.png')}
                    style={styles.logo}
                />
                <TouchableOpacity onPress={() => {navigation.navigate('Income')}} style={styles.start_button}>
                    <Text style={styles.button_text}>Começar</Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}

export default Main;