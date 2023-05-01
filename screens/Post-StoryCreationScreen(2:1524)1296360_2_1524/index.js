import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2089730b-304e-4329-a6a7-6f4f844f9c76"
        }}
        style={styles.TouchableOpacity_2_1525}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2201"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2f95405-71e8-4b4f-bb01-69e24d5b67be"
        }}
        style={styles.TouchableOpacity_2_1526}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1004"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/204d9b40-f4ad-4537-957a-732d5594c96c"
        }}
        style={styles.ImageBackground_2_1527}
      />
      <View style={styles.View_2_1528}>
        <Text style={styles.Text_2_1528}>Home</Text>
      </View>
      <View style={styles.View_2_1529}>
        <Text style={styles.Text_2_1529}>Practice</Text>
      </View>
      <View style={styles.View_2_1530}>
        <Text style={styles.Text_2_1530}>Café</Text>
      </View>
      <View style={styles.View_2_1531} />
      <View style={styles.View_2_1532}>
        <Text style={styles.Text_2_1532}>Short Stories</Text>
      </View>
      <View style={styles.View_2_1533}>
        <Text style={styles.Text_2_1533}>Rap/Hip-Hop</Text>
      </View>
      <View style={styles.View_2_1534} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84490ccb-a8d6-4a7a-88b0-53e0d90668fb"
        }}
        style={styles.ImageBackground_2_1535}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d987175-9344-47e9-a1ee-edd1a1539ef8"
        }}
        style={styles.ImageBackground_2_1536}
      />
      <View style={styles.View_2_1537}>
        <Text style={styles.Text_2_1537}>Rhythm of the Streets</Text>
      </View>
      <View style={styles.View_2_1538}>
        <Text style={styles.Text_2_1538}>
          As a young boy growing up in the inner city, Jax was surrounded by the
          rhythm of the streets. He channeled his passion for music into
          rapping, using his lyrics to tell stories of struggle, triumph, and
          the realities of life on the streets.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6f66dc-6e2e-4725-90c6-046424fe4dfd"
        }}
        style={styles.ImageBackground_2_1539}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1497025a-3eb2-45bd-89c3-af9127c49397"
        }}
        style={styles.TouchableOpacity_2_1540}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1651"))
        }
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a372db5b-ff20-4eff-8016-7b37aca13518"
        }}
        style={styles.ImageBackground_2_1543}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0351f142-44ed-482b-8fde-3505714d358e"
        }}
        style={styles.TouchableOpacity_2_1544}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1646"))
        }
      />
      <View style={styles.View_2_1546}>
        <Text style={styles.Text_2_1546}>
          Genre:Biography Readability Score: 6/10
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b017c56-381a-485d-973c-5da3059e0227"
        }}
        style={styles.ImageBackground_2_1547}
      />
      <View style={styles.View_2_1548} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a82dafb7-a34c-48e3-8f7b-22b598d3c04c"
        }}
        style={styles.ImageBackground_2_1549}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d118adb-55a9-47da-b151-a0040bfa48c5"
        }}
        style={styles.ImageBackground_2_1550}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed578356-0031-43c6-8e03-454b20ed91ca"
        }}
        style={styles.ImageBackground_2_1553}
      />
      <View style={styles.View_2_1555}>
        <View style={styles.View_I2_1555_10_2}>
          <View style={styles.View_I2_1555_10_3}>
            <Text style={styles.Text_I2_1555_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_1555_10_4}>
          <View style={styles.View_I2_1555_10_5}>
            <View style={styles.View_I2_1555_10_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6ea90d7-2f4e-46d5-859b-549cc6ae27e9"
                }}
                style={styles.ImageBackground_I2_1555_10_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b531996c-560a-479b-b212-9996db27f65b"
                }}
                style={styles.ImageBackground_I2_1555_10_10}
              />
            </View>
            <View style={styles.View_I2_1555_10_11} />
          </View>
          <View style={styles.View_I2_1555_10_12}>
            <View style={styles.View_I2_1555_10_13} />
            <View style={styles.View_I2_1555_10_14} />
            <View style={styles.View_I2_1555_10_15} />
            <View style={styles.View_I2_1555_10_16} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b24b1b6-7bb3-4e82-8fd3-b00a474a85e4"
            }}
            style={styles.ImageBackground_I2_1555_10_17}
          />
        </View>
      </View>
      <View style={styles.View_2_1556}>
        <Text style={styles.Text_2_1556}>GRE Café</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3af20b5a-4e0c-4846-98d0-2b3f509fcb6a"
        }}
        style={styles.ImageBackground_2_1557}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff7195b5-6791-43ab-8220-fb128c84e3a4"
        }}
        style={styles.TouchableOpacity_2_1558}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1583"))
        }
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1559}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1563"))
        }
      />
      <View style={styles.View_2_1560}>
        <Text style={styles.Text_2_1560}>Create Story</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b1506dc-e0ce-44cd-94dd-add015164261"
        }}
        style={styles.ImageBackground_2_1561}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("115%") },
  TouchableOpacity_2_1525: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_2_1526: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_2_1527: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("107%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%")
  },
  View_2_1528: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1528: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1529: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1529: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1530: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("111%"),
    justifyContent: "flex-start"
  },
  Text_2_1530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "510",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1531: {
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
  View_2_1532: {
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
  Text_2_1532: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1533: {
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
  Text_2_1533: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1534: {
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
    opacity: 0
  },
  ImageBackground_2_1535: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("21%"),
    resizeMode: "cover"
  },
  ImageBackground_2_1536: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%")
  },
  View_2_1537: {
    width: wp("88%"),
    minWidth: wp("88%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_2_1537: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1538: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("62%"),
    justifyContent: "flex-start"
  },
  Text_2_1538: {
    color: "rgba(255, 244, 244, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1539: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  TouchableOpacity_2_1540: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_2_1543: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("47%")
  },
  TouchableOpacity_2_1544: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_2_1546: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_2_1546: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "510",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1547: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78%"),
    resizeMode: "cover"
  },
  View_2_1548: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99%"),
    top: hp("22%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  ImageBackground_2_1549: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("87%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_2_1550: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_2_1553: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  View_2_1555: {
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
  View_I2_1555_10_2: {
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
  View_I2_1555_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1555_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_1555_10_4: {
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
  View_I2_1555_10_5: {
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
  View_I2_1555_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1555_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1555_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_1555_10_11: {
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
  View_I2_1555_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1555_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1555_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1555_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1555_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_1555_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_1556: {
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
  Text_2_1556: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1557: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  TouchableOpacity_2_1558: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_2_1559: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("97%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_1560: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("99%"),
    justifyContent: "flex-start"
  },
  Text_2_1560: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1561: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
