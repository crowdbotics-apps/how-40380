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
      <View style={styles.View_2_1652}>
        <Text style={styles.Text_2_1652}>(adj.) to be indecisive about</Text>
      </View>
      <View style={styles.View_2_1653}>
        <Text style={styles.Text_2_1653}>
          Difficult Vocabulary in this Story
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6afb28f7-7d07-41dc-88cd-b7bcd193a3db"
        }}
        style={styles.ImageBackground_2_1654}
      />
      <View style={styles.View_2_1655}>
        <Text style={styles.Text_2_1655}>Rhythm of the Streets</Text>
      </View>
      <View style={styles.View_2_1656}>
        <Text style={styles.Text_2_1656}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f32c5a45-3fa6-424f-88a0-4735fed2ccb9"
        }}
        style={styles.ImageBackground_2_1657}
      />
      <View style={styles.View_2_1658}>
        <Text style={styles.Text_2_1658}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ace07076-9069-4dba-b125-f843cbc5652c"
        }}
        style={styles.ImageBackground_2_1659}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73fabe49-9b83-415f-bc06-484e4e1d33ab"
        }}
        style={styles.ImageBackground_2_1660}
      />
      <View style={styles.View_2_1662}>
        <Text style={styles.Text_2_1662}>(adj.) to be indecisive about</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11243a47-24dd-42c3-9403-92fc3e645d12"
        }}
        style={styles.ImageBackground_2_1663}
      />
      <View style={styles.View_2_1664}>
        <Text style={styles.Text_2_1664}>vacillate</Text>
      </View>
      <View style={styles.View_2_1665}>
        <Text style={styles.Text_2_1665}>ineffable</Text>
      </View>
      <View style={styles.View_2_1666}>
        <Text style={styles.Text_2_1666}>pontificate</Text>
      </View>
      <View style={styles.View_2_1667}>
        <Text style={styles.Text_2_1667}>lollapalooza</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("100%") },
  View_2_1652: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("34%"),
    justifyContent: "flex-start"
  },
  Text_2_1652: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1653: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_2_1653: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1654: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("40%")
  },
  View_2_1655: {
    width: wp("77%"),
    minWidth: wp("77%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_1655: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1656: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("49%"),
    justifyContent: "flex-start"
  },
  Text_2_1656: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1657: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("55%")
  },
  View_2_1658: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("64%"),
    justifyContent: "flex-start"
  },
  Text_2_1658: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1659: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("70%")
  },
  ImageBackground_2_1660: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_2_1662: {
    width: wp("83%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_2_1662: {
    color: "rgba(114, 114, 114, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1663: {
    width: wp("101%"),
    minWidth: wp("101%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("86%")
  },
  View_2_1664: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_1664: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1665: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_2_1665: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1666: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_2_1666: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1667: {
    width: wp("51%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("74%"),
    justifyContent: "flex-start"
  },
  Text_2_1667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
