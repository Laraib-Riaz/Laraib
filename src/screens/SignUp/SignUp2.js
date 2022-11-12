import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'

const SignUp2 = ({navigation}) => {
  const [password, setPassword] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true)
  const [password2, setPassword2] = useState('')
  const [isPasswordSecure2, setIsPasswordSecure2] = useState(true)
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    alert(data.Email)
    navigation.navigate('Verification')
  }
  return (
    <View style={styles.MainConatiner}>
      <View style={{height: 35}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={23} color={'black'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.SignText}>Sign up</Text>

      <ScrollView
        style={{marginTop: scale(5)}}
        showsVerticalScrollIndicator={false}>
        <CustomInput
          name="F_Name"
          rules={{
            required: 'First Name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'First Name'}
          keyboardType={'default'}
          Gapp={{height: scale(45)}}
        />
        {errors.F_Name && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.F_Name.message}
          />
        )}
        <CustomInput
          name="L_Name"
          rules={{
            required: 'Last Name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Last Name'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.L_Name && (
          <Validation
            REStyle={{
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.L_Name.message}
          />
        )}
        <CustomInput
          name="Email_address"
          rules={{
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            required: 'Email address is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Email address'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.Email_address && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Email_address.message}
          />
        )}

        <CustomInput
          name="User_name"
          rules={{
            required: 'User name is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'User name'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.User_name && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.User_name.message}
          />
        )}
        <CustomInput
          name="Phone_number"
          rules={{
            required: 'Phone number is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Phone number'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.Phone_number && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Phone_number.message}
          />
        )}
        <CustomInput
          secureTextEntry={isPasswordSecure}
          textContentType={'password'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          name="Your_Password"
          rules={{
            required: 'Password is required eye',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Your Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure ? 'eye-slash' : 'eye'}
          PIsize={18}
          PIcolor={'#979797'}
          PIstylye={{
            position: 'absolute',
            top: -42,
            right: 13,
          }}
          onPress={() => {
            isPasswordSecure
              ? setIsPasswordSecure(false)
              : setIsPasswordSecure(true)
          }}
          Gapp={{
            height: scale(45),
            marginBottom: 10,
            marginVertical: -4,
          }}
        />
        {errors.Your_Password && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Your_Password.message}
          />
        )}
        <CustomInput
          secureTextEntry={isPasswordSecure2}
          textContentType={'password'}
          value={password2}
          onChangeText={(text) => setPassword2(text)}
          name="Confirm_Password"
          rules={{
            required: 'Password is required eye',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Confirm Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure2 ? 'eye-slash' : 'eye'}
          PIsize={18}
          PIcolor={'#979797'}
          PIstylye={{
            position: 'absolute',
            top: -42,
            right: 13,
          }}
          onPress={() => {
            isPasswordSecure2
              ? setIsPasswordSecure2(false)
              : setIsPasswordSecure2(true)
          }}
          Gapp={{height: scale(45), marginBottom: 10, marginVertical: -4}}
        />
        {errors.Confirm_Password && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Confirm_Password.message}
          />
        )}

        <CustomInput
          name="Address"
          rules={{
            required: 'Address is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Address'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.Address && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Address.message}
          />
        )}
        <CustomInput
          name="Zip_code"
          rules={{
            required: 'Zip code is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Zip code'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.Zip_code && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Zip_code.message}
          />
        )}
        <CustomInput
          name="Country"
          rules={{
            required: 'Country is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Country'}
          keyboardType={'default'}
          Gapp={{height: scale(45), marginVertical: -4}}
        />
        {errors.Country && (
          <Validation
            REStyle={{
              //   backgroundColor: 'red',
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Country.message}
          />
        )}

        <CustomButton
          onPress={handleSubmit(onSubmit)}
          text={'Sign up'}
          Textalig={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          restyle={{
            width: '80%',
          }}
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.SignUpText1}>Don,t have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.SignUpText3}
              onPress={() => navigation.navigate('Verification')}>
              signin
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainConatiner: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  SignText: {
    height: 40,
    fontSize: moderateScale(25),
    fontWeight: '700',
    color: 'black',
    paddingHorizontal: scale(5),
  },
  SignUpText1: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#030303',
    lineHeight: moderateScale(25),
  },
  SignUpText3: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#435CA8',
    textTransform: 'capitalize',
    lineHeight: moderateScale(25),
    marginLeft: moderateScale(7),
  },
})
export default SignUp2
