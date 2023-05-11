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
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fefdbccc-0765-46be-95d3-710ae6ef4ac3"
    }} style={styles.TouchableOpacity_2_1564} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1492"))} />
      <View style={styles.View_2_1567}>
        <Text style={styles.Text_2_1567}>Create Story</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7a64363f-af22-4381-b41e-6e9b5ffdc644"
    }} style={styles.ImageBackground_2_1568} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdb00785-da7c-4f9e-8eb7-0109e40f0663"
    }} style={styles.ImageBackground_2_1569} />
      <TouchableOpacity style={styles.TouchableOpacity_2_1570} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1524"))} />
      <View style={styles.View_2_1571}>
        <Text style={styles.Text_2_1571}>Let’s Go!</Text>
      </View>
      <View style={styles.View_2_1572} />
      <View style={styles.View_2_1573} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd01edd5-5fa6-4285-a3a2-5d6a0944fd3c"
    }} style={styles.ImageBackground_2_1574} />
      <View style={styles.View_2_1576}>
        <Text style={styles.Text_2_1576}>Theme:</Text>
      </View>
      <View style={styles.View_2_1577}>
        <Text style={styles.Text_2_1577}>Sci-Fi</Text>
      </View>
      <View style={styles.View_2_1578}>
        <Text style={styles.Text_2_1578}>Medium</Text>
      </View>
      <View style={styles.View_2_1579}>
        <Text style={styles.Text_2_1579}>Difficulty:</Text>
      </View>
      <View style={styles.View_2_1580} />
      <View style={styles.View_2_1581}>
        <Text style={styles.Text_2_1581}>Type a word</Text>
      </View>
      <View style={styles.View_2_1582}>
        <Text style={styles.Text_2_1582}>loquacious</Text>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(48, 48, 48, 1)"
  },
  View_2: {
    height: hp("100%")
  },
  TouchableOpacity_2_1564: {
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
  View_2_1567: {
    width: wp("52%"),
    minWidth: wp("52%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_1567: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1568: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("71%")
  },
  ImageBackground_2_1569: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("77%")
  },
  TouchableOpacity_2_1570: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("83%"),
    backgroundColor: "rgba(19, 18, 19, 1)",
    opacity: 0.949999988079071
  },
  View_2_1571: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("84%"),
    justifyContent: "flex-start"
  },
  Text_2_1571: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1572: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.949999988079071
  },
  View_2_1573: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.949999988079071
  },
  ImageBackground_2_1574: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  View_2_1576: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_2_1576: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1577: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_2_1577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1578: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_2_1578: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1579: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_1579: {
    color: "rgba(184, 184, 184, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1580: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("49%"),
    minHeight: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("98%"),
    top: hp("20%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_2_1581: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_1581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1582: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_1582: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
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