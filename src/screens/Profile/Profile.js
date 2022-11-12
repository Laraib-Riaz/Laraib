import React from 'react'
import {useForm} from 'react-hook-form'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'
import {scale, moderateScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Validation from '../../components/Validation'

const Profile = ({navigation}) => {
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
    <View style={styles.MainContainer}>
      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Profile</Text>
      </View>
      <View style={styles.ProfileContainer}>
        <View style={styles.Profile}>
          <Image
            resizeMode="cover"
            style={styles.Image}
            source={require('../../assets/Images/boy2.jpg')}
          />
        </View>
        <TouchableOpacity>
          <View style={styles.IconContainer}>
            <Icon name="plus" size={13} color={'black'} />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{marginTop: scale(15), flex: 1}}
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
              position: 'relative',
              bottom: 7,
              height: 20,
            }}
            title={errors.Phone_number.message}
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
      </ScrollView>

      <CustomButton
        onPress={handleSubmit(onSubmit)}
        text={'save changes'}
        Textalig={{
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        restyle={{
          width: '80%',
          height: scale(55),
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
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
  },
  ArrowContainer: {
    justifyContent: 'space-around',
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
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
  ProfileContainer: {
    height: scale(115),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Profile: {
    height: scale(96),
    width: scale(96),
    borderRadius: 100,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  Image: {
    height: scale(100),
    width: scale(100),
  },
  IconContainer: {
    height: scale(18),
    width: scale(18),
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    top: 38,
    left: 23,
  },
})
export default Profile
