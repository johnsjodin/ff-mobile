import {View, Text, StyleSheet} from "react-native";
import { API_BASE } from '../api';
 
const API_URL = `${API_BASE}/api/factions`;

function FactionDetailScreen({ route }) {
  const { faction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{faction.name}</Text>
      <Text style={styles.status}>
        {faction.description ? faction.description : "No description."}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff"},
  title: { fontSize: 20, fontWeight: "bold", backgroundColor: "#fff"},
  status: { fontSize: 16, color: "#666"}
})

export default FactionDetailScreen;