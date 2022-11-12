import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import {moderateScale, scale} from 'react-native-size-matters'

const Topnavigator = () => {
  const [btn1, setBtn1] = useState(true)
  const [btn2, setBtn2] = useState(false)
  const [btn3, setBtn3] = useState(false)

  const onDemand = () => {
    setBtn1(!!true)
    setBtn2(false)
    setBtn3(false)
  }
  const Petroling = () => {
    setBtn2(!!true)
    setBtn1(false)
    setBtn3(false)
  }
  const Standing = () => {
    setBtn3(!!true)
    setBtn1(false)
    setBtn2(false)
  }

  return (
    // <View style={styles.MainContainer}>
    <View style={styles.TopNavigatorContainer}>
      <TouchableOpacity
        style={[
          styles.TabTouch1,
          {
            backgroundColor: btn1 ? '#435CA8' : '#D7D7D7',
          },
        ]}
        onPress={onDemand}>
        <Text
          style={[
            styles.Text1,
            {
              color: btn1 ? 'white' : 'black',
            },
          ]}>
          on demand
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.TabTouch2,
          {
            backgroundColor: btn2 ? '#435CA8' : '#D7D7D7',
          },
        ]}
        onPress={Petroling}>
        <Text
          style={[
            styles.Text2,
            {
              color: btn2 ? 'white' : 'black',
            },
          ]}>
          petroling
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.TabTouch3,
          {
            backgroundColor: btn3 ? '#435CA8' : '#D7D7D7',
          },
        ]}
        onPress={Standing}>
        <Text
          style={[
            styles.Text3,
            {
              color: btn3 ? 'white' : 'black',
            },
          ]}>
          standing security
        </Text>
      </TouchableOpacity>
    </View>
    // </View>
  )
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  TopNavigatorContainer: {
    height: scale(45),
    backgroundColor: '#D7D7D7',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text1: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  Text2: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  Text3: {
    fontSize: moderateScale(10),
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  TabTouch1: {
    flex: 1,
    height: '100%',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabTouch2: {
    flex: 1,
    height: '100%',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TabTouch3: {
    flex: 1.5,
    height: '100%',
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default Topnavigator
