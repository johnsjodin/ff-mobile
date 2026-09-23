import {View, Text, StyleSheet} from "react-native";

function TaskDetailScreen({ route }) {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.text}</Text>
      <Text style={styles.status}>
        {task.done ? "KLAR" : "Inte klar än."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff"},
  title: { fontSize: 20, fontWeight: "bold", backgroundColor: "#fff"},
  status: { fontSize: 16, color: "#666"}
})

export default TaskDetailScreen;