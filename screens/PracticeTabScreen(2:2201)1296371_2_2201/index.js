import React from "react";
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { getNavigationScreen } from "@screens";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_2_2202} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5865c995-58ee-4e87-90d3-c873404a6101"
    }} style={styles.ImageBackground_2_2203} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2025be9-573c-4d8d-b896-6f2e2a6dd7af"
    }} style={styles.TouchableOpacity_2_2204} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1004"))} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0144ec38-ea39-4068-ac96-de6fb594ffd2"
    }} style={styles.TouchableOpacity_2_2205} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1470"))} />
      <View style={styles.View_2_2206}>
        <Text style={styles.Text_2_2206}>Home</Text>
      </View>
      <View style={styles.View_2_2207}>
        <Text style={styles.Text_2_2207}>Practice</Text>
      </View>
      <View style={styles.View_2_2208}>
        <Text style={styles.Text_2_2208}>Café</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf59eb3c-5063-4660-835d-a244610736cc"
    }} style={styles.ImageBackground_2_2209} />
      <View style={styles.View_2_2210}>
        <View style={styles.View_2_2211}>
          <Text style={styles.Text_2_2211}>18/20 words</Text>
        </View>
        <View style={styles.View_2_2212}>
          <Text style={styles.Text_2_2212}>Practice 1</Text>
        </View>
        <View style={styles.View_2_2213}>
          <View style={styles.View_2_2214} />
          <View style={styles.View_2_2215} />
        </View>
      </View>
      <View style={styles.View_2_2216}>
        <Text style={styles.Text_2_2216}>5/20 words</Text>
      </View>
      <View style={styles.View_2_2217}>
        <Text style={styles.Text_2_2217}>Practice 2</Text>
      </View>
      <View style={styles.View_2_2218}>
        <View style={styles.View_2_2219} />
        <View style={styles.View_2_2220} />
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32f478bd-a477-49cf-8d40-19b05d6dd4f6"
    }} style={styles.ImageBackground_2_2221} />
      <View style={styles.View_2_2222}>
        <Text style={styles.Text_2_2222}>5/20 words</Text>
      </View>
      <View style={styles.View_2_2223}>
        <Text style={styles.Text_2_2223}>Practice 3</Text>
      </View>
      <View style={styles.View_2_2224}>
        <View style={styles.View_2_2225} />
        <View style={styles.View_2_2226} />
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_2_2341} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2169"))} />
      <View style={styles.View_2_2342}>
        <Text style={styles.Text_2_2342}>Create Set</Text>
      </View>
      <View style={styles.View_2_2227}>
        <View style={styles.View_I2_2227_10_2}>
          <View style={styles.View_I2_2227_10_3}>
            <Text style={styles.Text_I2_2227_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_2227_10_4}>
          <View style={styles.View_I2_2227_10_5}>
            <View style={styles.View_I2_2227_10_6}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a774949b-991e-4751-bffe-24d19d5bdc33"
            }} style={styles.ImageBackground_I2_2227_10_7} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea65e043-5a7d-43c7-a200-77aabf3bed68"
            }} style={styles.ImageBackground_I2_2227_10_10} />
            </View>
            <View style={styles.View_I2_2227_10_11} />
          </View>
          <View style={styles.View_I2_2227_10_12}>
            <View style={styles.View_I2_2227_10_13} />
            <View style={styles.View_I2_2227_10_14} />
            <View style={styles.View_I2_2227_10_15} />
            <View style={styles.View_I2_2227_10_16} />
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69a111c7-debf-4715-85df-a521df40d1de"
        }} style={styles.ImageBackground_I2_2227_10_17} />
        </View>
      </View>
      <View style={styles.View_2_2228}>
        <Text style={styles.Text_2_2228}>GRE Vocabulary Practice</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35ed3466-0110-4555-ac8c-623a5ea5c229"
    }} style={styles.ImageBackground_2_2229} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_2_2202: {
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
  ImageBackground_2_2203: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_2_2204: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  TouchableOpacity_2_2205: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_2_2206: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_2206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2207: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_2207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2208: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_2208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2209: {
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
  View_2_2210: {
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
  View_2_2211: {
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
  Text_2_2211: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2212: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2212: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2213: {
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
  View_2_2214: {
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
  View_2_2215: {
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
  View_2_2216: {
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
  Text_2_2216: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2217: {
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
  Text_2_2217: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2218: {
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
  View_2_2219: {
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
  View_2_2220: {
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
  ImageBackground_2_2221: {
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
  View_2_2222: {
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
  Text_2_2222: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2223: {
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
  Text_2_2223: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2224: {
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
  View_2_2225: {
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
  View_2_2226: {
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
  TouchableOpacity_2_2341: {
    width: wp("42%"),
    minWidth: wp("42%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("95%"),
    backgroundColor: "rgba(138, 132, 138, 1)",
    opacity: 0.949999988079071
  },
  View_2_2342: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_2_2342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2227: {
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
  View_I2_2227_10_2: {
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
  View_I2_2227_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_2227_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_2227_10_4: {
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
  View_I2_2227_10_5: {
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
  View_I2_2227_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2227_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2227_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_2227_10_11: {
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
  View_I2_2227_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2227_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2227_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2227_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_2227_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_2227_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_2228: {
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
  Text_2_2228: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2229: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);