import React from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CustomButton from '../../components/CustomButton'

const Setting = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Settings</Text>
      </View>

      <View style={{paddingVertical: 25}}>
        <CustomButton
          text={'Contact us'}
          IconName={'arrow-right'}
          Iconsize={16}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: 6,
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            letterSpacing: moderateScale(0),
          }}
          restyle={{
            backgroundColor: '#EFF3FA',
            borderWidth: 2,
            borderColor: 'lightgrey',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
          }}
        />
        <CustomButton
          onPress={() => navigation.navigate('ChangePass')}
          text={'Change Password'}
          IconName={'arrow-right'}
          Iconsize={16}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: 6,
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            letterSpacing: moderateScale(0),
          }}
          restyle={{
            backgroundColor: '#EFF3FA',
            borderWidth: 2,
            borderColor: 'lightgrey',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
          }}
        />
        <CustomButton
          text={'Log Out'}
          IconName={'arrow-right'}
          Iconsize={16}
          IconColor={'#FFF'}
          CircleStyle={{
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
            position: 'absolute',
            right: 6,
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            letterSpacing: moderateScale(0),
          }}
          restyle={{
            backgroundColor: '#EFF3FA',
            borderWidth: 2,
            borderColor: 'lightgrey',
            justifyContent: 'flex-start',
            paddingHorizontal: 10,
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
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
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default Setting
