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
      <View style={styles.View_2_1471} />
      <View style={styles.View_2_1472} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5c30d9f-5e25-4087-95cb-d1fe2e0e5f33"
    }} style={styles.TouchableOpacity_2_1473} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2201"))} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/318db7dc-870d-40b7-bc6d-969e50fde5c3"
    }} style={styles.TouchableOpacity_2_1474} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1004"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2efc06f-85da-4f0b-bdfd-2fe67bd8064e"
    }} style={styles.ImageBackground_2_1475} />
      <View style={styles.View_2_1476}>
        <Text style={styles.Text_2_1476}>Home</Text>
      </View>
      <View style={styles.View_2_1477}>
        <Text style={styles.Text_2_1477}>Practice</Text>
      </View>
      <View style={styles.View_2_1478}>
        <Text style={styles.Text_2_1478}>Café</Text>
      </View>
      <View style={styles.View_2_1479} />
      <View style={styles.View_2_1480}>
        <Text style={styles.Text_2_1480}>Short Stories</Text>
      </View>
      <View style={styles.View_2_1481}>
        <Text style={styles.Text_2_1481}>Rap/Hip-Hop</Text>
      </View>
      <View style={styles.View_2_1482}>
        <Text style={styles.Text_2_1482}>Welcome to Word Café</Text>
      </View>
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df6ac08d-74cf-46db-ab88-4cd250b6826e"
    }} style={styles.TouchableOpacity_2_1483} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1492"))} />
      <View style={styles.View_2_1486}>
        <Text style={styles.Text_2_1486}>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </Text>
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_2_1487} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1492"))} />
      <View style={styles.View_2_1488}>
        <Text style={styles.Text_2_1488}>Okay</Text>
      </View>
      <View style={styles.View_2_1489}>
        <View style={styles.View_I2_1489_10_2}>
          <View style={styles.View_I2_1489_10_3}>
            <Text style={styles.Text_I2_1489_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_1489_10_4}>
          <View style={styles.View_I2_1489_10_5}>
            <View style={styles.View_I2_1489_10_6}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09771a07-f022-4289-89e2-df8d08c9e7b7"
            }} style={styles.ImageBackground_I2_1489_10_7} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd9e36ba-a5fa-4dce-8fd6-cc55e165360d"
            }} style={styles.ImageBackground_I2_1489_10_10} />
            </View>
            <View style={styles.View_I2_1489_10_11} />
          </View>
          <View style={styles.View_I2_1489_10_12}>
            <View style={styles.View_I2_1489_10_13} />
            <View style={styles.View_I2_1489_10_14} />
            <View style={styles.View_I2_1489_10_15} />
            <View style={styles.View_I2_1489_10_16} />
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f82b77-3ede-4908-ae1d-c88ffba42101"
        }} style={styles.ImageBackground_I2_1489_10_17} />
        </View>
      </View>
      <View style={styles.View_2_1490}>
        <Text style={styles.Text_2_1490}>GRE Café</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6eed4c3-7c28-4087-aaa2-2069edb1a1ff"
    }} style={styles.ImageBackground_2_1491} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_2_1471: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("81%"),
    minHeight: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("22%"),
    backgroundColor: "rgba(43, 43, 43, 1)"
  },
  View_2_1472: {
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
  TouchableOpacity_2_1473: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_2_1474: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_1475: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_2_1476: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1476: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1477: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1477: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1478: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1478: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1479: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("14%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1480: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_1480: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1481: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_1481: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1482: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_1482: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1483: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("23%")
  },
  View_2_1486: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_2_1486: {
    color: "rgba(255, 244, 244, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1487: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("89%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1488: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("90%"),
    justifyContent: "flex-start"
  },
  Text_2_1488: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1489: {
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
  View_I2_1489_10_2: {
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
  View_I2_1489_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1489_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_1489_10_4: {
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
  View_I2_1489_10_5: {
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
  View_I2_1489_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1489_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1489_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_1489_10_11: {
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
  View_I2_1489_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1489_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1489_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1489_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1489_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_1489_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_1490: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_1490: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1491: {
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