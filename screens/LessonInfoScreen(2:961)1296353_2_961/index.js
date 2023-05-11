import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_2_962}>
        <Text style={styles.Text_2_962}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba6eccee-2fe9-4740-bd82-38441d163530"
    }} style={styles.ImageBackground_2_963} />
      <View style={styles.View_2_964}>
        <Text style={styles.Text_2_964}>Lesson 1</Text>
      </View>
      <View style={styles.View_2_965}>
        <Text style={styles.Text_2_965}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/540d00d8-4cc3-4277-8f85-9142a72b6f7f"
    }} style={styles.ImageBackground_2_966} />
      <View style={styles.View_2_967}>
        <Text style={styles.Text_2_967}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5a1ebfb-bc55-4754-a670-f1714ed95e4e"
    }} style={styles.ImageBackground_2_968} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fedeb553-8332-47d4-82c0-bb1c7d261bf5"
    }} style={styles.ImageBackground_2_969} />
      <View style={styles.View_2_971}>
        <Text style={styles.Text_2_971}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/902648a3-d020-457c-9d1b-676889b1c68e"
    }} style={styles.ImageBackground_2_972} />
      <View style={styles.View_2_973}>
        <Text style={styles.Text_2_973}>vacillate</Text>
      </View>
      <View style={styles.View_2_974}>
        <Text style={styles.Text_2_974}>ineffable</Text>
      </View>
      <View style={styles.View_2_975}>
        <Text style={styles.Text_2_975}>pontificate</Text>
      </View>
      <View style={styles.View_2_976}>
        <Text style={styles.Text_2_976}>lollapalooza</Text>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("100%")
  },
  View_2_962: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_2_962: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_963: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("33%")
  },
  View_2_964: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_964: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_965: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("42%"),
    justifyContent: "flex-start"
  },
  Text_2_965: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_966: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("48%")
  },
  View_2_967: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_2_967: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_968: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("63%")
  },
  ImageBackground_2_969: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_971: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("72%"),
    justifyContent: "flex-start"
  },
  Text_2_971: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_972: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("78%")
  },
  View_2_973: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_2_973: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_974: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_2_974: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_975: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_2_975: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_976: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_2_976: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
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