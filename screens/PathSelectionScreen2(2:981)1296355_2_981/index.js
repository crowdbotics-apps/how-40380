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
      <View style={styles.View_2_982}>
        <Text style={styles.Text_2_982}>Preparing for a test</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/464dae97-ddc2-461a-a117-60f5c3defaf8"
    }} style={styles.ImageBackground_2_983} />
      <View style={styles.View_2_984} />
      <View style={styles.View_2_985} />
      <View style={styles.View_2_986} />
      <View style={styles.View_2_987} />
      <View style={styles.View_2_988} />
      <View style={styles.View_2_989}>
        <Text style={styles.Text_2_989}>GRE</Text>
      </View>
      <View style={styles.View_2_990}>
        <Text style={styles.Text_2_990}>IELTS</Text>
      </View>
      <View style={styles.View_2_991}>
        <Text style={styles.Text_2_991}>TOEFL</Text>
      </View>
      <View style={styles.View_2_992}>
        <Text style={styles.Text_2_992}>수능</Text>
      </View>
      <View style={styles.View_2_993}>
        <Text style={styles.Text_2_993}>SAT</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/372ae2c4-2930-411e-a9db-43626d58b879"
    }} style={styles.ImageBackground_2_994} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a728b049-186e-43f7-aaa1-7517873cf263"
    }} style={styles.ImageBackground_2_995} />
      <View style={styles.View_2_996}>
        <Text style={styles.Text_2_996}>Learning new words</Text>
      </View>
      <View style={styles.View_2_997} />
      <View style={styles.View_2_998} />
      <View style={styles.View_2_999} />
      <View style={styles.View_2_1000}>
        <Text style={styles.Text_2_1000}>Basic</Text>
      </View>
      <View style={styles.View_2_1001}>
        <Text style={styles.Text_2_1001}>Medium</Text>
      </View>
      <View style={styles.View_2_1002}>
        <Text style={styles.Text_2_1002}>Advanced</Text>
      </View>
      <View style={styles.View_2_1003}>
        <Text style={styles.Text_2_1003}>
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
  View_2_982: {
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
  Text_2_982: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_983: {
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
  View_2_984: {
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
  View_2_985: {
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
  View_2_986: {
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
  View_2_987: {
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
  View_2_988: {
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
  View_2_989: {
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
  Text_2_989: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_990: {
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
  Text_2_990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_991: {
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
  Text_2_991: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_992: {
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
  Text_2_992: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_993: {
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
  Text_2_993: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_994: {
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
  ImageBackground_2_995: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_2_996: {
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
  Text_2_996: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_997: {
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
  View_2_998: {
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
  View_2_999: {
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
  View_2_1000: {
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
  Text_2_1000: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1001: {
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
  Text_2_1001: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1002: {
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
  Text_2_1002: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1003: {
    width: wp("82%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_1003: {
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