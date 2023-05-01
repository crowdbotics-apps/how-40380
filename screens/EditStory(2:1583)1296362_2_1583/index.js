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
      <View style={styles.View_2_1584}>
        <Text style={styles.Text_2_1584}>Rythm of the Streets</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02a01489-4c4a-4003-97b0-d82dc58d30e6"
        }}
        style={styles.ImageBackground_2_1585}
      />
      <View style={styles.View_2_1586}>
        <Text style={styles.Text_2_1586}>Delete</Text>
      </View>
      <View style={styles.View_2_1587}>
        <Text style={styles.Text_2_1587}>Edit Title</Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fc3c04b-6f43-4f9a-8fd9-3fbfa31d51a4"
        }}
        style={styles.TouchableOpacity_2_1588}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1524"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f5f5e54-06fc-42a3-b4b4-e5b6cb18d1b0"
        }}
        style={styles.TouchableOpacity_2_1591}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1492"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1593}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1524"))
        }
      />
      <View style={styles.View_2_1594}>
        <Text style={styles.Text_2_1594}>Save</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(48, 48, 48, 1)" },
  View_2: { height: hp("100%") },
  View_2_1584: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_2_1584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1585: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("52%")
  },
  View_2_1586: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2_1586: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1587: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_2_1587: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1588: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("7%")
  },
  TouchableOpacity_2_1591: {
    width: wp("8%"),
    height: hp("14%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  TouchableOpacity_2_1593: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("60%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1594: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_2_1594: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
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
