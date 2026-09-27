import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import { API_BASE } from '../api';
import { useState } from "react";

function FactionDetailScreen({ route }) {
  const { faction } = route.params;
  const [editing, setEditing] = useState(false);
  const [motto, setMotto] = useState(faction.motto ?? '');

  async function handleSave() {
    try {
      const response = await fetch(`${API_BASE}/api/factions/${faction.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...faction, motto }),
      });
      if (!response.ok) throw new Error(`Server responded with ${response.status}`);
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>

        {/* Emblem Section */}
        <View style={styles.emblemContainer}>
          {faction.emblemFileName && (
              <Image
                source={{ uri: `${API_BASE}/uploads/${faction.emblemFileName}` }}
                style={styles.emblem}
              />
            )}
        </View>

        {/* Title Section */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>
            {faction.name}
          </Text>
        </View>

        {/* Motto Section */}
        <View style={styles.mottoRow}>
          {editing ? (
            <TextInput
              value={motto}
              onChangeText={setMotto}
              style={styles.input}
            />) : (
            <Text style={styles.motto}>
              {motto ? motto : ""}
            </Text>
            )}
          <TouchableOpacity style={styles.touchable} onPress={editing ? handleSave : () => setEditing(true)}>
            <Text>{editing ? "Save" : "Edit"}</Text>
          </TouchableOpacity>
        </View>

        {/* Description Section */}
        <View style={styles.descRow}>
          <Text style={styles.desc}>
            {faction.description ? faction.description : "No description."}
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff"},
  
  titleRow: { alignItems: "center", marginBottom: 16 },
  title: { fontSize: 20, fontWeight: "bold", backgroundColor: "#fff", textAlign: "center", marginTop: 8},

  mottoRow: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 16 },
  motto: { fontSize: 16, fontStyle: "italic", color: "#666", marginTop: 8},
  input: { fontSize: 16, borderWidth: 1, borderColor: "#ccc", padding: 2 },
  touchable: { marginLeft: 8, padding: 4, backgroundColor: "#ddd", borderRadius: 4, borderColor: "#ccc", borderWidth: 1 },

  descRow: { alignItems: "flex-start", marginBottom: 16 },
  desc: { flexDirection: "column", fontSize: 16, color: "#666", marginTop: 16},

  emblemContainer: { alignItems: "center", marginBottom: 16 },
  emblem: { width: 100, height: 100 },
})

export default FactionDetailScreen;