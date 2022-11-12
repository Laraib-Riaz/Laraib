import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
  ScrollView,
  TextInput,
  Image,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/FontAwesome5'
import CustomButton from '../../components/CustomButton'
import Top2navigator from '../../components/Navigators/Top2navigator'

const VacationalP = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(true)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

  return (
    <View style={styles.MainContainer}>
      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>New Requests</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingVertical: verticalScale(15)}}>
          <Top2navigator text={'On demand'} text2={'vacational petrol'} />
        </View>

        <Text style={styles.MainText}>Vacational Patraol</Text>

        <Text style={{marginTop: scale(8)}}>
          Please select the starting and ending day
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Sun</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Mon</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Tue</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Wed</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Thu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Fri</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.WeekBox}>
              <Text style={styles.WText}>Sat</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: scale(4)}}>Service start and end date</Text>

        <View style={styles.DatePicker}>
          <Text style={{paddingHorizontal: 10, fontSize: 18, color: '#9093A3'}}>
            10/10/2010
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.Date}>Start Date</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.DatePicker, {marginVertical: verticalScale(10)}]}>
          <Text style={{paddingHorizontal: 10, fontSize: 18, color: '#9093A3'}}>
            10/10/2010
          </Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={[styles.Date, {marginHorizontal: 5}]}>End Date</Text>
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: scale(4)}}>Service Addresss</Text>

        <View style={styles.DatePicker}>
          <Text style={{paddingHorizontal: 25, fontSize: 20, color: '#9093A3'}}>
            Address prefilled
          </Text>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{position: 'relative', right: 24}}>
            <FontAwesome5 name="map-marker-alt" size={23} color={'#435CA8'} />
          </TouchableOpacity>
        </View>

        <Text style={{marginTop: scale(15)}}>How many patrols daily</Text>
        <TextInput placeholder="01" style={styles.InputPatrol} />

        <View style={styles.Toggle}>
          <View
            style={{
              width: '70%',
              height: '100%',
            }}>
            <Text>Random patrol time</Text>
            <Text>Between 12am to 12pm</Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFF',
              width: '30%',
              height: '100%',
              justifyContent: 'center',
            }}>
            <Switch
              trackColor={{false: '#767577', true: 'black'}}
              thumbColor={isEnabled ? '#FFFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View style={styles.Map}>
          <Image
            style={{
              height: scale(145),
              width: '100%',
              borderRadius: 18,
            }}
            source={require('../../assets/Images/map.png')}
          />
        </View>

        <CustomButton
          text={'select post orders'}
          restyle={{
            height: scale(50),
            borderRadius: 20,
          }}
          Textalig={{
            position: 'absolute',
            fontSize: moderateScale(12),
          }}
          IconName={'arrow-down'}
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

        <CustomButton
          text={'confirm request'}
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
        />
      </ScrollView>
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
  MainText: {
    fontSize: moderateScale(30),
    fontWeight: '600',
    color: 'black',
  },
  WeekBox: {
    height: scale(38),
    width: scale(38),
    backgroundColor: '#435CA8',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  WText: {
    color: '#FFF',
  },
  DatePicker: {
    backgroundColor: '#EFF3FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: 'lightgrey',
    borderRadius: 20,
    height: 47,
    alignItems: 'center',
  },
  Date: {
    paddingHorizontal: 10,
    color: '#435CA8',
    fontSize: 16,
    fontWeight: '600',
  },
  Toggle: {
    height: 50,
    marginVertical: verticalScale(15),
    flexDirection: 'row',
  },
  InputPatrol: {
    backgroundColor: '#EFF3FA',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1.5,
    borderColor: 'lightgrey',
    borderRadius: 20,
    height: 47,
    alignItems: 'center',
    paddingHorizontal: scale(20),
    color: 'black',
  },
  Map: {
    height: scale(150),
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default VacationalP
