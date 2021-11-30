import React, { useCallback, useEffect } from "react"
import { Text, View, Button } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import { useFocusEffect, useNavigation } from "@react-navigation/core"

const Tab = createMaterialBottomTabNavigator()

function OpenDetailButton({ onPress }) {
  return <Button title="Detail 1로 이동 - 1" onPress={onPress} />
}

function OpenDetailButtonTwo({ navigation }) {
  return (
    <Button
      title="Detail 1로 이동 - 2"
      onPress={() => navigation.push("Detail", { id: 1 })}
    />
  )
}

function OpenDetailButtonThree() {
  const navigation = useNavigation()

  return (
    <Button
      title="Detail 1로 이동 - 3"
      onPress={() => navigation.push("Detail", { id: 1 })}
    />
  )
}

function HomeScreen({ navigation }) {
  const onPress = () => {
    navigation.push("Detail", { id: 1 })
  }

  useFocusEffect(
    useCallback(() => {
      console.log("Home을 보는 중이에요")
      return () => {
        console.log("Home에서 벗어났어요!")
      }
    })
  )

  useEffect(() => {
    console.log("mounted")
    return () => {
      console.log("unmounted")
    }
  }, [])

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Detail 1로 이동"
        onPress={() => navigation.push("Detail", { id: 1 })}
      />
      <OpenDetailButton onPress={onPress} />
      <OpenDetailButtonTwo navigation={navigation} />
      <OpenDetailButtonThree />
    </View>
  )
}

function SearchScreen() {
  return <Text>Search</Text>
}

function NotificationScreen() {
  return <Text>Notification</Text>
}

function MessageScreen() {
  return <Text>Message</Text>
}

function MainScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" tabBarOptions={{ showIcon: true }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "홈",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
          tabBarColor: "black",
          tabBarBadge: "new",
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "검색",
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: "gray",
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "알림",
          tabBarIcon: ({ color }) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: "green",
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: "메시지",
          tabBarIcon: ({ color }) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: "blue",
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  )
}

export default MainScreen
