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
      <View style={styles.View_2_869} />
      <View style={styles.View_2_870}>
        <Text style={styles.Text_2_870}>(adj.) to be indecisive about</Text>
      </View>
      <View style={styles.View_2_871}>
        <Text style={styles.Text_2_871}>
          The success of the new product launch overshadowed the poor sales
          figures.
        </Text>
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f0a0eb4-cd61-419c-87c4-befb54e072af"
        }}
        style={styles.TouchableOpacity_2_872}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_881"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0132c317-2d6e-42e9-897f-017ab1bda4d3"
        }}
        style={styles.TouchableOpacity_2_873}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_881"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/600efe59-92f5-4249-818a-07a8f7f91b46"
        }}
        style={styles.TouchableOpacity_2_874}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_881"))
        }
      />
      <View style={styles.View_2_875}>
        <Text style={styles.Text_2_875}>eclipse</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/591377a1-e16f-4e13-9b24-bc0c3da319cc"
        }}
        style={styles.ImageBackground_2_876}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6ecc862-2064-4688-a506-7062c132867a"
        }}
        style={styles.TouchableOpacity_2_879}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1004"))
        }
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_869: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(39, 39, 39, 1)"
  },
  View_2_870: {
    width: wp("84%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_2_870: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_871: {
    width: wp("81%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_2_871: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "276",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_872: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("25%")
  },
  TouchableOpacity_2_873: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("25%")
  },
  TouchableOpacity_2_874: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("25%")
  },
  View_2_875: {
    width: wp("51%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_2_875: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_876: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  TouchableOpacity_2_879: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
