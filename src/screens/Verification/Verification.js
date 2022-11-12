import React from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import CustomButton from '../../components/CustomButton'
import OTP from '../../components/OTP'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Verification = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={{height: 35}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={23} color={'black'} />
        </TouchableOpacity>
      </View>

      <Text style={styles.RPhead}>Verification </Text>

      <Text style={styles.RPText}>
        We ve send you the Verification code on 12345678
      </Text>

      <View style={styles.CodeContainer}>
        <OTP />
      </View>

      <CustomButton
        stylz={{marginHorizontal: scale(20)}}
        onPress={() => navigation.navigate('ChangePass')}
        IconName={'arrow-right'}
        Iconsize={15}
        IconColor={'#FFF'}
        CircleStyle={{
          backgroundColor: 'rgba(6, 5, 24, 0.28)',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          position: 'absolute',
          right: 6,
        }}
        text={'continue'}
      />

      <View style={styles.TimeContainer}>
        <Text style={styles.Resend}>Re-send code in</Text>
        <Text style={styles.Time}>0:20</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingVertical: verticalScale(20),
  },
  ArrowContain: {
    height: scale(40),
  },
  RPhead: {
    fontFamily: 'Mulish',
    fontSize: moderateScale(24),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: moderateScale(30),
    color: 'black',
    textTransform: 'capitalize',
  },
  RPText: {
    width: '75%',
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(15),
    fontWeight: '400',
    color: 'black',
    marginVertical: verticalScale(5),
  },
  CodeContainer: {
    height: scale(80),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  CodeBox: {
    height: scale(55),
    width: scale(50),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#3E57A7',
    textAlign: 'center',
  },

  TimeContainer: {
    height: scale(30),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Resend: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(15),
    fontWeight: '400',
    color: 'black',
    marginHorizontal: 5,
  },
  Time: {
    color: 'blue',
  },
})
export default Verification
