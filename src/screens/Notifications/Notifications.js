import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native'
import {scale, moderateScale, verticalScale} from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/FontAwesome5'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const Notifications = ({navigation}) => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Notifications</Text>
      </View>

      {/* <View style={styles.Dimensions}>
        <Image
          style={styles.Image}
          source={require('../../assets/Images/bell2.png')}
        />
        <Text style={{position: 'relative', bottom: 50}}>
          You have no Notifications
        </Text>
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.NotificationBody}>
          <TouchableOpacity>
            <View style={styles.NotBox}>
              <Text style={styles.Text1}>Upload successful</Text>
              <Text style={styles.Text2}>
                Profile picture upload successfully
              </Text>
              <Text style={styles.Text3}>02:35 PM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.NotBox}>
              <Text style={styles.Text1}>Upload successful</Text>
              <Text style={styles.Text2}>
                Profile picture upload successfully
              </Text>
              <Text style={styles.Text3}>02:35 PM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.NotBox}>
              <Text style={styles.Text1}>Upload successful</Text>
              <Text style={styles.Text2}>
                Profile picture upload successfully
              </Text>
              <Text style={styles.Text3}>02:35 PM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.NotBox}>
              <Text style={styles.Text1}>Upload successful</Text>
              <Text style={styles.Text2}>
                Profile picture upload successfully
              </Text>
              <Text style={styles.Text3}>02:35 PM</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.NotBox}>
              <Text style={styles.Text1}>Upload successful</Text>
              <Text style={styles.Text2}>
                Profile picture upload successfully
              </Text>
              <Text style={styles.Text3}>02:35 PM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
    alignItems: 'center',
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
  Dimensions: {
    width: width,
    height: height,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: scale(60),
    width: scale(80),
    resizeMode: 'contain',
    opacity: moderateScale(0.6),
    position: 'relative',
    bottom: 70,
  },
  NotificationBody: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
  NotBox: {
    height: scale(70),
    width: scale(300),
    backgroundColor: '#EFF3FA',
    borderRadius: 15,
    marginVertical: verticalScale(5),
    borderWidth: moderateScale(1.8),
    borderColor: 'lightgrey',
    justifyContent: 'center',
    paddingHorizontal: scale(15),
  },
  Text1: {
    color: 'black',
    fontWeight: '600',
  },
  Text2: {
    fontSize: moderateScale(11),
  },
  Text3: {
    fontSize: moderateScale(11),
  },
})
export default Notifications
