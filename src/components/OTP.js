import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, View} from 'react-native'
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field'

const CELL_COUNT = 4

const OTP = () => {
  const [value, setValue] = useState('')
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT})
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })
  return (
    <View style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20, justifyContent: 'center'},
  codeFieldRoot: {
    // marginTop: 20,
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 50,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 12,
  },
  focusCell: {
    borderColor: '#3E57A7',
    // backgroundColor: 'red',
  },
})
export default OTP
