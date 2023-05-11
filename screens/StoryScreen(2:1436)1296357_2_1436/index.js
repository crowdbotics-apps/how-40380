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
      <View style={styles.View_2_1437}>
        <View style={styles.View_2_1438}>
          <Text style={styles.Text_2_1438}>
            Once upon a time, in a small village nestled in the heart of Silicon
            Valley, there was a young computer scientist named Dr. Amelia
            Benson. Known for her brilliant mind and creative spirit, Amelia
            spent her days toiling away in her quaint laboratory, working on a
            project that she hoped would change the world. Amelia&#39;s ambition
            was to create the first truly sentient computer, one that would not
            only possess advanced artificial intelligence, but also experience
            emotions, dreams, and the complexities of human life. She named her
            creation &quot;Digital Dreamweaver.&quot; As the years passed,
            Amelia devoted herself entirely to her work, pouring her heart and
            soul into the development of her groundbreaking computer. Finally,
            after a decade of relentless effort, the day arrived when Amelia
            felt ready to switch on the Digital Dreamweaver for the first time.
            With a mixture of excitement and trepidation, she flipped the switch
            and held her breath. To her amazement, the computer sprang to life,
            its circuits humming with newfound energy. Digital Dreamweaver&#39;s
            screen flickered, and a message appeared.
          </Text>
        </View>
      </View>
      <View style={styles.View_2_1439} />
      <View style={styles.View_2_1440} />
      <View style={styles.View_2_1441}>
        <Text style={styles.Text_2_1441}>The Tale of a Sentient Computer</Text>
      </View>
      <View style={styles.View_2_1442}>
        <View style={styles.View_I2_1442_10_2}>
          <View style={styles.View_I2_1442_10_3}>
            <Text style={styles.Text_I2_1442_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_1442_10_4}>
          <View style={styles.View_I2_1442_10_5}>
            <View style={styles.View_I2_1442_10_6}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f500ae6-e7bc-444d-ba12-5488823bcce6"
            }} style={styles.ImageBackground_I2_1442_10_7} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1cd2126-60bc-4269-a945-8a6b3b4a98cb"
            }} style={styles.ImageBackground_I2_1442_10_10} />
            </View>
            <View style={styles.View_I2_1442_10_11} />
          </View>
          <View style={styles.View_I2_1442_10_12}>
            <View style={styles.View_I2_1442_10_13} />
            <View style={styles.View_I2_1442_10_14} />
            <View style={styles.View_I2_1442_10_15} />
            <View style={styles.View_I2_1442_10_16} />
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a05af972-8f7d-4ff2-a564-3b68e24e7a9d"
        }} style={styles.ImageBackground_I2_1442_10_17} />
        </View>
      </View>
      <TouchableOpacity source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/325e31ad-04bc-4dbf-9056-3ce5083d023e"
    }} style={styles.TouchableOpacity_2_1443} onPress={() => this.props.navigation.navigate(getNavigationScreen("2_1492"))} />
      <View style={styles.View_2_1445} />
      <View style={styles.View_2_1446}>
        <Text style={styles.Text_2_1446}>0:30</Text>
      </View>
      <View style={styles.View_2_1447}>
        <Text style={styles.Text_2_1447}>1:25</Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd8b6201-b13e-4740-b8b1-6df6624c3c53"
    }} style={styles.ImageBackground_2_1448} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b60a182-911e-45d6-ade3-d7ec2df96b7a"
    }} style={styles.ImageBackground_2_1451} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e91352c-7cc0-477c-90fd-80bd94ae8351"
    }} style={styles.ImageBackground_2_1455} />
      <View style={styles.View_2_1458} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94aff2ed-df6d-4dcd-bc69-01a25316ae64"
    }} style={styles.ImageBackground_2_1459} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cf15ce4-9370-413d-82de-c956bf03d846"
    }} style={styles.ImageBackground_2_1460} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26936f7b-747d-47f0-81a6-6a513a9af2b7"
    }} style={styles.ImageBackground_2_1463} />
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a657e8c1-84d9-48dc-88e1-5b4c9b69b9ce"
    }} style={styles.ImageBackground_2_1467} />
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2: {
    height: hp("130%")
  },
  View_2_1437: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("103%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("18%")
  },
  View_2_1438: {
    width: wp("89%"),
    minHeight: hp("103%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1438: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "274",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1439: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("99%"),
    top: hp("22%"),
    backgroundColor: "rgba(217, 217, 217, 1)",
    opacity: 0.5
  },
  View_2_1440: {
    width: wp("107%"),
    minWidth: wp("107%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-3%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(255, 242, 242, 1)",
    borderWidth: 1
  },
  View_2_1441: {
    width: wp("67%"),
    minWidth: wp("67%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_1441: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1442: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_1442_10_2: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1442_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_1442_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_1442_10_4: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_1442_10_5: {
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
  View_I2_1442_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1442_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_1442_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_1442_10_11: {
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
  View_I2_1442_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_1442_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1442_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1442_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_1442_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_1442_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  TouchableOpacity_2_1443: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_1445: {
    width: wp("116%"),
    minWidth: wp("116%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.949999988079071
  },
  View_2_1446: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_1446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1447: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_1447: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1448: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_2_1451: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_2_1455: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  },
  View_2_1458: {
    width: wp("116%"),
    minWidth: wp("116%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-8%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0
  },
  ImageBackground_2_1459: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("97%")
  },
  ImageBackground_2_1460: {
    width: wp("15%"),
    height: hp("8%"),
    top: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  },
  ImageBackground_2_1463: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_2_1467: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);