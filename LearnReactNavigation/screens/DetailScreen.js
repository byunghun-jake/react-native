import { useRoute } from "@react-navigation/core"
import React, { useEffect } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

function IDText() {
  const route = useRoute()
  return <Text style={styles.text}>id: {route.params.id}</Text>
}

function DetailScreen({ route, navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세페이지: ${route.params.id}`,
    })
  }, [navigation])

  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <IDText />
      <View style={styles.buttons}>
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
        <Button
          title="다음"
          onPress={() => navigation.push("Detail", { id: route.params.id + 1 })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
  },
  buttons: {
    flexDirection: "row",
  },
})

export default DetailScreen
