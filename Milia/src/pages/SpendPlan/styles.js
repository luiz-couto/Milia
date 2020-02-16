import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
 
    background:{

        width: wp('100%'),
        height: hp('100%'),
        position:'absolute',        

    },

    page_container: {
        height: hp('100%'),
        //backgroundColor: '#f1f2f0'
    },

    add_container: {
        padding: 12,
        //borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: '#088cc4',
        //borderRadius: 8,
        width: wp('85%'),
        marginLeft: wp('7%'),
        marginTop: hp('3%'),
        flexDirection: 'row',
        height: hp('8.4%'),
    },

    add_icon: {
        marginBottom: hp('1.3%'),
        marginLeft: wp('28%'),
        width: wp('20%'),
    },

    modal_container: {
        borderWidth: 3,
        height: hp('30%'),
        alignSelf: 'center',
    },
    
});

export default styles;