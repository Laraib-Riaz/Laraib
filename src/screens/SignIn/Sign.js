import React, {useState} from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  Image,
  ScrollView,
} from 'react-native'
import {useForm} from 'react-hook-form'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'

const Sign = ({navigation}) => {
  const [password, setPassword] = useState('')
  const [isPasswordSecure, setIsPasswordSecure] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({mode: 'all'})

  const onSubmit = (data) => {
    // navigation.navigate('Dashboard')
  }

  return (
    <View style={styles.MainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ImgContainer}>
          <Image
            style={{height: scale(280), width: scale(400)}}
            resizeMode="cover"
            source={require('../../assets/Images/Logo.png')}
          />
        </View>

        <Text style={styles.VerifText}>Sign in</Text>

        <CustomInput
          name="Email"
          rules={{
            required: 'Email is required',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Email'}
          keyboardType={'default'}
        />
        {errors.Email && <Validation title={errors.Email.message} />}
        <CustomInput
          secureTextEntry={isPasswordSecure}
          textContentType={'password'}
          value={password}
          onChangeText={(text) => setPassword(text)}
          name="Password"
          rules={{
            required: 'Password is required eye',
          }}
          control={control}
          style={styles.textInput}
          textStyle={styles.InputTextStyle}
          placeholder={'Password'}
          keyboardType={'default'}
          PIname={isPasswordSecure ? 'eye-slash' : 'eye'}
          PIsize={18}
          PIcolor={'blue'}
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
        />
        {errors.Password && <Validation title={errors.Password.message} />}

        <View style={styles.ToggleContainer}>
          <Switch
            trackColor={{false: '#767577', true: '#3E57A7'}}
            thumbColor={isEnabled ? '#FFFF' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Text style={[styles.FPassText, {position: 'absolute', left: 45}]}>
            Remember Me
          </Text>

          <View style={styles.FPassContainer}>
            <TouchableOpacity>
              <Text
                style={[styles.FPassText, {color: '#435CA8'}]}
                onPress={() => navigation.navigate('ResetPass')}>
                Forget Password
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <CustomButton
          onPress={handleSubmit(onSubmit)}
          text={'Sign In'}
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
            height: scale(60),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: moderateScale(25),
              fontWeight: '600',
              position: 'absolute',
              bottom: 0,
            }}>
            OR
          </Text>
        </View>
        <CustomButton
          restyle={{
            backgroundColor: '#ffff',
            borderWidth: 2,
            borderColor: '#435CA8',
          }}
          Textalig={{
            color: 'black',
            textTransform: 'none',
            position: 'absolute',
            left: 70,
            letterSpacing: moderateScale(0),
          }}
          text={'Login with Google'}
        />
        <Image
          style={styles.Google}
          source={require('../../assets/Images/googlelogo.png')}
        />
        <CustomButton
          restyle={{
            backgroundColor: '#ffff',
            borderWidth: 2,
            borderColor: '#435CA8',
          }}
          Textalig={{
            color: '#030303',
            textTransform: 'none',
            position: 'relative',
            left: 30,
            letterSpacing: moderateScale(0),
          }}
          text={'Login with Facebook'}
        />
        <Image
          style={{
            height: 35,
            width: 35,
            position: 'absolute',
            bottom: 45,
            left: 45,
          }}
          source={require('../../assets/Images/facebook.png')}
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
              style={styles.SignUpText}
              onPress={() => navigation.navigate('SignUp2')}>
              sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(10),
  },
  ImgContainer: {
    height: scale(220),
    alignItems: 'center',
  },
  ImgStyles: {
    height: scale(200),
    width: scale(200),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  VerifText: {
    fontFamily: 'Mulish-Bold',
    fontSize: moderateScale(25),
    lineHeight: moderateScale(30),
    color: 'black',
  },
  ToggleContainer: {
    height: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  FPassContainer: {
    height: scale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  FPassText: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(14),
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'black',
  },
  SignUpText1: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#030303',
    lineHeight: moderateScale(25),
  },
  SignUpText: {
    fontFamily: 'ABeeZee',
    fontSize: moderateScale(15),
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#030303',
    textTransform: 'capitalize',
    lineHeight: moderateScale(25),
    marginLeft: moderateScale(7),
  },
  Google: {
    height: scale(30),
    width: scale(30),
    position: 'absolute',
    bottom: 120,
    left: 50,
  },
})
export default Sign
