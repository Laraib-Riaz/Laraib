import React, {useState} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {moderateScale, scale} from 'react-native-size-matters'
import CustomButton from '../../components/CustomButton'
import {FontAwesome5} from 'react-native-vector-icons'

const SignUp1 = () => {
  const [check1, setCheck1] = useState(false)
  const [check2, setCheck2] = useState(false)

  const Selectbox1 = () => {
    setCheck1(true)
    setCheck2(false)
  }
  const Selectbox2 = () => {
    setCheck2(true)
    setCheck1(false)
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImgContainer}>
        <Image
          style={{height: scale(270), width: scale(300)}}
          resizeMode="cover"
          source={require('../../assets/Images/Logo.png')}
        />
      </View>

      <Text style={styles.firstText}>Account type</Text>
      <Text style={styles.Stext}>Lorem ipsemLorem ipsem Lorem</Text>

      <View style={styles.BoxContainer}>
        <TouchableOpacity activeOpacity={0.6} onPress={Selectbox1}>
          <View style={styles.Boxes}>
            <View style={styles.IconBox}>
              <Image
                style={[styles.Icons, {height: scale(40), marginBottom: 10}]}
                resizeMode="cover"
                source={require('../../assets/Images/path.png')}
              />
            </View>
            <Text style={styles.IconText}>Individual</Text>
            {check1 ? (
              <View
                style={{
                  height: 40,
                  width: '100%',
                  position: 'absolute',
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    borderRadius: 100,
                    backgroundColor: '#FFF',
                  }}
                  source={require('../../assets/Images/check.png')}
                />
              </View>
            ) : undefined}
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={Selectbox2}>
          <View style={styles.Boxes}>
            <View style={styles.IconBox}>
              <Image
                style={styles.Icons}
                resizeMode="cover"
                source={require('../../assets/Images/brief.png')}
              />
            </View>
            <Text style={styles.IconText}>Company</Text>
            {check2 ? (
              <View
                style={{
                  height: 40,
                  width: '100%',
                  position: 'absolute',
                  bottom: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  style={{
                    height: 22,
                    width: 22,
                    borderRadius: 100,
                    backgroundColor: '#FFF',
                  }}
                  source={require('../../assets/Images/check.png')}
                />
              </View>
            ) : undefined}
          </View>
        </TouchableOpacity>
      </View>

      <CustomButton
        text={'continue'}
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
        stylz={{
          paddingVertical: 60,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  ImgContainer: {
    height: scale(220),
    alignItems: 'center',
  },
  ImgBox: {
    height: scale(140),
    width: scale(140),
    backgroundColor: 'black',
  },
  firstText: {
    textAlign: 'center',
    height: scale(35),
    fontSize: moderateScale(24),
    fontWeight: '600',
    color: 'black',
  },
  Stext: {
    textAlign: 'center',
    height: scale(30),
    color: 'black',
    paddingVertical: 5,
  },
  BoxContainer: {
    height: scale(200),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  Boxes: {
    height: scale(160),
    width: scale(145),
    backgroundColor: '#435CA8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icons: {
    height: scale(35),
    width: scale(35),
    color: '#435CA8',
  },
  IconBox: {
    height: scale(55),
    width: scale(55),
    backgroundColor: '#FFF',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IconText: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: moderateScale(15),
    color: '#FFF',
  },
})
export default SignUp1
