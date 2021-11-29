import AsyncStorage from "@react-native-community/async-storage"
import React, { useEffect, useState } from "react"
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"
import AddTodo from "./components/AddTodo"
import DateHead from "./components/DateHead"
import Empty from "./components/Empty"
import TodoList from "./components/TodoList"
import todosStorage from "./storages/todosStorage"

const DUMMY_TODOS = [
  { id: 1, text: "작업환경 설정", done: true },
  { id: 2, text: "리액트 네이티브 공부", done: false },
  { id: 3, text: "투두리스트 만들어보기", done: false },
]

function App() {
  const today = new Date()

  const [todos, setTodos] = useState([...DUMMY_TODOS])

  const onInsert = (text) => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
    const todo = {
      id: nextId,
      text,
      done: false,
    }
    setTodos((prevTodos) => {
      return [...prevTodos, { ...todo }]
    })
  }

  const onToggle = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    })
  }

  const onRemove = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error)
  }, [])

  useEffect(() => {
    // try {
    //   todosStorage.set(todos)
    // } catch (error) {
    //   console.log(error)
    // }
    todosStorage.set(todos).catch(console.error)
  }, [todos])

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["bottom"]} style={styles.block}>
        <KeyboardAvoidingView
          // behavior={Platform.OS === "ios" ? "padding" : undefined}
          // behavior={Platform.select({ ios: "padding", android: undefined })}
          behavior={Platform.select({ ios: "padding" })}
          style={styles.avoid}
        >
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  avoid: {
    flex: 1,
  },
})

export default App
