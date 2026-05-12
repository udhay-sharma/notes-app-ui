import React, { useState } from "react";
import NotesListScreen from "./screens/NotesListScreen";
import NoteEditorScreen from "./screens/NoteEditorScreen";
import { useColorScheme } from "react-native";

export default function App() {
  const systemTheme = useColorScheme();
  const isSystemDark = systemTheme === "dark";

  const [darkMode, setDarkMode] = useState(isSystemDark);

  const [screen, setScreen] = useState("list");

  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "React Native Notes",
      content: "Need to practice FlatList and styling concepts.",
      date: "Today",
    },
    {
      id: "2",
      title: "UI Design Ideas",
      content: "Use FlatList, View, TextInput, Pressable properly.",
      date: "Yesterday",
    },
    {
      id: "3",
      title: "Assignment Goals",
      content: "Complete notes app UI with dark mode support.",
      date: "2 days ago",
    },
    {
      id: "4",
      title: "Study Plan",
      content: "Study for the upcoming College exams also.",
      date: "1 days ago",
    },
    {
      id: "5",
      title: "Testing Note",
      content: "This one is just for testing",
      date: "1 days ago",
    },
  ]);

  const addNote = (title: string, content: string) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      date: "Today",
    };

    setNotes([newNote, ...notes]);
    setScreen("list");
  };

  if (screen === "editor") {
    return (
      <NoteEditorScreen
        onSave={addNote}
        onBack={() => setScreen("list")}
        darkMode={darkMode}
      />
    );
  }

  return (
    <NotesListScreen
      notes={notes}
      onAddNote={() => setScreen("editor")}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
    />
  );
}
