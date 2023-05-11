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
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/414c297f-dca4-48e8-8bd3-969509e2dcad"
    }} style={styles.TouchableOpacity_2_2369} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2389"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b94d6aa-53da-47d8-8145-56d2e494eae6"
    }} style={styles.ImageBackground_2_2370} />
      <View style={styles.View_2_2371}>
        <Text style={styles.Text_2_2371}>General Email</Text>
      </View>
      <View style={styles.View_2_2372}>
        <Text style={styles.Text_2_2372}>skip</Text>
      </View>
      <View style={styles.View_2_2373}>
        <Text style={styles.Text_2_2373}>Login or Sign up</Text>
      </View>
      <View style={styles.View_2_2374}>
        <Text style={styles.Text_2_2374}>Google Facebook Apple</Text>
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
  TouchableOpacity_2_2369: {
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
  ImageBackground_2_2370: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_2_2371: {
    width: wp("68%"),
    minWidth: wp("68%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("36%"),
    justifyContent: "flex-start"
  },
  Text_2_2371: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2372: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_2_2372: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2373: {
    width: wp("80%"),
    minWidth: wp("80%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_2373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2374: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_2_2374: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
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