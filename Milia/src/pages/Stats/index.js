import React from 'react';
import { View, ImageBackground } from 'react-native';

import styles from './styles';

class Stats extends React.Component {
    render() {
        return (
            <View style={styles.page_container}>
                <ImageBackground   
                    source={require('./backMIliaWithGrey.png')}
                    style={styles.background}
                    resizeMode = 'cover'      
                />
            </View>
        );
    }
}

export default Stats;
