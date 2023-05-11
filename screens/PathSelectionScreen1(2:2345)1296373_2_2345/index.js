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
      <View style={styles.View_2_2346}>
        <Text style={styles.Text_2_2346}>Preparing for a test</Text>
      </View>
      <View style={styles.View_2_2347}>
        <Text style={styles.Text_2_2347}>Learning new words</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b7b37be-aa92-4d63-afc3-ed9c77e6bcd8"
    }} style={styles.ImageBackground_2_2348} />
      <TouchableOpacity style={styles.TouchableOpacity_2_2349} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2389"))} />
      <View style={styles.View_2_2350} />
      <View style={styles.View_2_2351} />
      <View style={styles.View_2_2352} />
      <View style={styles.View_2_2353} />
      <View style={styles.View_2_2354} />
      <View style={styles.View_2_2355} />
      <View style={styles.View_2_2356} />
      <View style={styles.View_2_2357}>
        <Text style={styles.Text_2_2357}>GRE</Text>
      </View>
      <View style={styles.View_2_2358}>
        <Text style={styles.Text_2_2358}>Basic</Text>
      </View>
      <View style={styles.View_2_2359}>
        <Text style={styles.Text_2_2359}>Medium</Text>
      </View>
      <View style={styles.View_2_2360}>
        <Text style={styles.Text_2_2360}>Advanced</Text>
      </View>
      <View style={styles.View_2_2361}>
        <Text style={styles.Text_2_2361}>IELTS</Text>
      </View>
      <View style={styles.View_2_2362}>
        <Text style={styles.Text_2_2362}>TOEFL</Text>
      </View>
      <View style={styles.View_2_2363}>
        <Text style={styles.Text_2_2363}>수능</Text>
      </View>
      <View style={styles.View_2_2364}>
        <Text style={styles.Text_2_2364}>SAT</Text>
      </View>
      <View style={styles.View_2_2365}>
        <Text style={styles.Text_2_2365}>
          If you don’t know the level, select one now and you can always change
          in the settings.
        </Text>
      </View>
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0126c3ce-b7fa-4c4e-a7ab-8289de4ca6e8"
    }} style={styles.TouchableOpacity_2_2366} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2389"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70f23215-b6b0-42c7-a2cc-bb6c5110990c"
    }} style={styles.ImageBackground_2_2367} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_2_2346: {
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
  Text_2_2346: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2347: {
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
  Text_2_2347: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2348: {
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
  TouchableOpacity_2_2349: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("23%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2350: {
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
  View_2_2351: {
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
  View_2_2352: {
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
  View_2_2353: {
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
  View_2_2354: {
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
  View_2_2355: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("83%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2356: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("72%"),
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 1
  },
  View_2_2357: {
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
  Text_2_2357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2358: {
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
  Text_2_2358: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2359: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_2359: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2360: {
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
  Text_2_2360: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2361: {
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
  Text_2_2361: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2362: {
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
  Text_2_2362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2363: {
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
  Text_2_2363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2364: {
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
  Text_2_2364: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2365: {
    width: wp("82%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_2365: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "276",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_2366: {
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
  ImageBackground_2_2367: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);