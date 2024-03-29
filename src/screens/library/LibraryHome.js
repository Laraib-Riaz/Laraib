import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Dimensions,
  StatusBar,
  ScrollView,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  LogBox,
  Image,
  ToastAndroid
} from 'react-native';
import React, {useCallback, useState} from 'react';
import LibraryHeader from '../../components/LibraryHeader';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Color} from '../../utils/Colors';
import DetailsCard from '../../components/Card/DetailsCard';
import {useFocusEffect} from '@react-navigation/native';
import BottomTab from '../../constant/BottomTab';
import {useDispatch, useSelector} from 'react-redux';
import CustomButton from '../../components/CustomButton';
import Modal from 'react-native-modal';
import AnimatedLottieView from 'lottie-react-native';
import { getLibraryData } from '../../redux/actions/UserAction';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const LibraryHome = ({navigation}) => {
  const dispatch = useDispatch()
  // const libData = useSelector(state => state.getlibrarydata);
  const [showModal, setShowModal] = useState(false);
  const [Loading, setLoading] = useState(false);
  const Theme = useSelector(state => state.mode);
  const user_details = useSelector(state => state.user_details);
  const applanguage = useSelector(state => state.applanguage);
  const isGuest = useSelector(state => state.is_guest);
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(null);
  const savedBooks = useSelector(state => state.allbookmark);
  const savedParishes = useSelector(state => state.parishbookmark);
  const savedEvents = useSelector(state => state.eventbookmark);
  const libraryData = savedBooks.concat(savedEvents, savedParishes);
  const AppState = useSelector(state => state.appState);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
console.log('data', data)
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const [selected, setSelected] = useState('');

  const sortByTitle = () => {

    libraryData.sort((a, b) => {
      if (a?.title > b?.title) {
        return 1;
      } else {
        return -1;
      }
    });
    setData(libraryData);
  };

  useFocusEffect(
    useCallback(() => {
      setData(null);
      // dispatch()
      console.log("APP STATE IN LIBRARY ==>",AppState);
      navigation.getParent()?.setOptions({tabBarStyle: {display: 'none'}});
      dispatch(getLibraryData(user_details))
    }, []),
  );
  const data2 = [
    {
      id: '1',
      label: applanguage.Title,
    },
    {
      id: '2',
      label: applanguage.RecentActivity,
    },
  ];
  const sortData = () => {
    if (selected === applanguage.Title) {
      sortByTitle();
      setModalVisible(false);
      // Use the sortedData as needed
    } else if (selected === applanguage.RecentActivity) {
      const sortedData = [...libraryData].sort((a, b) => {
        const dateA = new Date(a.updated_at);
        const dateB = new Date(b.updated_at);
        return dateB - dateA;
      });
      console.log('sortedData', sortedData)
      setData(sortedData);
      setModalVisible(false);
      // Use the sortedData as needed
    } else {
      alert(applanguage.Sorting);
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: Theme === 'dark' ? Color.DarkTheme : Color.White,
        }}>
        <StatusBar
          backgroundColor={Theme === 'dark' ? Color.ExtraViewDark : Color.White}
          barStyle={Theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <LibraryHeader
          onPress={() => {
            toggleModal(true);
          }}
          AuthHeaderStyle={{
            height:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? verticalScale(80)
                  : 
                  w <= 450 && h <= 750 ? 
                   verticalScale(120):
                  verticalScale(100)
                  ? verticalScale(100)
                  : w <= 450 && h <= 750
                  ? verticalScale(110)
                  : verticalScale(100)
                : w >= 768 && h >= 1024
                ? verticalScale(70)
                : w <= 450 && h <= 750
                ? verticalScale(60)
                : verticalScale(40),
            justifyContent: 'center',
            paddingTop:
              Platform.OS == 'android'
                ? w >= 768 && h >= 1024
                  ? moderateVerticalScale(40)
                  : w <= 450 && h <= 750
                  ? moderateVerticalScale(50)
                  : moderateVerticalScale(60)
                : // ? moderateVerticalScale(25)
                  moderateVerticalScale(25),
          }}
          show={isGuest}
          noGuest={data ? data : libraryData.length >= 0 ? libraryData : false}
        />
        {isGuest ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: Dimensions.get('window').height / 2,
            }}>
            <AnimatedLottieView
              style={{
                height: verticalScale(100),
              }}
              source={require('../../components/Lootie/warning.json')}
              autoPlay
              loop
              speed={0.7}
            />
            <Text
              style={{
                color: Theme === 'dark' ? Color.White : Color.DarkTextColor,
                fontFamily: Font.Poppins500,
              }}>
              {applanguage.Guestpromt}
            </Text>
          </View>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                paddingHorizontal:
                  w >= 768 && h >= 1024 ? moderateScale(25) : moderateScale(20),
              }}>
              <FlatList
                data={data ? data : libraryData}
                renderItem={({item}) => {
                  const nav = item?.address
                    ? item?.country
                      ? 'ViewParish'
                      : 'EventScreen'
                    : 'ViewManual';
                  const param = item?.address
                    ? item?.country
                      ? {
                          id: item.id,
                          item: item
                        }
                      : {id: item.id,item: item}
                    : {
                        item: item,
                        
                      };
                  return (
                    <>
                      <DetailsCard
                        key={item?.id}
                        onPress={() => navigation.navigate(nav, param)}
                        source={
                         item?.cover_image
                            ? item?.cover_image
                            : item.image
                        }
                        title={item?.title}
                        resize={'contain'}
                        manual={item?.category}
                        PlaceTrue={true}
                        Place={
                          item?.release_year
                            ? item?.release_year
                            : item?.address
                        }
                        MainBoxRestyle={{
                          paddingBottom:
                            w >= 768 && h >= 1024
                              ? verticalScale(10)
                              : verticalScale(15),
                          marginTop:
                            w >= 768 && h >= 1024
                              ? verticalScale(10)
                              : verticalScale(15),
                          // backgroundColor:'red'
                          borderBottomColor:
                            Theme === 'dark'
                              ? Color.DarkBorder
                              : Color.BorderColor,
                          borderBottomWidth: 1,
                        }}
                      />
                    </>
                  );
                }}
                ListEmptyComponent={
                  <View
                    style={{
                      height: (h * 1) / 1.4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: '45%',
                        width: '100%',
                      }}>
                      <Image
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        resizeMode="contain"
                        source={require('../../assets/images/emptylibrary.png')}
                      />
                    </View>
                    <Text
                      style={[
                        styles.BigTextStyle,
                        {
                          color: Theme === 'dark' ? Color.White : Color.Main,
                        },
                      ]}>
                      {applanguage.EmptyLib}
                      {/* You dont have any item saved yet. */}
                    </Text>
                  </View>
                }
              />
            </View>
          </ScrollView>
        )}

        <Modal
          testID={'modal'}
          style={styles.modalStyling}
          backdropOpacity={0.7}
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          onSwipeComplete={() => setModalVisible(false)}
          swipeDirection="down">
          <View
            style={[
              styles.modalView,
              {
                backgroundColor:
                  Theme === 'dark' ? Color.DarkTheme : Color.White,
                paddingHorizontal:
                  width >= 768 && height >= 1024 ? scale(25) : scale(20),
              },
            ]}>
            <View
              style={{
                marginVertical: verticalScale(20),
              }}>
              <Text
                style={[
                  styles.BigTextStyle,
                  {
                    color: Theme === 'dark' ? Color.White : Color.Black,
                  },
                ]}>
                {applanguage.SortBy}
              </Text>
            </View>
            <FlatList
              data={data2}
              renderItem={({item}) => (
               
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems:'center',
                          paddingVertical:moderateVerticalScale(10),
                    }}
                    onPress={() => setSelected(item.label)}>
                   
                        <Text
                          style={[
                            styles.SmallTextStyle,
                            styles.BigTextStyle,
                            {
                              color:
                                Theme === 'dark' ? Color.White : Color.Black,
                            },
                          ]}>
                          {item.label}
                        </Text>

                      <View
                        style={{
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            height:
                              width >= 768 && height >= 1024
                                ? verticalScale(15)
                                : verticalScale(20),
                            width:
                              width >= 768 && height >= 1024
                                ? verticalScale(15)
                                : verticalScale(20),
                            backgroundColor: Color.White,
                            borderRadius: scale(50),
                            borderColor: Color.Black,
                            borderWidth: scale(1.5),
                            // marginBottom: verticalScale(15),
                          }}>
                          {item.label == selected ? (
                            <View
                              style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: scale(80),
                              }}>
                              <View
                                style={{
                                  height:
                                    width >= 768 && height >= 1024
                                      ? verticalScale(7)
                                      : verticalScale(10),
                                  width:
                                    width >= 768 && height >= 1024
                                      ? verticalScale(7)
                                      : verticalScale(10),
                                  backgroundColor: Color.Black,
                                  borderRadius: scale(50),
                                }}
                              />
                            </View>
                          ) : null}
                        </View>
                      </View>
                  </TouchableOpacity>
               
              )}
            />

            <View style={{marginVertical: verticalScale(15)}}>
              <CustomButton onPress={sortData} text={applanguage.Apply} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
      <BottomTab activeLibary={true} homePress={() => navigation.navigate('Home')} />
    </>
  );
};

export default LibraryHome;

const styles = StyleSheet.create({
  border: {
    borderBottomWidth: scale(3),
    marginTop: verticalScale(20),
    borderColor: Color.BorderColor,
    borderBottomColor: Color.BorderColor,
  },

  ImageView: {
    alignItems: 'center',
  },
  modalStyling: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  modalView: {
    justifyContent: 'center',
    paddingVertical: moderateScale(20),
    width: '100%',
    borderTopRightRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
    borderTopLeftRadius: w >= 768 && h >= 1024 ? scale(20) : scale(22),
    backgroundColor: Color.White,
  },
  BigTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins500,
    fontSize: w >= 768 && h >= 1024 ? scale(12) : scale(16),
  },
  SmallTextStyle: {
    color: Color.DarkTextColor,
    fontFamily: Font.Poppins400,
    fontSize: w >= 768 && h >= 1024 ? scale(10) : scale(16),
  },
});
