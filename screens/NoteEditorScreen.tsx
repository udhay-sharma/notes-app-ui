import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NoteEditorScreen({ onSave, onBack, darkMode }: any) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkMode ? "#111" : "#fff",
      }}
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ImageBackground
          source={require("../assets/header.png")}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.overlay}>
            <Pressable style={styles.backButton} onPress={onBack}>
              <Text style={styles.buttonText}>Back</Text>
            </Pressable>

            <Pressable
              style={styles.saveButton}
              onPress={() => onSave(title, content)}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </ImageBackground>

        <View style={styles.editorContainer}>
          <TextInput
            placeholder="Note Title"
            placeholderTextColor={darkMode ? "#888" : "#666"}
            value={title}
            onChangeText={setTitle}
            style={[
              styles.titleInput,
              {
                color: darkMode ? "#fff" : "#000",
                backgroundColor: darkMode ? "#1e1e1e" : "#f3f3f3",
              },
            ]}
          />

          <TextInput
            placeholder="Start writing here..."
            placeholderTextColor={darkMode ? "#888" : "#666"}
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
            style={[
              styles.contentInput,
              {
                color: darkMode ? "#fff" : "#000",
                backgroundColor: darkMode ? "#1e1e1e" : "#f3f3f3",
              },
            ]}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 220,
    justifyContent: "flex-end",
  },

  headerImage: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  backButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  saveButton: {
    backgroundColor: "#4f46e5",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
  },

  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },

  editorContainer: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    fontSize: 24,
    fontWeight: "700",
    padding: 16,
    borderRadius: 18,
    marginBottom: 18,
  },

  contentInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 26,
    padding: 18,
    borderRadius: 18,
  },
});
