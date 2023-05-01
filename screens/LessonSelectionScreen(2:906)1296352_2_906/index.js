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
      <View style={styles.View_2_907} />
      <View style={styles.View_2_908}>
        <Text style={styles.Text_2_908}>Learn</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69f71c71-a6a9-43c0-b3ee-5a23731b9ccb"
        }}
        style={styles.ImageBackground_2_909}
      />
      <View style={styles.View_2_910}>
        <Text style={styles.Text_2_910}>1/20 Complete</Text>
      </View>
      <View style={styles.View_2_911}>
        <Text style={styles.Text_2_911}>Lesson 1</Text>
      </View>
      <View style={styles.View_2_912}>
        <Text style={styles.Text_2_912}>Basic</Text>
      </View>
      <View style={styles.View_2_913}>
        <Text style={styles.Text_2_913}>Intermediate</Text>
      </View>
      <View style={styles.View_2_914}>
        <View style={styles.View_2_915} />
        <View style={styles.View_2_916} />
      </View>
      <View style={styles.View_2_917} />
      <View style={styles.View_2_918}>
        <Text style={styles.Text_2_918}>Learn</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/554384ce-d5fc-476d-a9e3-28a033f9b474"
        }}
        style={styles.ImageBackground_2_919}
      />
      <View style={styles.View_2_920}>
        <Text style={styles.Text_2_920}>18/20 Complete</Text>
      </View>
      <View style={styles.View_2_921}>
        <Text style={styles.Text_2_921}>Lesson 2</Text>
      </View>
      <View style={styles.View_2_922}>
        <View style={styles.View_2_923} />
      </View>
      <View style={styles.View_2_924} />
      <View style={styles.View_2_925}>
        <Text style={styles.Text_2_925}>Learn</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b518c7ad-9a1a-4fa7-a4ac-44fd20b1a56a"
        }}
        style={styles.ImageBackground_2_926}
      />
      <View style={styles.View_2_927}>
        <Text style={styles.Text_2_927}>18/20 Complete</Text>
      </View>
      <View style={styles.View_2_928}>
        <Text style={styles.Text_2_928}>Lesson 3</Text>
      </View>
      <View style={styles.View_2_929}>
        <View style={styles.View_2_930} />
      </View>
      <View style={styles.View_2_931} />
      <View style={styles.View_2_932}>
        <Text style={styles.Text_2_932}>Learn</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42e7c8b9-5abe-42a3-b723-1e87796cda77"
        }}
        style={styles.ImageBackground_2_933}
      />
      <View style={styles.View_2_934}>
        <Text style={styles.Text_2_934}>18/20 Complete</Text>
      </View>
      <View style={styles.View_2_935}>
        <Text style={styles.Text_2_935}>Lesson 1</Text>
      </View>
      <View style={styles.View_2_936}>
        <View style={styles.View_2_937} />
      </View>
      <View style={styles.View_2_938} />
      <View style={styles.View_2_939}>
        <Text style={styles.Text_2_939}>Learn</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ec659ca-6219-46e7-8945-dd7fbdf95aca"
        }}
        style={styles.ImageBackground_2_940}
      />
      <View style={styles.View_2_941}>
        <Text style={styles.Text_2_941}>Favorites</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a62dc3c1-2b8e-4649-af88-aa9b8dfbc918"
        }}
        style={styles.ImageBackground_2_942}
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/124c97af-aa61-4f30-b4e2-d500092eddd9"
        }}
        style={styles.TouchableOpacity_2_943}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_961"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df8b617f-7715-404d-822b-0e4b3aefc380"
        }}
        style={styles.TouchableOpacity_2_946}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_961"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a5ba0fd-2bd1-4d22-b945-489756887b31"
        }}
        style={styles.TouchableOpacity_2_949}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_961"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6dc7e9b-d639-4752-8b32-16886846c103"
        }}
        style={styles.TouchableOpacity_2_952}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_961"))
        }
      />
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c427a7f-4798-47b4-8002-b7fff038889d"
        }}
        style={styles.TouchableOpacity_2_955}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_961"))
        }
      />
      <View style={styles.View_2_958}>
        <View style={styles.View_I2_958_10_2}>
          <View style={styles.View_I2_958_10_3}>
            <Text style={styles.Text_I2_958_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_958_10_4}>
          <View style={styles.View_I2_958_10_5}>
            <View style={styles.View_I2_958_10_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ba5362f-0670-4209-90e7-734ac092987a"
                }}
                style={styles.ImageBackground_I2_958_10_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f237aa8d-731a-42ba-84ac-e8ecdb21256a"
                }}
                style={styles.ImageBackground_I2_958_10_10}
              />
            </View>
            <View style={styles.View_I2_958_10_11} />
          </View>
          <View style={styles.View_I2_958_10_12}>
            <View style={styles.View_I2_958_10_13} />
            <View style={styles.View_I2_958_10_14} />
            <View style={styles.View_I2_958_10_15} />
            <View style={styles.View_I2_958_10_16} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8820253d-08a4-42c3-adba-8eefef33d2b6"
            }}
            style={styles.ImageBackground_I2_958_10_17}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c6c62a4-9861-46d0-a8d6-1658b54eb7ab"
        }}
        style={styles.ImageBackground_2_959}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("152%") },
  View_2_907: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("58%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_908: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_2_908: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_909: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%")
  },
  View_2_910: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_2_910: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "274",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_911: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("46%"),
    justifyContent: "flex-start"
  },
  Text_2_911: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_912: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_2_912: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_913: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("109%"),
    justifyContent: "flex-start"
  },
  Text_2_913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_914: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("51%")
  },
  View_2_915: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_916: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(66, 143, 54, 1)"
  },
  View_2_917: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("79%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.41999998688697815
  },
  View_2_918: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("80%"),
    justifyContent: "flex-start"
  },
  Text_2_918: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_919: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  View_2_920: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_2_920: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_921: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_2_921: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_922: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("72%")
  },
  View_2_923: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_924: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("101%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.41999998688697815
  },
  View_2_925: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("102%"),
    justifyContent: "flex-start"
  },
  Text_2_925: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_926: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87%")
  },
  View_2_927: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("98%"),
    justifyContent: "flex-start"
  },
  Text_2_927: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_928: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("89%"),
    justifyContent: "flex-start"
  },
  Text_2_928: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_929: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("94%")
  },
  View_2_930: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_931: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("129%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.41999998688697815
  },
  View_2_932: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("130%"),
    justifyContent: "flex-start"
  },
  Text_2_932: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_933: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("115%")
  },
  View_2_934: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("126%"),
    justifyContent: "flex-start"
  },
  Text_2_934: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_935: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("117%"),
    justifyContent: "flex-start"
  },
  Text_2_935: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_936: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("121%")
  },
  View_2_937: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.699999988079071
  },
  View_2_938: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("24%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_939: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_2_939: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_940: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("33%")
  },
  View_2_941: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_941: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_942: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  TouchableOpacity_2_943: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_2_946: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  TouchableOpacity_2_949: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  TouchableOpacity_2_952: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("101%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  TouchableOpacity_2_955: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("129%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%")
  },
  View_2_958: {
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
  View_I2_958_10_2: {
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
  View_I2_958_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_958_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_958_10_4: {
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
  View_I2_958_10_5: {
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
  View_I2_958_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_958_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_958_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_958_10_11: {
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
  View_I2_958_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_958_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_958_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_958_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_958_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_958_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_2_959: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
