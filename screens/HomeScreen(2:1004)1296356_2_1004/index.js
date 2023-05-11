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
      <View style={styles.View_2_1005} />
      <View style={styles.View_2_1006} />
      <View source={{
      uri: "null"
    }} style={styles.View_2_1007} />
      <View style={styles.View_2_1008}>
        <Text style={styles.Text_2_1008}>Adj. to be indecisive about</Text>
      </View>
      <View style={styles.View_2_1009}>
        <Text style={styles.Text_2_1009}>
          Similar: shade, eclipse, magnanimity
        </Text>
      </View>
      <View style={styles.View_2_1010}>
        <Text style={styles.Text_2_1010}>
          Opposite: unveil, clear, loquacious, clear
        </Text>
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_2_1011} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_977"))}>
        <Text style={styles.Text_2_1011}>Tap to add a language</Text>
      </TouchableOpacity>
      <View style={styles.View_2_1012}>
        <Text style={styles.Text_2_1012}>4/10</Text>
      </View>
      <View style={styles.View_2_1013}>
        <Text style={styles.Text_2_1013}>Lesson 1</Text>
      </View>
      <TouchableOpacity style={styles.TouchableOpacity_2_1014} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_868"))}>
        <Text style={styles.Text_2_1014}>
          The success of the new product launch overshadowed the poor sales
          figures.
        </Text>
      </TouchableOpacity>
      <View style={styles.View_2_1015} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14723455-4871-4d5a-b62c-0d29f244e5ca"
    }} style={styles.TouchableOpacity_2_1016} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_906"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ee1c83c-1621-4d87-a4da-5baee09aa375"
    }} style={styles.ImageBackground_2_1017} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/863226f4-dc67-4df9-80a6-e04b3b1e16ff"
    }} style={styles.TouchableOpacity_2_1019} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_883"))} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aed26edc-1d47-4bb6-95e7-4d5fd6449c8e"
    }} style={styles.TouchableOpacity_2_1021} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_888"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f117a181-44a7-476e-b0b3-4d7e8a0a1867"
    }} style={styles.ImageBackground_2_1023} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29973ada-3ab7-4f6b-9d7d-394bd8419680"
    }} style={styles.ImageBackground_2_1024} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc900cd4-2d1a-44cf-afb8-81d789d9be9a"
    }} style={styles.TouchableOpacity_2_1025} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_861"))} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c443235-0773-45a5-bde5-487813cd358e"
    }} style={styles.TouchableOpacity_2_1026} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_2201"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/367455f2-fe7f-42ea-883c-5b2e9b6d3cf0"
    }} style={styles.ImageBackground_2_1027} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b77f1f06-416a-4030-8a02-2a141910afa6"
    }} style={styles.TouchableOpacity_2_1028} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1470"))} />
      <View style={styles.View_2_1029}>
        <Text style={styles.Text_2_1029}>Home</Text>
      </View>
      <View style={styles.View_2_1030}>
        <Text style={styles.Text_2_1030}>Practice</Text>
      </View>
      <View style={styles.View_2_1031}>
        <Text style={styles.Text_2_1031}>Café</Text>
      </View>
      <View style={styles.View_2_1032}>
        <Text style={styles.Text_2_1032}>impermeable</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef5462e9-d9c2-41b2-a37e-3eca316a0d45"
    }} style={styles.ImageBackground_2_1033} />
      <View style={styles.View_2_1034}>
        <View style={styles.View_I2_1034_10_2}>
          <View style={styles.View_I2_1034_10_3}>
            <Text style={styles.Text_I2_1034_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_1034_10_4}>
          <View style={styles.View_I2_1034_10_5}>
            <View style={styles.View_I2_1034_10_6}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/514b716a-60db-403b-b231-c94e0c676265"
            }} style={styles.ImageBackground_I2_1034_10_7} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7d9a7ca-81f4-4c63-8be8-46c00f114b72"
            }} style={styles.ImageBackground_I2_1034_10_10} />
            </View>
            <View style={styles.View_I2_1034_10_11} />
          </View>
          <View style={styles.View_I2_1034_10_12}>
            <View style={styles.View_I2_1034_10_13} />
            <View style={styles.View_I2_1034_10_14} />
            <View style={styles.View_I2_1034_10_15} />
            <View style={styles.View_I2_1034_10_16} />
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ced19d0-2242-48d2-90ea-054db1fc332a"
        }} style={styles.ImageBackground_I2_1034_10_17} />
        </View>
      </View>
      <View style={styles.View_2_1035}>
        <Text style={styles.Text_2_1035}>GRE Vocabulary</Text>
      </View>
      <View style={styles.View_2_1036} />
      <View style={styles.View_2_1037} />
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/050fdfc5-9456-4e64-a027-c2856d1b73e6"
    }} style={styles.TouchableOpacity_2_1038} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_981"))} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3dadc356-f6ff-4dd3-a3b5-b083bcb5f792"
    }} style={styles.ImageBackground_2_1041} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("115%")
  },
  View_2_1005: {
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
  View_2_1006: {
    width: wp("90%"),
    height: hp("58%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 226, 104, 1)"
  },
  View_2_1007: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%")
  },
  View_2_1008: {
    width: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_2_1008: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1009: {
    width: wp("79%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("93%"),
    justifyContent: "flex-start"
  },
  Text_2_1009: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1010: {
    width: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("96%"),
    justifyContent: "flex-start"
  },
  Text_2_1010: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1011: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("100%"),
    justifyContent: "flex-start"
  },
  Text_2_1011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1012: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_2_1012: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1013: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_1013: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_1014: {
    width: wp("81%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("87%"),
    justifyContent: "flex-start"
  },
  Text_2_1014: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "276",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1015: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("77%")
  },
  TouchableOpacity_2_1016: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_1017: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  TouchableOpacity_2_1019: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  TouchableOpacity_2_1021: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_1023: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_2_1024: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  TouchableOpacity_2_1025: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("78%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  TouchableOpacity_2_1026: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_2_1027: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  TouchableOpacity_2_1028: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_2_1029: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1029: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1030: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1030: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1031: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1031: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1032: {
    width: wp("64%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_2_1032: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1033: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_1034: {
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
  View_I2_1034_10_2: {
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
  View_I2_1034_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1034_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_1034_10_4: {
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
  View_I2_1034_10_5: {
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
  View_I2_1034_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1034_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1034_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_1034_10_11: {
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
  View_I2_1034_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1034_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1034_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1034_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1034_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_1034_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_1035: {
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
  Text_2_1035: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1036: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("15%"),
    backgroundColor: "rgba(138, 136, 136, 1)"
  },
  View_2_1037: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_2_1038: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_2_1041: {
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