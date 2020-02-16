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
        borderLeftColor: '#fd8888',
        
        borderRightWidth: 11,
        borderRightColor: 'transparent',
        
        borderBottomWidth: 11,
        borderBottomColor: 'transparent',

        borderTopWidth: 11,
        borderTopColor: '#fd8888'
    },

    income_container: {
        paddingLeft: 0,
        padding: 9,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },

    income_name: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginTop: 5.5,
        marginLeft: 4,
    },

    income_value: {
        fontFamily: 'Manjari-Bold',
        fontSize: hp('2.7%'),
        color: '#9da6a9',
        marginTop: 5.5,
        //marginLeft: wp('25%'),
        justifyContent: 'flex-end'

    }
});

export default styles;