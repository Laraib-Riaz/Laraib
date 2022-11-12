import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icons from 'react-native-vector-icons/FontAwesome5'
// import ICONS from 'react-native-vector-icons/FontAwesome5Brands'

const CustomButton = ({
  text,
  onPress,
  stylz,
  IconName,
  Iconsize,
  IconColor,
  BGColor,
  Iconname,
  IconSize,
  Iconcolor,
  CircleStyle,
  Textalig,
  restyle,
  Iconstyle,
}) => {
  return (
    <View style={[styles.ButtonContainer, stylz]}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.ButtonStyles, BGColor, restyle]}>
        <Text style={[styles.ButtonText, Textalig]}>{text}</Text>
        <View style={[styles.Circle, CircleStyle]}>
          <Icon
            style={[Iconstyle]}
            name={IconName}
            size={Iconsize}
            color={IconColor}
          />
        </View>
        <Icons name={Iconname} size={IconSize} color={Iconcolor} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  ButtonContainer: {
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(15),
  },
  ButtonStyles: {
    height: scale(60),
    width: '90%',
    backgroundColor: '#3E57A7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(14),
    flexDirection: 'row',
    textAlign: 'center',
  },
  ButtonText: {
    color: '#FFFF',
    textTransform: 'uppercase',
    letterSpacing: moderateScale(1),
    fontSize: moderateScale(16),
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: scale(5),
  },
  BGColor: {
    backgroundColor: 'green',
  },
  Circle: {
    height: scale(30),
    width: scale(30),
  },
})

export default CustomButton
