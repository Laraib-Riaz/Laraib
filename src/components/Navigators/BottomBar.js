import React from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import {scale} from 'react-native-size-matters'

const BottomBar = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.Bottomnavigator}>
        <TouchableOpacity style={styles.BottomIcons1}>
          <View style={styles.BottomIcons1}>
            <Image
              style={{height: scale(30), width: scale(30)}}
              source={require('../../assets/Images/home.png')}
            />
            <Text style={styles.Text}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BottomIcons2}>
          <View style={styles.BottomIcons2}>
            <Image
              style={{height: scale(30), width: scale(30)}}
              source={require('../../assets/Images/report.png')}
            />
            <Text style={styles.Text}>Report</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomIcons2}>
          <View style={styles.BottomIcons2}>
            <Image
              style={{height: scale(30), width: scale(30)}}
              source={require('../../assets/Images/request.png')}
            />
            <Text style={styles.Text}>Requests</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomIcons2}>
          <View style={styles.BottomIcons2}>
            <Image
              style={{height: scale(30), width: scale(30)}}
              source={require('../../assets/Images/saved.png')}
            />
            <Text style={styles.Text}>Saved</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.BottomIcons5}>
          <View style={styles.BottomIcons5}>
            <Image
              style={{height: scale(30), width: scale(30)}}
              source={require('../../assets/Images/wallet.png')}
            />
            <Text style={styles.Text}>Wallet</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  Bottomnavigator: {
    height: scale(70),
    width: '100%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  BottomIcons1: {
    flex: 1,
    borderTopLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomIcons2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomIcons5: {
    flex: 1,
    borderTopRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: '#435CA8',
    fontWeight: '500',
  },
})
export default BottomBar
