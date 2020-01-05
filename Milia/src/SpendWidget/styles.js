import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

let CIRCLE_RADIUS = 35;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    position: 'absolute',
    backgroundColor: "tomato",
    width: CIRCLE_RADIUS * 2,
    height: CIRCLE_RADIUS * 2,
    borderRadius: CIRCLE_RADIUS,
    marginLeft: 10,
    marginTop: 200,
  },
});

export default styles;