import React from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import TodoItem from "./TodoItem"

function TodoList({ todos, onToggle, onRemove }) {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <TodoItem {...item} onToggle={onToggle} onRemove={onRemove}>
          <Text>{item.text}</Text>
        </TodoItem>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#e1e1e1",
  },
})

export default TodoList
