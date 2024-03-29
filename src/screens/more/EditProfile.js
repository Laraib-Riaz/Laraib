import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Image,
  ActivityIndicator,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {verticalScale, scale, moderateScale} from 'react-native-size-matters';
import Header from '../../components/Header';
import {Color} from '../../utils/Colors';
import Password from '../../components/Password';
import ChangeImage from '../../assets/icons/changeimage.svg';
import Tag from '../../assets/icons/tag.svg';
import {launchImageLibrary} from 'react-native-image-picker';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {updateProfile} from '../../redux/actions/UserAction';
import TickModal from '../../components/Modals/TickModal';
import Loading from '../../components/Modals/Loading';
import Loader from '../../components/Modals/Loader';
import Permissions from 'react-native-permissions';
import {Font} from '../../utils/font';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const applanguage = useSelector(state => state.applanguage);
  const Theme = useSelector(state => state.mode);
  const userData = useSelector(state => state.user_details);
console.log(userData.data.phone_number);
  const w = useWindowDimensions().width;
  const h = useWindowDimensions().height;
  const [text, onChangeText] = useState('');
  const [password, onChangePassword] = useState('');
  const [isVisible, setVisible] = useState(true);
  const [isVisible2, setVisible2] = useState(true);
  const [loader, setLoader] = useState(false);
