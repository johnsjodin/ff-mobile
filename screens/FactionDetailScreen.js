import {View, Text, StyleSheet, Image} from "react-native";
import { API_BASE } from '../api';
 
const API_URL = `${API_BASE}/api/factions`;

function FactionDetailScreen({ route }) {
  const { faction } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.emblemContainer}>
          {faction.emblemFileName && (
              <Image
                source={{ uri: `${API_BASE}/uploads/${faction.emblemFileName}` }}
                style={styles.emblem}
              />
            )}
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{faction.name}</Text>
          <Text style={styles.motto}>
            {faction.motto ? faction.motto : ""}
          </Text>
        </View>
        <View style={styles.desc}>
          <Text style={styles.desc}>
            {faction.description ? faction.description : "No description."}
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff"},
  title: { fontSize: 20, fontWeight: "bold", backgroundColor: "#fff", textAlign: "center", marginTop: 8},
  motto: { fontSize: 16, fontStyle: "italic", color: "#666", textAlign: "center", marginTop: 8},
  desc: { flexDirection: "column", fontSize: 16, color: "#666", marginTop: 16}, 
  emblem: { width: 100, height: 100, alignSelf: "center" },
})

export default FactionDetailScreen;