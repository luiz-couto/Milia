import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    modal_container: {
        borderWidth: 3,
    },

    add_icon: {
        marginTop: hp('75%'),
        marginLeft: wp('72%'),
        width: wp('20%'),
        position: 'absolute',
    },

    page_container: {
        backgroundColor: 'rgb(255,255,255)'
    }
});

export default styles;