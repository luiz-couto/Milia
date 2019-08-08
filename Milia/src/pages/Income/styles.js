import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    modal_container: {
        borderWidth: 3,
    },

    add_icon: {
        //marginTop: hp('50%'),
        //marginLeft: wp('72%'),
        width: wp('20%'),
        left: wp('72%'),
        top: hp('40%')
        //position: 'absolute',
    },

    page_container: {
        backgroundColor: 'rgb(255,255,255)'
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
        marginTop: hp('75%'),
        flexDirection: 'row',
        position: 'absolute',
    },

    total_text: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: 'rgba(0,0,0,0.66)',
        marginTop: 6.5,
        marginLeft: 8.5,
    },

    total_value: {
        fontFamily: 'Jersey M54',
        fontSize: hp('2.7%'),
        color: '#1B9E2D',
        marginTop: 5.5,
        marginLeft: wp('30%')
    }

    
});

export default styles;