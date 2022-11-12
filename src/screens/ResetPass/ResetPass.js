import React from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {useForm} from 'react-hook-form'
import Validation from '../../components/Validation'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ResetPass = ({navigation}) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    navigation.navigate('ChangePass')
  }

  return (
    <View style={styles.MainContainer}>
      <View style={{height: 35}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={23} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.RPhead}>Reset Password</Text>
      <Text style={styles.RPText}>
        Please enter your email address to request a password reset
      </Text>
      <CustomInput
        name="Email"
        rules={{
          required: 'Email is required',
        }}
        control={control}
        style={styles.textInput}
        textStyle={styles.InputTextStyle}
        placeholder={'abc@gmail.com'}
        keyboardType={'default'}
        PIname={'envelope'}
        PIsize={20}
        PIstylye={{
          position: 'absolute',
          bottom: 38,
          left: 14,
        }}
        restyle={{
          paddingHorizontal: 45,
          marginVertical: 20,
        }}
      />
      {errors.Email && <Validation title={errors.Email.message} />}

      <CustomButton
        onPress={handleSubmit(onSubmit)}
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
      />
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingVertical: verticalScale(20),
  },

  RPhead: {
    fontFamily: 'Mulish',
    fontSize: moderateScale(24),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: moderateScale(30),
    color: 'black',
    textTransform: 'capitalize',
    marginVertical: verticalScale(15),
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
})

export default ResetPass
