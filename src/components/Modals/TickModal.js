import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {scale, verticalScale} from 'react-native-size-matters'
import Modal from 'react-native-modal'
import LottieView from 'lottie-react-native'
import { useSelector } from 'react-redux'
import { Color } from '../../utils/Colors'
import { Font } from '../../utils/font'

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const TickModal = (props) => {
    const Theme = useSelector(state => state.mode)
  return (
    <Modal
      backdropOpacity={0.4}
      onBackdropPress={props.onBackdropPress}
      isVisible={props.isVisible}
      animationIn="slideInDown" // Set the animationIn property to slideInDown
      animationInTiming={400} // Adjust the animationInTiming value as needed
      animationOut="slideOutUp" // Set the animationOut property to slideOutUp
      animationOutTiming={400} // Adjust the animationOutTiming value as needed
      style={{
        flex: 1,
        justifyContent: 'flex-start',
      }}>
      <View style={[styles.ModalMain,{
        backgroundColor: Color.White
      }]}>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            // alignItems: 'center',
            paddingLeft: scale(20)
          }}>
          <Text
            style={{
                fontSize: w >= 768 && h >= 1024 ? scale(18) : scale(15),
              fontFamily: Font.Poppins600,
              color: Color.Main ,
              textTransform: 'capitalize',
            }}>
            {props.text}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={props.onPress}
            style={{
              height: '50%',
              width: '50%',
              backgroundColor: 'white',
              borderRadius: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <LottieView
              style={{
                height: verticalScale(85),
              }}
              source={require('../Lootie/tick.json')}
              autoPlay
              loop
              speed={0.7}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  ModalMain: {
    height: verticalScale(70),
    // backgroundColor: '#435CA8',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: scale(20),
    flexDirection: 'row',
  },
})
export default TickModal
