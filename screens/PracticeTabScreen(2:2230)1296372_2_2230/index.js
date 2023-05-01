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
      <View style={styles.View_2_2231} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d34b5abd-be1f-4309-b494-fc08604cd55d"
        }}
        style={styles.ImageBackground_2_2232}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2110564f-30c8-4829-ae05-2740f1d1dae8"
        }}
        style={styles.ImageBackground_2_2233}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d12bdad-5007-4c35-a881-d859ce0ccc05"
        }}
        style={styles.TouchableOpacity_2_2234}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1470"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_2235}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1004"))
        }
      >
        <Text style={styles.Text_2_2235}>Home</Text>
      </TouchableOpacity>
      <View style={styles.View_2_2236}>
        <Text style={styles.Text_2_2236}>Practice</Text>
      </View>
      <View style={styles.View_2_2237}>
        <Text style={styles.Text_2_2237}>Café</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71c8c1a0-8d37-411d-b743-a33818d5800a"
        }}
        style={styles.ImageBackground_2_2238}
      />
      <View style={styles.View_2_2239}>
        <View style={styles.View_2_2240}>
          <Text style={styles.Text_2_2240}>18/20 words</Text>
        </View>
        <View style={styles.View_2_2241}>
          <Text style={styles.Text_2_2241}>Custom Set 1</Text>
        </View>
        <View style={styles.View_2_2242}>
          <View style={styles.View_2_2243} />
          <View style={styles.View_2_2244} />
        </View>
      </View>
      <View style={styles.View_2_2245}>
        <Text style={styles.Text_2_2245}>5/20 words</Text>
      </View>
      <View style={styles.View_2_2246}>
        <Text style={styles.Text_2_2246}>Practice 1</Text>
      </View>
      <View style={styles.View_2_2247}>
        <View style={styles.View_2_2248} />
        <View style={styles.View_2_2249} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a08b2331-7a22-4a27-b95f-df2ae6745904"
        }}
        style={styles.ImageBackground_2_2250}
      />
      <View style={styles.View_2_2251}>
        <Text style={styles.Text_2_2251}>5/20 words</Text>
      </View>
      <View style={styles.View_2_2252}>
        <Text style={styles.Text_2_2252}>Practice 2</Text>
      </View>
      <View style={styles.View_2_2253}>
        <View style={styles.View_2_2254} />
        <View style={styles.View_2_2255} />
      </View>
      <View style={styles.View_2_2256}>
        <View style={styles.View_I2_2256_10_2}>
          <View style={styles.View_I2_2256_10_3}>
            <Text style={styles.Text_I2_2256_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_2256_10_4}>
          <View style={styles.View_I2_2256_10_5}>
            <View style={styles.View_I2_2256_10_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e25faed2-11d8-4cb6-bfca-4532be86249f"
                }}
                style={styles.ImageBackground_I2_2256_10_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8a00a12-55ef-4524-a78a-d8095bb23c4e"
                }}
                style={styles.ImageBackground_I2_2256_10_10}
              />
            </View>
            <View style={styles.View_I2_2256_10_11} />
          </View>
          <View style={styles.View_I2_2256_10_12}>
            <View style={styles.View_I2_2256_10_13} />
            <View style={styles.View_I2_2256_10_14} />
            <View style={styles.View_I2_2256_10_15} />
            <View style={styles.View_I2_2256_10_16} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b021476-5bd9-418a-9bbf-98ba66690c2f"
            }}
            style={styles.ImageBackground_I2_2256_10_17}
          />
        </View>
      </View>
      <View style={styles.View_2_2257}>
        <Text style={styles.Text_2_2257}>GRE Vocabulary Practice</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/882269b3-4f08-496b-9493-35801991dc2e"
        }}
        style={styles.ImageBackground_2_2258}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("115%") },
  View_2_2231: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105%"),
    backgroundColor: "rgba(252, 252, 252, 1)",
    opacity: 0.05999999865889549
  },
  ImageBackground_2_2232: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_2_2233: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  TouchableOpacity_2_2234: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  TouchableOpacity_2_2235: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_2235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2236: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_2236: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2237: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_2237: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2238: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("32%")
  },
  View_2_2239: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%")
  },
  View_2_2240: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_2240: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2241: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2241: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2242: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%")
  },
  View_2_2243: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_2244: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 143, 54, 1)"
  },
  View_2_2245: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_2_2245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2246: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_2_2246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2247: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("41%")
  },
  View_2_2248: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_2249: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 143, 54, 1)"
  },
  ImageBackground_2_2250: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("53%")
  },
  View_2_2251: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_2_2251: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2252: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("54%"),
    justifyContent: "flex-start"
  },
  Text_2_2252: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2253: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("62%")
  },
  View_2_2254: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_2255: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 143, 54, 1)"
  },
  View_2_2256: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_2256_10_2: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_2256_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_2256_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_2256_10_4: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_2256_10_5: {
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
  View_I2_2256_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2256_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2256_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_2256_10_11: {
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
  View_I2_2256_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2256_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2256_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2256_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2256_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_2256_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_2257: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2257: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2258: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
