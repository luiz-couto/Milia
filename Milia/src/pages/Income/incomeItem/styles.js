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

    },

    income_name: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: 'rgba(0,0,0,0.66)',
        marginTop: 5.5,
        marginLeft: 4,
    },

    income_value: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: '#1B9E2D',
        marginTop: 5.5,
        marginLeft: wp('30%')
    }
});

export default styles;