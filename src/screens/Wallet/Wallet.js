import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from 'react-native-size-matters'
import CustomButton from '../../components/CustomButton'

const Wallet = ({navigation}) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Wallet</Text>
      </View>

      <View
        style={{
          backgroundColor: '#435CA8',
          height: scale(205),
          borderRadius: 12,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            borderRadius: 12,
            alignItems: 'center',
            height: scale(35),
          }}>
          <Text
            style={{
              fontSize: moderateScale(13),
              color: 'lightgrey',
              position: 'absolute',
              bottom: 0,
            }}>
            Current Balance
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            borderRadius: 12,
            alignItems: 'center',
            height: scale(35),
          }}>
          <Text
            style={{
              fontSize: moderateScale(24),
              color: 'white',
              fontWeight: '600',
            }}>
            $500,000,000.00
          </Text>
        </View>

        <View
          style={{
            height: scale(90),
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: scale(70),
              backgroundColor: 'white',
              width: '40%',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              height: scale(70),
              backgroundColor: 'white',
              width: '40%',
              borderRadius: 10,
            }}></View>
        </View>

        <CustomButton
          text={'add credit'}
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
          restyle={{
            height: scale(42),
            backgroundColor: '#07A965',
          }}
          stylz={{
            width: '95%',
            position: 'relative',
            bottom: 20,
          }}
          Textalig={{}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingVertical: verticalScale(15),
    backgroundColor: 'white',
  },
  HeaderText: {
    width: '90%',
    fontSize: moderateScale(15),
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    position: 'relative',
    right: 14,
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default Wallet
