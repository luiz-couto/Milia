import React from 'react';
import { Appbar } from 'react-native-paper';

class Header extends React.Component {
    _openMenu = () => console.log('Open Menu'); // temp func

    render() {
        return(
            <Appbar.Header style={{ backgroundColor : this.props.color }}>
                <Appbar.Action icon='menu' onPress={this._openMenu} color='white' />
                <Appbar.Content title={this.props.title} color='white' titleStyle={{ fontSize: 17, fontFamily: 'Roboto-Regular' }}/>
            </Appbar.Header>
        );
    }
}

export default Header;