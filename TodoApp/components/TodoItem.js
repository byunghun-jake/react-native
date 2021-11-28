import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"

function TodoItem({ id, text, done }) {
  return (
    <View style={styles.item}>
      <View style={[styles.circle, done && styles.filled]}>
        {done && (
          <Image
            source={require("../assets/icons/check_white/check_white.png")}
          />
        )}
      </View>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderColor: "#26a69a",
    borderWidth: 1,
    marginRight: 16,
  },
  filled: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2DD4BF",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: "#333333",
  },
  lineThrough: {
    color: "#999999",
    textDecorationLine: "line-through",
  },
})

export default TodoItem
