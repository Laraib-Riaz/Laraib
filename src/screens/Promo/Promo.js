import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  ScrollView,
} from 'react-native'
import {
  scale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CustomButton from '../../components/CustomButton'

const Promo = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.MainContainer}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible)
        }}>
        <View style={styles.centeredView1}>
          <View style={styles.CardContainer}>
            <View
              style={{
                height: scale(100),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: moderateScale(20),
                  fontWeight: '700',
                  color: 'black',
                }}>
                Agreement
              </Text>
            </View>
            <View
              style={{
                height: scale(250),
                width: '85%',
              }}>
              <ScrollView>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: moderateVerticalScale(16),
                    color: 'black',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Text>
              </ScrollView>
            </View>

            <CustomButton
              text={'Accept'}
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
              stylz={{
                paddingVertical: 65,
              }}
              Textalig={{
                position: 'absolute',
              }}
              restyle={{
                width: scale(250),
                height: scale(52),
              }}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Checkout</Text>
      </View>

      <Text style={styles.TopText}>your amount</Text>

      <View style={styles.Subtotal}>
        <Text style={styles.Text12}>Subtotal</Text>
        <Text>$30.89</Text>
      </View>
      <View style={[styles.Subtotal, {marginTop: scale(10)}]}>
        <Text style={styles.Text12}>Fee</Text>
        <Text>$2.00</Text>
      </View>
      <Text style={{borderBottomWidth: 0.9, borderColor: 'black'}}></Text>

      <View style={[styles.Subtotal, {paddingVertical: scale(15)}]}>
        <Text style={styles.Text1}>Total</Text>
        <Text style={styles.FinalFee}>$30.00</Text>
      </View>

      <Text style={{marginTop: 35}}>Promo Code</Text>
      <TextInput placeholder="YOUR PROMO CODE" style={styles.InputPatrol} />

      <CustomButton
        onPress={() => setModalVisible(!modalVisible)}
        text={'proceed'}
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
        restyle={{
          width: '80%',
          height: scale(50),
        }}
        stylz={{
          marginVertical: scale(40),
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: scale(25),
    paddingVertical: verticalScale(15),
    backgroundColor: 'white',
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
  ArrowContainer: {
    justifyContent: 'space-around',
    height: scale(35),
    flexDirection: 'row',
    alignItems: 'center',
  },
  TopText: {
    paddingVertical: 25,
    color: 'black',
    fontSize: moderateScale(22),
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  Subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Text12: {
    fontSize: moderateScale(16),
    lineHeight: 20,
  },
  Text1: {
    fontSize: moderateScale(17),
    fontWeight: '700',
    color: 'black',
  },
  FinalFee: {
    color: 'black',
    fontWeight: '700',
    fontSize: moderateScale(16),
  },
  InputPatrol: {
    backgroundColor: '#EFF3FA',
    borderWidth: 1.5,
    borderColor: 'lightgrey',
    borderRadius: 20,
    height: 49,
    paddingHorizontal: scale(35),
    color: 'black',
    marginVertical: verticalScale(10),
    fontSize: 20,
  },
  centeredView1: {
    height: scale(710),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: 'black',
    opacity: 0.8,
    position: 'relative',
  },
  CardContainer: {
    height: '70%',
    width: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  ModalText: {
    color: '#060606',
    alignContent: 'center',
    fontSize: moderateScale(14),
    fontWeight: '700',
  },
  ModalText1: {
    alignContent: 'center',
    fontSize: moderateScale(14),
    fontWeight: '700',
    paddingHorizontal: moderateScale(20),
    color: '#3E57A7',
  },
})
export default Promo