console.log(typeof userData.data.phone_number);
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'all',
    defaultValues: {
      full_name: userData.data.name,
      phonenumber: userData.data.phone_number.toString(),
      email: userData.data.email,
      // password: userData.password,
    },
  });

  useLayoutEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {
        display: 'none',
      },
    });
  }, []);
  const fourInchPotrait = width <= 350 && height <= 600;
  const fourInchLandscape = width <= 600 && height <= 350;
  const tabPotrait = width >= 768 && height >= 1024;
  const [saveimage, setsaveimage] = useState();
  const [show, setShow] = useState(true);
  const [country, setCountry] = useState();
  const [check, setCheck] = useState(false);

  const handlePhoneNumberButtonPress = () => {
    navigation.navigate('FeaturedCountry', {
      setCountry: setCountry,
    });
  };
  const savePhoto = () => {
    let options = {
      storageOptions: {
        mediaType: 'photo',
        path: 'image',
        includeExtra: true,
      },
      selectionLimit: 1,
    };

    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('ez pz');
      } else if (res.error) {
        console.log('ez pz win');
      } else if (res.customButton) {
        alert(res.customButton);
      } else {
        setsaveimage({
          name: res.assets?.[0]?.fileName,
          uri: res.assets?.[0]?.uri,
          type: res.assets?.[0]?.type,
        });
        setShow(false);
      }
    });
  };

  const permissions = async () => {
    try {
      if (Platform.OS == 'android') {
        const status = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        );
        if (status == PermissionsAndroid.RESULTS.GRANTED) {
          savePhoto();
        } else {
          const request = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          );
          if (request == PermissionsAndroid.RESULTS.GRANTED) {
            savePhoto();
          }
        }
      } else {
        const status = await Permissions.check(
          Platform.select({
            ios: Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY,
          }),
        );
        if (status == Permissions.RESULTS.GRANTED) {
          savePhoto();
        } else {
          const request = await Permissions.request(
            Platform.select({
              ios: Permissions.PERMISSIONS.IOS.PHOTO_LIBRARY,
            }),
          );
          if (request == PermissionsAndroid.RESULTS.GRANTED) {
            savePhoto();
          } else {
            // alert(
            //   `Kirista would like to access your photos: Kirista uses photo library to let you select which photo to upload.(Go to Setting and allow Kirista to access your photos)`,
            // );
            Alert.alert(
              'Photo Library Permission',
              `Kirista would like to access your photos: Kirista uses photo library to let you select which photo to upload.(Go to Setting and allow Kirista to access your photos)`,
            );
          }
        }
      }
    } catch (error) {
      console.log('error in permission');
    }
  };

  const onSubmit = data => {
    if (password != '') {
      if (password == userData.password) {
        dispatch(
          updateProfile(
            data,
            userData,
            saveimage,
            text,
            navigation,
            country,
            setLoader,
            setCheck,
          ),
        );
      } else {
        alert('Incorrect Old Password');
      }
    } else {
      dispatch(
        updateProfile(
          data,
          userData,
          saveimage,
          userData.password,
          navigation,
          country,
          setLoader,
          setCheck,
        ),
      );
    }
  };
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor:
            Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.White}
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <Header text={applanguage.EditProfile} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              marginTop:
                w >= 768 && h >= 1024 ? moderateScale(20) : moderateScale(20),
            }}>
            <View>
              {show && userData.data.profile_image == null ? (
                <ChangeImage
                  width={w >= 768 && h >= 1024 ? scale(80) : scale(130)}
                />
              ) : (
                <View
                  style={{
                    height: scale(125),
                    width: scale(125),
                    borderRadius: 100,
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={{
                      uri: saveimage?.uri
                        ? saveimage?.uri
                        : userData.data.profile_image,
                    }}
                    resizeMode="cover"
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </View>
              )}
            </View>
            <TouchableOpacity
              onPress={() => {
                permissions();
              }}
              style={{
                justifyContent: 'center',
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(15),
              }}>
              {/* <Tag
              // height={40}
              width={w >= 768 && h >= 1024 ? scale(65) : scale(140)}
            /> */}
              <View
                style={{
                  height:
                    Platform.OS == 'ios'
                      ? verticalScale(40)
                      : verticalScale(45),
                  width: w >= 768 && h >= 1024 ? scale(65) : scale(140),
                  backgroundColor: Color.Main,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Color.White,
                    fontFamily: Font.Poppins500,
                    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(16),
                  }}>
                  {applanguage.ChangeImage}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal:
                w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              marginVertical:
                w >= 768 && h >= 1024 ? moderateScale(10) : moderateScale(20),
            }}>
            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <CustomInput
                text={applanguage.FullName}
                placeholder={applanguage.FullName}
                control={control}
                name="full_name"
                rules={{
                  required: applanguage.FullNameReq,
                  message: applanguage.EnterFullName,
                }}
              />
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <CustomInput
                onPress={handlePhoneNumberButtonPress}
                control={control}
                name="phonenumber"
                maxLength={16}
                rules={{
                  required: applanguage.RequiredPhone,
                  message: applanguage.Phonemessage,
                  maxLength: {
                    value: 15,
                    message: applanguage.ValidPhone,
                  },
                }}
                // restyleBox={{
                //   marginBottom:
                //     w >= 768 && h >= 1024
                //       ? verticalScale(15)
                //       : verticalScale(15),
                // }}
                placeholder={applanguage.PhoneNumber}
                keyboardType={'numeric'}
                text={applanguage.PhoneNumber}
                flagImage={
                  country ? country.flag_code : userData.data.flag_code
                }
                phoneNumber={
                  country ? country.country_code : userData.data.country_code
                }
                phone={true}
                // onChange = value.replace(/(\d{3})(?=\d)/g, '$1 ')
              />
              {errors.phonenumber && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.phonenumber.message}{' '}
                </Text>
              )}
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <CustomInput
                name="email"
                text={applanguage.EmailAddress}
                placeholder={applanguage.EmailAddress}
                control={control}
                rules={{
                  required: applanguage.RequiredEmail,
                  // yeah comment ha
                  pattern: {
                    value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    message: applanguage.ValidEmail,
                  },
                }}
                keyboardType="email-address"
              />
              {errors.email && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.email.message}{' '}
                </Text>
              )}
            </View>

            {/* <View
              style={{
                paddingVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(15),
              }}>
              <CustomInput
                // password={true}
                text={applanguage.OldPass}
                placeholder={applanguage.OldPass}
                control={control}
                name="password"
                rules={{
                  required: applanguage.RequiredPassword,
                  minLength: {
                    value: 8,
                    message: applanguage.PasswordMax,
                  },
                  maxLength: {
                    value: 16,
                    message: applanguage.PasswordMin,
                  },
                }}
                keyboardType="default"
                maxLength={20}

                secureTextEntry={isVisible}
                PIname={isVisible ? 'eye-off-outline' : 'eye-outline'}
                onShowPass={() => setVisible(!isVisible)}
              />
              {errors.password && (
                <Text
                  style={[
                    {
                      fontSize: tabPotrait
                        ? verticalScale(11)
                        : fourInchLandscape
                        ? scale(12)
                        : scale(14),
                    },
                    styles.error,
                  ]}>
                  {errors.password.message}
                </Text>
              )}
            </View> */}
            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <Password
                text={applanguage.OldPass}
                placeholder={applanguage.OldPass}
                password={true}
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
                // PIname={isVisible2 ? 'eye-off-outline' : 'eye-outline'}
                // onShowPass={() => setVisible2(!isVisible2)}
              />
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? moderateScale(15) : moderateScale(10),
              }}>
              <Password
                text={applanguage.NewPass}
                placeholder={applanguage.NewPass}
                password={true}
                onChangeText={onChangeText}
                value={text}
                secureTextEntry={isVisible2}
                PIname={isVisible2 ? 'eye-off-outline' : 'eye-outline'}
                onShowPass={() => setVisible2(!isVisible2)}
              />
            </View>

            <View
              style={{
                marginVertical:
                  w >= 768 && h >= 1024 ? verticalScale(25) : verticalScale(30),
              }}>
              <CustomButton
                text={applanguage.Save}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <TickModal
        text="Changes Saved"
        onPress={() => setCheck(false)}
        onBackdropPress={() => setCheck(false)}
        isVisible={check}
      />

      <Loader onBackdropPress={() => setLoader(false)} isVisible={loader} />
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
