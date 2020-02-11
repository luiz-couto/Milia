import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    background:{

        width: wp('100%'),
        height: hp('100%'),
        position:'absolute',        

    },

    header: {
        width: wp('81%'),
        backgroundColor: 'rgb(247, 212, 15)',
    },
});

export default styles;