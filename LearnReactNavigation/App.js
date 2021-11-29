import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { View, Text, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { TouchableOpacity } from "react-native-gesture-handler"

const Drawer = createDrawerNavigator()

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  )
}

function SettingScreen({ navigation }) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        drawerContent={({ navigation }) => (
          <SafeAreaView>
            <Text>Custom Drawer</Text>
            <Button
              title="Drawer 닫기"
              onPress={() => navigation.closeDrawer()}
            />
          </SafeAreaView>
        )}
        screenOptions={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Text>Left</Text>
            </TouchableOpacity>
          ),
        })}
        // screenOptions={{
        //   drawerActiveBackgroundColor: "#fb8c00",
        //   drawerActiveTintColor: "white",
        //   drawerLabelStyle: {
        //     fontWeight: "bold",
        //   },
        // }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "홈",
          }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            title: "설정",
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App
