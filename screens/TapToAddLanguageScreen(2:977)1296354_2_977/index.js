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
      <View style={styles.View_2_978}>
        <Text style={styles.Text_2_978}>
          I speak English 我说中文  (Wǒ shuō zhōngwén) Yo hablo español मैं
          हिंदी बोलता हूं  (Main hindī bōlatā hū̃)  আমি বাংলা বলি  (Ami bangla
          boli)  Eu falo português Я говорю по-русски (Ya govoryu po-russki)
          私は日本語を話します  (Watashi wa nihongo o hanashimasu) 저는 한국어를
          말합니다 (Jeoneun hangug-eoreul malhabnida)  Je parle français  Ich
          spreche Deutsch  Türkçe konuşuyorum  Tôi nói tiếng Việt  நான் தமிழ்
          பேசுகிறேன் (Nāṉ tamizh pēcukiṟēṉ) माझं मराठी बोलतं (Mājha marāṭhī
          bōlatō) Saya berbicara bahasa Indonesia నేను తెలుగు మాట్లాడుతాను (Nēnu
          telugu māṭlāḍutānu) Parlo italiano Na yi magana Hausa ฉันพูดภาษาไทย
          (Chan phuud phaasaa thai) ನಾನು ಕನ್ನಡ ಮಾತನಾಡುತ್ತೇನೆ (Nānu kannada
          mātanāḍuttēne) Mówię po polsku
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8908064-c7e0-49fc-b6ec-aeb68f4d093d"
        }}
        style={styles.ImageBackground_2_979}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("195%") },
  View_2_978: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_978: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_979: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("4%"),
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
