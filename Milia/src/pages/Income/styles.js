import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    modal_container: {
        borderWidth: 3,
        height: hp('30%'),
        alignSelf: 'center',
    },

    add_icon: {
        marginBottom: hp('1.3%'),
        marginLeft: wp('28%'),
        width: wp('20%'),
    },

    page_container: {
        height: hp('100%'),
        //backgroundColor: '#f1f2f0'
    },

    total_container: {
        padding: 12,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderTopWidth:1,
        borderBottomWidth: 4,
        borderColor: 'green',
        borderRadius: 8,
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('58%'),
        flexDirection: 'row',
        position: 'absolute',
    },

    total_text: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: 'rgba(255,255,255,0.8)',
        marginTop: 6.5,
        marginLeft: 8.5,
    },

    total_value: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: '#1B9E2D',
        marginTop: 6.5,
        marginLeft: wp('30%')
    },

    header: {
        flexDirection:'row',
        width: wp('100%'),
        height: hp('14%'),
        backgroundColor: '#fd8888',
        
    },

    header_title: {
        fontFamily: 'GreatVibes-Regular',
        fontSize: hp('9%'),
        color: '#fd8888',
        marginTop: 25,
        marginLeft: 35,
    },

    add_container: {
        padding: 12,
        //borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#fd8888',
        //borderRadius: 8,
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('3%'),
        flexDirection: 'row',
        height: hp('8.4%'),
    },

    background:{

        width: wp('100%'),
        height: hp('100%'),
        position:'absolute',        

    },

    IN: {

        width: wp('40%'),
        height: hp('11%'),
        marginLeft: wp('30%'),
        marginTop: hp('1.5%')

    },

    
});

export default styles;