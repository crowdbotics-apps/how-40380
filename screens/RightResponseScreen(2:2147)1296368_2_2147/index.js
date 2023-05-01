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
      <View style={styles.View_2_2148} />
      <View style={styles.View_2_2149}>
        <Text style={styles.Text_2_2149}>Next</Text>
      </View>
      <View style={styles.View_2_2150}>
        <Text style={styles.Text_2_2150}>(adjective) talkative</Text>
      </View>
      <View style={styles.View_2_2151}>
        <Text style={styles.Text_2_2151}>
          Similar: hesitate, waver, falter, stagger
        </Text>
      </View>
      <View style={styles.View_2_2152}>
        <Text style={styles.Text_2_2152}>
          &quot;I had for a time vacillated between teaching and
          journalism&quot;
        </Text>
      </View>
      <View style={styles.View_2_2153}>
        <Text style={styles.Text_2_2153}>mundane</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcfc9007-7e7b-4ef7-88b4-f46f2376c7bb"
        }}
        style={styles.ImageBackground_2_2154}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/110d2b2a-60f7-41c5-a49a-3dc38543cd82"
        }}
        style={styles.ImageBackground_2_2155}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/460625e2-70db-437e-b92a-c54c20fcd620"
        }}
        style={styles.ImageBackground_2_2156}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a806c097-601f-43d3-afd1-97d0d94852a5"
        }}
        style={styles.ImageBackground_2_2157}
      />
      <View style={styles.View_2_2158}>
        <Text style={styles.Text_2_2158}>우유부단한</Text>
      </View>
      <View style={styles.View_2_2159}>
        <Text style={styles.Text_2_2159}>You got it!</Text>
      </View>
      <View style={styles.View_2_2160} />
      <View style={styles.View_2_2161}>
        <Text style={styles.Text_2_2161}>20/20</Text>
      </View>
      <View style={styles.View_2_2162} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9157604a-0b80-4d1b-8f58-3b51a827a8c8"
        }}
        style={styles.TouchableOpacity_2_2163}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2201"))
        }
      />
      <View style={styles.View_2_2166} />
      <View style={styles.View_2_2167}>
        <Text style={styles.Text_2_2167}>Practice Set 1</Text>
      </View>
      <View style={styles.View_2_2168}>
        <View style={styles.View_I2_2168_10_2}>
          <View style={styles.View_I2_2168_10_3}>
            <Text style={styles.Text_I2_2168_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_2168_10_4}>
          <View style={styles.View_I2_2168_10_5}>
            <View style={styles.View_I2_2168_10_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0f62d40-af7f-4207-b6e9-6cf789a58124"
                }}
                style={styles.ImageBackground_I2_2168_10_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0aa34a64-4cf2-45c2-b59b-7db632bca1f6"
                }}
                style={styles.ImageBackground_I2_2168_10_10}
              />
            </View>
            <View style={styles.View_I2_2168_10_11} />
          </View>
          <View style={styles.View_I2_2168_10_12}>
            <View style={styles.View_I2_2168_10_13} />
            <View style={styles.View_I2_2168_10_14} />
            <View style={styles.View_I2_2168_10_15} />
            <View style={styles.View_I2_2168_10_16} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a35c2cf-b18a-4a08-bc35-7e08cc12b529"
            }}
            style={styles.ImageBackground_I2_2168_10_17}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(37, 36, 37, 1)" },
  View_2: { height: hp("115%") },
  View_2_2148: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.8399999737739563
  },
  View_2_2149: {
    width: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("107%"),
    justifyContent: "flex-start"
  },
  Text_2_2149: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2150: {
    width: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2_2150: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2151: {
    width: wp("83%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_2_2151: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "274",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2152: {
    width: wp("83%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_2_2152: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2153: {
    width: wp("44%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("75%"),
    justifyContent: "flex-start"
  },
  Text_2_2153: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2154: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_2_2155: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_2_2156: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  ImageBackground_2_2157: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%")
  },
  View_2_2158: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("83%"),
    justifyContent: "flex-start"
  },
  Text_2_2158: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2159: {
    width: wp("48%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_2159: {
    color: "rgba(235, 249, 237, 1)",
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2160: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("97%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_2161: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_2_2161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2162: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("97%"),
    backgroundColor: "rgba(66, 143, 54, 1)"
  },
  TouchableOpacity_2_2163: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("8%")
  },
  View_2_2166: {
    width: wp("102%"),
    minWidth: wp("102%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("22%"),
    backgroundColor: "rgba(216, 216, 216, 1)"
  },
  View_2_2167: {
    width: wp("58%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2167: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2168: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_2168_10_2: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_2168_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_2168_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_2168_10_4: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_2168_10_5: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  View_I2_2168_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2168_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2168_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_2168_10_11: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(76, 217, 100, 1)",
    borderWidth: 1
  },
  View_I2_2168_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2168_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2168_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2168_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2168_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_2168_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
