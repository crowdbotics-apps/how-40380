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
      <View style={styles.View_2_2390}>
        <Text style={styles.Text_2_2390}>Preparing for a test</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9448e389-e956-490a-bdb4-4379ffc6752a"
    }} style={styles.ImageBackground_2_2391} />
      <View style={styles.View_2_2392} />
      <View style={styles.View_2_2393} />
      <View style={styles.View_2_2394} />
      <View style={styles.View_2_2395} />
      <View style={styles.View_2_2396} />
      <View style={styles.View_2_2397}>
        <Text style={styles.Text_2_2397}>GRE</Text>
      </View>
      <View style={styles.View_2_2398}>
        <Text style={styles.Text_2_2398}>IELTS</Text>
      </View>
      <View style={styles.View_2_2399}>
        <Text style={styles.Text_2_2399}>TOEFL</Text>
      </View>
      <View style={styles.View_2_2400}>
        <Text style={styles.Text_2_2400}>수능</Text>
      </View>
      <View style={styles.View_2_2401}>
        <Text style={styles.Text_2_2401}>SAT</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8654e500-a778-465b-b90a-37e7f276d4d3"
    }} style={styles.ImageBackground_2_2402} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cf29d5a-6c35-4b50-95d8-8a6593579cf9"
    }} style={styles.TouchableOpacity_2_2403} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1004"))} />
      <View style={styles.View_2_2404}>
        <Text style={styles.Text_2_2404}>Learning new words</Text>
      </View>
      <View style={styles.View_2_2405} />
      <View style={styles.View_2_2406} />
      <View style={styles.View_2_2407} />
      <View style={styles.View_2_2408}>
        <Text style={styles.Text_2_2408}>Basic</Text>
      </View>
      <View style={styles.View_2_2409}>
        <Text style={styles.Text_2_2409}>Medium</Text>
      </View>
      <View style={styles.View_2_2410}>
        <Text style={styles.Text_2_2410}>Advanced</Text>
      </View>
      <View style={styles.View_2_2411}>
        <Text style={styles.Text_2_2411}>
          If you don’t know the level, select one now and you can always change
          in the settings.
        </Text>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_2_2390: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_2_2390: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2391: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("58%")
  },
  View_2_2392: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("23%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2393: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("23%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2394: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("33%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2395: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("33%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2396: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("44%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2397: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_2_2397: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2398: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_2_2398: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2399: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_2_2399: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2400: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_2_2400: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2401: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_2_2401: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2402: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("103%")
  },
  TouchableOpacity_2_2403: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_2_2404: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_2_2404: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2405: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("72%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2406: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("82%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2407: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("72%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2408: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_2408: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2409: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_2409: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2410: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_2_2410: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2411: {
    width: wp("82%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_2411: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "276",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);