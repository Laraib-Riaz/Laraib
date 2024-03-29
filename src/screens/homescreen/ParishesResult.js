import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  useColorScheme,
  Dimensions,
  TouchableOpacity,
  Platform,
  LogBox,
} from 'react-native';
import React, {useCallback} from 'react';
import {Color} from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateVerticalScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import Header from '../../components/Header';
import {useFocusEffect} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const ParishesResult = ({navigation,route}) => {
  const Theme = useSelector(state => state.mode)
  const applanguage = useSelector(state => state.applanguage)
  const {data} = route.params;


  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
    }, []),
  );
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: Theme === 'dark' ? Color.ExtraViewDark : Color.HeaderColor,
        }}
      />
    <View
      style={[
        styles.Container,
        {backgroundColor: Theme === 'dark' ? Color.DarkTheme : '#fff',marginTop:Platform.OS == 'ios' ? verticalScale(-20) : 0},
      ]}>
      <Header text={applanguage.Result}  AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : verticalScale(60)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(40),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? moderateVerticalScale(20)

                : w >= 768 && h >= 1024
                ? moderateVerticalScale(25)
                : moderateVerticalScale(0),
          }}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => {
          console.log("PARISH DATA ==> (EACH)",item);
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ViewParish',{
                id:item.id,
                item:item
              })}
              style={{
                height:
                  w >= 768 && h >= 1024
                    ? verticalScale(95)
                    : verticalScale(120),
                flexDirection: 'row',
                marginHorizontal: verticalScale(20),
                overflow: 'hidden',
                borderBottomWidth: 1,
                borderColor: Color.BorderColor,
              }}>
              <View
                style={{
                  flex: w >= 768 && h >= 1024 ? 0.9 : 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: w >= 768 && h >= 1024 ? '60%' : '100%',
                    width: scale(90),
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                    source={{uri: item?.image}}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: w >= 768 && h >= 1024 ? 3 : 2.1,
                  paddingHorizontal:
                    w >= 768 && h >= 1024
                      ? verticalScale(15)
                      : verticalScale(15),
                  marginVertical: verticalScale(25),
                }}>
                  <Text
                    style={[
                      styles.TitleStyle,
                      {
                        color: Theme === 'dark' ? '#fff' : Color.DarkTextColor,
                        marginTop: verticalScale(5),
                      },
                    ]}>
                    {item?.region}
                  </Text>
                  <Text
                    style={[
                      {
                        color: Theme === 'dark' ? '#fff' : Color.DarkTextColor,
                        marginTop:  Platform.OS == 'ios' ? verticalScale(-5) :  verticalScale(-10),
                      },
                      styles.TitleStyle,
                    ]}>
                    {item?.title}
                  </Text>
                {/* </View> */}
                {/* <View
                  style={{
                    height:
                      w >= 768 && h >= 1024 ? verticalScale(20) : scale(20),
                    justifyContent: 'center',
                    right: scale(2),
                  }}> */}
                <Text style={styles.CountryStyle}>{item?.country}</Text>
                {/* </View> */}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
    </>
  );
};

export default ParishesResult;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.White,
  },
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    alignItems: 'center',
  },
  CountryStyle: {
    color: Color.BoldTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(7) : scale(10),
  },
  TitleStyle: {
    fontSize: w >= 768 && h >= 1024 ? scale(9) : scale(14),
    fontFamily: Font.Poppins700,
  },
});
