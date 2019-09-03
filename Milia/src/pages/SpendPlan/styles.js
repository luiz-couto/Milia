import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    background:{

        width: wp('100%'),
        height: hp('100%'),
        position:'absolute',        

    },

    add_container: {
        padding: 12,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: 'rgb(8, 140, 196)',
        borderRadius: 8,
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('5%%'),
        flexDirection: 'row',
        marginBottom: 15
    },

    add_icon: {
        //marginTop: hp('4.3%'),
        marginLeft: wp('28%'),
        width: wp('20%'),
    },
    
});

export default styles;