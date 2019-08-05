import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    item_container: {
        padding: 12,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:1,
        borderBottomWidth: 4,
        borderColor: 'red',
        borderRadius: 8,
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('3%'),
        flexDirection: 'row',

    }
});

export default styles;