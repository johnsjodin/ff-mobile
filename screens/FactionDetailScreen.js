import {View, Text, StyleSheet} from "react-native";

function FactionDetailScreen({ route }) {
  const { faction } = route.params;

  return (
    <View style={styles.container}>
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
  title: { fontSize: 20, fontWeight: "bold", backgroundColor: "#fff", textAlign: "center"},
  motto: { fontSize: 16, fontStyle: "italic", color: "#666", textAlign: "center", marginTop: 8},
  desc: { flexDirection: "column", fontSize: 16, color: "#666", marginTop: 16}, 
})

export default FactionDetailScreen;