import React, { useEffect } from "react"
import { Button, View } from "react-native"

function HomeScreen({ navigation }) {
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: "홈",
  //   })
  // }, [navigation])

  return (
    <View>
      <Button
        title="Detail 1으로 이동"
        onPress={() => navigation.navigate("Detail", { id: 1 })}
      />
      <Button
        title="Detail 2으로 이동"
        onPress={() => navigation.navigate("Detail", { id: 2 })}
      />
      <Button
        title="Detail 3으로 이동"
        onPress={() => navigation.navigate("Detail", { id: 3 })}
      />
      <Button
        title="머리 없애러 가기기"
        onPress={() => navigation.navigate("Headless")}
      />
    </View>
  )
}

export default HomeScreen
