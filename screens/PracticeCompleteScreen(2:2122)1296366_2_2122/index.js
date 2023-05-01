import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_2123} />
      <View style={styles.View_2_2124} />
      <View style={styles.View_2_2125} />
      <View style={styles.View_2_2126}>
        <Text style={styles.Text_2_2126}>Practice 1 Complete!</Text>
      </View>
      <View style={styles.View_2_2127}>
        <Text style={styles.Text_2_2127}>You learnt 20 Words!</Text>
      </View>
      <View style={styles.View_2_2128} />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_2129}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2132"))
        }
      >
        <Text style={styles.Text_2_2129}>Practice Set 1 again!</Text>
      </TouchableOpacity>
      <View style={styles.View_2_2130} />
      <View style={styles.View_2_2131}>
        <Text style={styles.Text_2_2131}>Continue to Practice 2</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_2123: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("98%"),
    minHeight: hp("98%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(37, 36, 37, 1)"
  },
  View_2_2124: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("48%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_2125: {
    width: wp("64%"),
    minWidth: wp("64%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("48%"),
    backgroundColor: "rgba(66, 143, 54, 1)"
  },
  View_2_2126: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_2_2126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_2_2127: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_2127: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_2_2128: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("65%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8399999737739563
  },
  TouchableOpacity_2_2129: {
    width: wp("29%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_2_2129: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2130: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("66%"),
    backgroundColor: "rgba(125, 125, 125, 1)",
    opacity: 0.8399999737739563
  },
  View_2_2131: {
    width: wp("34%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_2_2131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
