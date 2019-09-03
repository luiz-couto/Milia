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
        borderColor: 'rgb(8, 140, 196)',
        borderRadius: 8,
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('3%'),

    },

    item_header: {
        flexDirection: 'row',
    },

    item_content: {
        marginTop: 5,
        flexDirection: 'row',
    },

    income_name: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: 'rgba(255,255,255,0.8)',
        marginTop: 5.5,
        marginLeft: 4,
    },

    income_value: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: 'white',
        marginTop: 5.5,
    },

    income_spend: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: 'rgb(252,95,95)',
        marginTop: 5.5,
        marginLeft: wp('1%')
    },

    income_sub: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#1B9E2D',
        marginTop: 5.5,
        marginLeft: wp('2%')
    }
});

export default styles;