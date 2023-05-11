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
      <View style={styles.View_2_2378}>
        <Text style={styles.Text_2_2378}>noun.vocabulary learning app</Text>
      </View>
      <View style={styles.View_2_2379}>
        <Text style={styles.Text_2_2379}>
          Learning new words or for a test- GRE, SAT, IELTS/TOEFL, 수능, High on
          Words is here to make learning new words fun!
        </Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82c7c2ce-53fe-4902-a888-e38cc9edfe52"
    }} style={styles.ImageBackground_2_2380} />
      <View style={styles.View_2_2381}>
        <Text style={styles.Text_2_2381}>Similar: None</Text>
      </View>
      <View style={styles.View_2_2382}>
        <Text style={styles.Text_2_2382}>Opposite: Every other app</Text>
      </View>
      <View style={styles.View_2_2383}>
        <Text style={styles.Text_2_2383}>
          व्यक्ति/विषय को अति-प्रभावित करना
        </Text>
      </View>
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8072e20c-4746-490d-821e-5c08801c3871"
    }} style={styles.TouchableOpacity_2_2384} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2345"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1f799a1-1202-40fb-aa6d-93e8e1dcabd6"
    }} style={styles.ImageBackground_2_2385} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/90c16825-e5d9-4fdf-a4a3-f6ef41ddc526"
    }} style={styles.ImageBackground_2_2386} />
      <View style={styles.View_2_2387}>
        <Text style={styles.Text_2_2387}>High On Words (HOW)</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f319d01a-55bf-4ccc-8cb7-b177bbfd6ea4"
    }} style={styles.ImageBackground_2_2388} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_2_2378: {
    width: wp("83%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2378: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2379: {
    width: wp("87%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2379: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "276",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2380: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%")
  },
  View_2_2381: {
    width: wp("79%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2381: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2382: {
    width: wp("81%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2383: {
    width: wp("93%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_2383: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_2384: {
    width: wp("38%"),
    height: hp("20%"),
    top: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_2_2385: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  ImageBackground_2_2386: {
    width: wp("99%"),
    height: hp("70%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    resizeMode: "cover"
  },
  View_2_2387: {
    width: wp("83%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_2387: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_2388: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);