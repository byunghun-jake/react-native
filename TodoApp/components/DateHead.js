import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

function DateHead({ date }) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const formattedDate = `${year}년 ${month}월 ${day}일`

  const { top } = useSafeAreaInsets()

  return (
    <>
      <View style={[styles.statusBarPlaceholder, { height: top }]} />
      <StatusBar backgroundColor="#06B6D4" barStyle="light-content" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattedDate}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: "#06B6D4",
  },
  block: {
    padding: 16,
    backgroundColor: "#06B6D4",
  },
  dateText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
})

export default DateHead
