import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import {moderateScale, scale} from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Top2navigator from '../../components/Navigators/Top2navigator'
import CustomInput from '../../components/CustomInput'
import {useForm} from 'react-hook-form'
import BottomBar from '../../components/Navigators/BottomBar'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Home = ({navigation}) => {
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
      <View style={styles.Dimensions}>
        <Image
          style={styles.Image}
          resizeMode="cover"
          source={require('../../assets/Images/map.png')}
        />
      </View>
      <View style={styles.TopViewContainer}>
        <View style={styles.ProfileContainer}>
          <View style={styles.ProfileBox}>
            <Image
              resizeMode="cover"
              style={{
                height: scale(45),
                width: scale(45),
              }}
              source={require('../../assets/Images/Logo.png')}
            />
          </View>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text1}>Hi, Prince Yota</Text>
          <Text style={styles.Text2}>lets find service</Text>
        </View>

        <View style={styles.TopIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Ionicons name="ios-settings-sharp" size={25} color={'#435CA8'} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Octicons name="bell-fill" size={24} color={'#435CA8'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{paddingHorizontal: 5}}>
        <Top2navigator text={'On demand'} text2={'vacational petrol'} />
      </View>

      <TouchableOpacity style={styles.ArrowBox}>
        <AntDesign name="arrowright" size={30} color={'#435CA8'} />
      </TouchableOpacity>

      <CustomInput
        name="Location"
        control={control}
        style={styles.textInput}
        textStyle={styles.InputTextStyle}
        placeholder={'Location'}
        keyboardType={'default'}
        restyle={{
          marginTop: scale(8),
          width: scale(270),
          height: scale(42),
          borderRadius: 20,
        }}
      />

      <BottomBar />
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  TopViewContainer: {
    height: scale(50),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(10),
    backgroundColor: 'none',
  },
  ProfileContainer: {
    height: scale(50),
    width: scale(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileBox: {
    height: scale(37),
    width: scale(37),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'lightgrey',
    position: 'absolute',
    right: 0,
  },
  TextContainer: {
    height: scale(50),
    width: 230,
  },
  Text1: {
    height: '50%',
    width: '100%',
    fontWeight: '700',
    color: '#02092A',
    paddingTop: moderateScale(5),
    textTransform: 'capitalize',
    paddingLeft: moderateScale(8),
  },
  Text2: {
    height: '50%',
    width: '100%',
    fontSize: moderateScale(13),
    textTransform: 'capitalize',
    paddingLeft: moderateScale(8),
  },
  TopIcons: {
    height: scale(50),
    width: scale(75),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Bottom: {
    justifyContent: 'flex-end',
  },
  Dimensions: {
    width: width,
    height: height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.3,
  },
  Image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    // opacity: moderateScale(0.6),
  },
  ArrowBox: {
    height: scale(55),
    width: scale(55),
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 550,
    left: 280,
    borderWidth: moderateScale(3),
    borderColor: '#435CA8',
  },
})
export default Home
