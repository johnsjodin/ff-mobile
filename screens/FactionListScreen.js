import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';
import { API_BASE } from '../api';
 
const API_URL = `${API_BASE}/api/factions`;
 
function FactionListScreen({ navigation }) {
 
  const [factionList, setFactionList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch data.');
        }
 
        return response.json();
      })
      .then((data) => setFactionList(data))
      .catch(() => setError('Could not connect to the backend'))
      .finally(() => setLoading(false));
  }, []);
 
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Factions</Text>
          {loading && <Text>Loading factions...</Text>}
          {error && <Text style={styles.errorText}>{error}</Text>}
          {!loading && !error && (
          <FlatList
            data={factionList}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Text>No factions saved.</Text>}
            renderItem={({ item }) => (
             <TouchableOpacity
                style={styles.factionItem}
                onPress={() => navigation.navigate('FactionDetailScreen', { faction: item })}>
                <Text style={styles.factionText}>{item.name}</Text>
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
    factionItem: {
      padding: 12,
      margin: 8,
      backgroundColor: '#F0F0F0',
      borderRadius: 8,
    },
    factionText: {
      fontSize: 16,
    },
    errorText: {
      color: '#B00020',
    },
});
 
export default FactionListScreen;