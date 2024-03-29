import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  useColorScheme,
  Platform,
  Linking,
} from 'react-native';
import {Font} from '../../utils/font';
import {scale, verticalScale} from 'react-native-size-matters';
import {Color} from '../../utils/Colors';
import { useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;
const SwiperCard = ({source, live, text_subText,lastText}) => {
  const iosTab = w >= 820 && h >= 1180;
  const fourInchPotrait = w <= 380 && h <= 630;
  // const Theme = useColorScheme() === 'dark';
  const Theme = useSelector(state => state.mode)
  const IOS = Platform.OS == 'ios';
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          paddingVertical: verticalScale(10),
          height:
            w >= 768 && h >= 1024 ? verticalScale(200) : w <= 450 && h <= 750 ? verticalScale(170) :verticalScale(150),
          width: '90%',
          marginRight:
            w >= 768 && h >= 1024 ? verticalScale(8) : verticalScale(0),
          alignSelf: 'center',
          overflow: 'hidden',
          margin: 5,
          borderRadius: scale(20),
          bottom: scale(8)
        }}>
        <View
          style={{
            width: '100%',
            height: verticalScale(500),
            
          }}>
            {/* {IOS ? (
              <Image
                resizeMode="contain"
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                }}
                source={{uri :source}}
              />
            ) : (
            <FastImage
                 style={{height: '100%', width: '100%',  position: 'absolute'}}
                 source={{
                   uri: source,
                   priority: FastImage.priority.normal,
                 }}
                 resizeMode={FastImage.resizeMode.contain}
               />
            )} */}
            <FastImage
                 style={{height: '100%', width: '100%',  position: 'absolute'}}
                 source={{
                   uri: source,
                   priority: FastImage.priority.normal,
                 }}
                 resizeMode={FastImage.resizeMode.contain}
               />
        </View>
        <View
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: '100%',
                width: '60%',
              }}>
              <View
                style={{
                //   height: '70%',
                //   width: '0%',
                  padding:20
                }}>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default SwiperCard;

const styles = StyleSheet.create({});
