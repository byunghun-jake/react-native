import React from "react"
import {Platform, Pressable, StyleSheet, View} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"

function FloatingWriteButton() {
  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === "ios" && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: "white"}}>
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 999,
    // IOS
    shadowColor: "#4d4d4d",
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Android
    elevation: 5,
    // Android 물결효과가 radius 밖으로 나가지 않도록 설정
    // IOS는 overflow가 hidden일 경우 그림자가 보이지 않음
    overflow: Platform.select({android: "hidden"}),
  },
  button: {
    width: 56,
    height: 56,
    overflow: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009688",
  },
  icon: {
    color: "white",
  },
})

export default FloatingWriteButton
