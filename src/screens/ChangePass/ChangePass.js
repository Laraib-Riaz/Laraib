import React from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native'
import {useForm} from 'react-hook-form'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'
import Icon from 'react-native-vector-icons/FontAwesome5'

const ChangePass = ({navigation}) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    navigation.navigate('Profile')
  }
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <View style={{height: 35}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={23} color={'black'} />
          </TouchableOpacity>
        </View>

        <Text style={styles.CPhead}>Change password</Text>
        <Text style={styles.CPhead2}>Please enter your details</Text>

        <CustomInput
          name="Current_Password"
          rules={{
            required: 'Current Password is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Current password'}
          keyboardType={'default'}
        />
        {errors.Current_Password && (
          <Validation title={errors.Current_Password.message} />
        )}
        <CustomInput
          name="New_Password"
          rules={{
            required: 'New Password is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'New password'}
          keyboardType={'default'}
        />
        {errors.New_Password && (
          <Validation title={errors.New_Password.message} />
        )}
        <CustomInput
          name="Confirm_Password"
          rules={{
            required: 'Confirm Password is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Confirm Password'}
          keyboardType={'default'}
        />
        {errors.Confirm_Password && (
          <Validation title={errors.Confirm_Password.message} />
        )}

        <CustomButton
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
          onPress={handleSubmit(onSubmit)}
          text={'Save'}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(35),
    paddingVertical: verticalScale(25),
  },
  ArrowContain: {
    height: scale(30),
  },
  CPhead: {
    fontFamily: 'Mulish',
    fontSize: moderateScale(24),
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: scale(30),
    color: 'black',
    textTransform: 'capitalize',
  },
  CPhead2: {
    fontFamily: 'Mulish',
    fontStyle: 'normal',
    fontSize: moderateScale(15),
    fontWeight: '400',
    lineHeight: scale(30),
    color: 'black',
    marginVertical: verticalScale(5),
  },
})
export default ChangePass
