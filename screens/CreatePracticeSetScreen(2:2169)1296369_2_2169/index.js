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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0966d1cf-14c6-458e-aead-956888fc3874"
        }}
        style={styles.ImageBackground_2_2170}
      />
      <View style={styles.View_2_2173}>
        <Text style={styles.Text_2_2173}>Create Practice Set</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_2174}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2193"))
        }
      />
      <View style={styles.View_2_2175}>
        <Text style={styles.Text_2_2175}>Create</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3cbe80a-ce7c-448b-ad0b-e63cb7741bc0"
        }}
        style={styles.ImageBackground_2_2176}
      />
      <View style={styles.View_2_2177}>
        <Text style={styles.Text_2_2177}>Title :</Text>
      </View>
      <View style={styles.View_2_2178}>
        <Text style={styles.Text_2_2178}>Custom Set 1</Text>
      </View>
      <View style={styles.View_2_2179} />
      <View style={styles.View_2_2180}>
        <Text style={styles.Text_2_2180}>pedes</Text>
      </View>
      <View style={styles.View_2_2181}>
        <View style={styles.View_2_2182}>
          <Text style={styles.Text_2_2182}>pedestrian</Text>
        </View>
      </View>
      <View style={styles.View_2_2183}>
        <View style={styles.View_2_2184}>
          <Text style={styles.Text_2_2184}>(noun) talkative</Text>
        </View>
      </View>
      <View style={styles.View_2_2185}>
        <View style={styles.View_2_2186}>
          <Text style={styles.Text_2_2186}>(adjective) boring</Text>
        </View>
      </View>
      <View style={styles.View_2_2187}>
        <View style={styles.View_2_2188}>
          <Text style={styles.Text_2_2188}>pedestrian</Text>
        </View>
      </View>
      <View style={styles.View_2_2189} />
      <View style={styles.View_2_2190}>
        <Text style={styles.Text_2_2190}>awesome</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b83c7923-66b1-459d-bc0f-c8f896c25c7f"
        }}
        style={styles.ImageBackground_2_2191}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(50, 50, 50, 1)" },
  View_2: { height: hp("101%") },
  ImageBackground_2_2170: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("4%")
  },
  View_2_2173: {
    width: wp("74%"),
    minWidth: wp("74%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_2173: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_2174: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("82%"),
    backgroundColor: "rgba(19, 18, 19, 1)",
    opacity: 0.949999988079071
  },
  View_2_2175: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_2_2175: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2176: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("17%")
  },
  View_2_2177: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_2_2177: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2178: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_2_2178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2179: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.949999988079071
  },
  View_2_2180: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_2_2180: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2181: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("25%")
  },
  View_2_2182: {
    width: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2182: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2183: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("27%")
  },
  View_2_2184: {
    width: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2184: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2185: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("33%")
  },
  View_2_2186: {
    width: wp("27%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2186: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "200",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2187: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("31%")
  },
  View_2_2188: {
    width: wp("23%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2188: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2189: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.949999988079071
  },
  View_2_2190: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_2_2190: {
    color: "rgba(1, 1, 1, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2191: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("21%"),
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
