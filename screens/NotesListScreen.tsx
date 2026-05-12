import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
  Switch,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NotesListScreen({
  notes,
  onAddNote,
  darkMode,
  setDarkMode,
}: any) {
  const { width } = useWindowDimensions();

  const [search, setSearch] = useState("");

  const filteredNotes = notes.filter((note: any) =>
    note.title.toLowerCase().includes(search.toLowerCase()),
  );

  const cardStyle = StyleSheet.compose(
    styles.card,
    darkMode && styles.darkCard,
  );

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#111" : "#fff",
        },
      ]}
    >
      {/* Heading */}
      <Text
        style={[
          styles.heading,
          {
            color: darkMode ? "#fff" : "#000",
          },
        ]}
      >
        My Notes
      </Text>

      {/* Search */}
      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={darkMode ? "#aaa" : "#666"}
        value={search}
        onChangeText={setSearch}
        style={[
          styles.searchInput,
          {
            backgroundColor: darkMode ? "#1e1e1e" : "#f2f2f2",
            color: darkMode ? "#fff" : "#000",
          },
        ]}
      />

      {/* Switch */}
      <View style={styles.switchRow}>
        <Text
          style={{
            color: darkMode ? "#fff" : "#000",
            fontSize: 16,
          }}
        >
          Dark Mode
        </Text>

        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>

      {/* Notes List */}
      <FlatList
        data={filteredNotes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={[
              cardStyle,
              {
                width: width > 600 ? "48%" : "100%",
              },
            ]}
          >
            <Text
              style={[
                styles.title,
                {
                  color: darkMode ? "#fff" : "#000",
                },
              ]}
            >
              {item.title}
            </Text>

            <Text
              style={[
                styles.content,
                {
                  color: darkMode ? "#ccc" : "#555",
                },
              ]}
            >
              {item.content}
            </Text>

            <Text
              style={[
                styles.date,
                {
                  color: darkMode ? "#888" : "#777",
                },
              ]}
            >
              {item.date}
            </Text>
          </Pressable>
        )}
      />

      {/* Floating Add Button */}
      <Pressable style={styles.addButton} onPress={onAddNote}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  heading: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
  },

  searchInput: {
    padding: 14,
    borderRadius: 14,
    marginBottom: 20,
    fontSize: 16,
  },

  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  card: {
    padding: 18,
    borderRadius: 18,
    marginBottom: 16,
    backgroundColor: "#f3f3f3",

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  darkCard: {
    backgroundColor: "#1e1e1e",
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },

  content: {
    fontSize: 15,
    marginBottom: 12,
    lineHeight: 22,
  },

  date: {
    fontSize: 13,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#4f46e5",
    width: 65,
    height: 65,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },

  addButtonText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
});
