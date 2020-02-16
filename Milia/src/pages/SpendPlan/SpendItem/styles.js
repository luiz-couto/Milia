import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    item_container: {
        padding: 0,
        backgroundColor: 'white',
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('3%'),
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.84,
        elevation: 4,

    },

    triangle_mark: {
        width: 0,
        height: 0,
        
        borderLeftWidth: 11,
        borderLeftColor: '#088cc4',
        
        borderRightWidth: 11,
        borderRightColor: 'transparent',
        
        borderBottomWidth: 11,
        borderBottomColor: 'transparent',

        borderTopWidth: 11,
        borderTopColor: '#088cc4'
    },

    item_header: {
        flexDirection: 'row',
    },

    item_content: {
        marginTop: 5,
        flexDirection: 'row',
    },

    spend_name: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginTop: 5.5,
    },

    spend_info_container : {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },

    spend_info_text: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginLeft: 3
    },

    income_value: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginTop: 5.5,
    },

    income_spend: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginTop: 5.5,
        marginLeft: wp('1%')
    },

    income_sub: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginTop: 5.5,
        marginLeft: wp('2%')
    }
});

export default styles;