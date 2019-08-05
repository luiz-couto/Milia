import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    modal_container: {
        borderWidth: 3,
    },

    add_icon: {
        marginTop: hp('48%'),
        marginLeft: wp('70%'),
        width: wp('20%'),
    }

});

export default styles;