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
      <View style={styles.View_2_862}>
        <Text style={styles.Text_2_862}>
          Meaning(s) The word &quot;ineffable&quot; describes something that is
          too great, extreme, or profound to be expressed or described in words.
          It is often used to convey a sense of awe, wonder, or deep emotion
          that goes beyond the limits of language.   Etymology (Word Roots)  The
          word &quot;ineffable&quot; describes something that is too great,
          extreme, or profound to be expressed or described in words. It is
          often used to convey a sense of awe, wonder, or deep emotion that goes
          beyond the limits of language.   Context(s)  Spiritual experiences:
          Ineffable can be used to describe profound spiritual or mystical
          experiences that cannot be easily communicated or explained.  Example:
          &quot;The mystic&#39;s encounter with the divine was an ineffable
          experience, leaving her at a loss for words.&quot;   Similar
          (Synonyms)  Spiritual experiences: Ineffable can be used to describe
          profound spiritual or mystical experiences that cannot be easily
          communicated or explained.  Example: &quot;The mystic&#39;s encounter
          with the divine was an ineffable experience, leaving her at a loss for
          words.&quot;   Opposite (Antonyms)  Spiritual experiences: Ineffable
          can be used to describe profound spiritual or mystical experiences
          that cannot be easily communicated or explained.  Example: &quot;The
          mystic&#39;s encounter with the divine was an ineffable experience,
          leaving her at a loss for words.&quot;
        </Text>
      </View>
      <View style={styles.View_2_863} />
      <View style={styles.View_2_864}>
        <View style={styles.View_I2_864_10_2}>
          <View style={styles.View_I2_864_10_3}>
            <Text style={styles.Text_I2_864_10_3}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_I2_864_10_4}>
          <View style={styles.View_I2_864_10_5}>
            <View style={styles.View_I2_864_10_6}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45a8f49a-70fe-4f23-9544-342b32e0512e"
                }}
                style={styles.ImageBackground_I2_864_10_7}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3687b5d6-1ce0-49e4-9e90-a7ea92556b4b"
                }}
                style={styles.ImageBackground_I2_864_10_10}
              />
            </View>
            <View style={styles.View_I2_864_10_11} />
          </View>
          <View style={styles.View_I2_864_10_12}>
            <View style={styles.View_I2_864_10_13} />
            <View style={styles.View_I2_864_10_14} />
            <View style={styles.View_I2_864_10_15} />
            <View style={styles.View_I2_864_10_16} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d483b46f-e2a5-4eed-bc2c-7532ea82c3af"
            }}
            style={styles.ImageBackground_I2_864_10_17}
          />
        </View>
      </View>
      <View style={styles.View_2_865}>
        <Text style={styles.Text_2_865}>vacillate</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94ec5a3d-cc1b-49a9-8acb-14ea7f5d09ce"
        }}
        style={styles.ImageBackground_2_866}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("177%") },
  View_2_862: {
    width: wp("84%"),
    minWidth: wp("84%"),
    minHeight: hp("146%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_862: {
    color: "rgba(208, 198, 198, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_863: {
    width: wp("104%"),
    minWidth: wp("104%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderColor: "rgba(238, 238, 238, 1)",
    borderWidth: 1
  },
  View_2_864: {
    flexGrow: 1,
    width: wp("85%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_864_10_2: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_864_10_3: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_864_10_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.16500000655651093,
    textTransform: "none"
  },
  View_I2_864_10_4: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_864_10_5: {
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
  View_I2_864_10_6: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_864_10_7: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_864_10_10: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I2_864_10_11: {
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
  View_I2_864_10_12: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_864_10_13: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_864_10_14: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_864_10_15: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_864_10_16: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I2_864_10_17: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_2_865: {
    width: wp("51%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_2_865: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_866: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
