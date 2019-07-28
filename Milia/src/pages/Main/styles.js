import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    background:{

        width: wp('100%'),
        height: hp('100%'),
        position:'absolute',        

    },

    start_button: {

        marginTop: hp('37%'),
        marginLeft: wp('29%'),
        borderWidth: 3,
        borderRadius: 10,
        borderColor: 'green',
        alignItems: 'center',
        width: wp('41.7%'),

    },

    button_text: {
        
        color: 'green',
        fontSize: hp('3.7%'),
        padding: 8,

    },
    
    logo:{

        width: wp('80%'),
        marginLeft: wp('10%'),
        marginTop: hp('10%'),

    }

});

export default styles;