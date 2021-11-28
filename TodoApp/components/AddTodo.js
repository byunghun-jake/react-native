import React, { useState } from "react"
import {
  Image,
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native"

function AddTodo({ onInsert }) {
  const [text, setText] = useState("")

  const addButton = (
    <View style={styles.buttonStyle}>
      <Image source={require("../assets/icons/add_white/add_white.png")} />
    </View>
  )

  const onPress = () => {
    onInsert(text)
    setText("")
    Keyboard.dismiss()
  }

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="할일을 입력하세요"
        style={styles.input}
        value={text}
        onChangeText={setText}
        onSubmitEditing={onPress}
        // IOS에서 EnterKey의 타입을 지정
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {addButton}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {addButton}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
    flex: 1,
  },
  circleWrapper: {
    overflow: "hidden",
    borderRadius: 24,
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    backgroundColor: "#2DD4BF",
    borderRadius: 24,
  },
})

export default AddTodo
