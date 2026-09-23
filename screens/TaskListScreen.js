import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
 
const API_URL = 'http://localhost:5000/api/tasks';
 
function TaskListScreen({ navigation }) {
 
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Kunde inte hämta uppgifterna');
        }
 
        return response.json();
      })
      .then((data) => setTaskList(data))
      .catch(() => setError('Kunde inte ansluta till backend'))
      .finally(() => setLoading(false));
  }, []);
 
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Uppgifter</Text>
          {loading && <Text>Laddar uppgifter...</Text>}
          {error && <Text style={styles.errorText}>{error}</Text>}
          {!loading && !error && (
          <FlatList
            data={taskList}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Text>Det finns inga uppgifter.</Text>}
            renderItem={({ item }) => (
             <TouchableOpacity
             style={styles.taskItem}
              onPress={() => navigation.navigate('TaskDetail', { task: item })}>
                <Text style={styles.taskText}>{item.text}</Text>
                </TouchableOpacity>
            )}
          />
          )}
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fefdfd',
    },
    header: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    taskItem: {
      padding: 12,
      margin: 8,
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
    },
    taskText: {
      fontSize: 16,
    },
    errorText: {
      color: '#B00020',
    },
});
 
export default TaskListScreen;