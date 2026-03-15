import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Activity, Send } from 'lucide-react-native';

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}><Activity color="#ff7418" size={24} /></View>
        <View>
          <Text style={styles.title}>Siaga AI</Text>
          <Text style={styles.subtitle}>Model Lokal Aktif • Offline Ready</Text>
        </View>
      </View>
      
      <ScrollView style={{ padding: 20 }}>
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>Halo! Saya asisten darurat lokal Anda. Saya bisa membantu Anda dengan pertolongan pertama meskipun tanpa internet. Apa yang terjadi?</Text>
        </View>
        
        {['Cara menangani luka bakar', 'Pendarahan hebat', 'Tanda-tanda dehidrasi'].map((q, i) => (
          <TouchableOpacity key={i} style={styles.suggestion}><Text style={styles.suggestionText}>{q}</Text></TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput placeholder="Tanyakan bantuan darurat..." placeholderTextColor="#64748b" style={styles.input} />
        <TouchableOpacity style={styles.sendBtn}><Send size={20} color="white" /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1b3e' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 25, borderBottomWidth: 1, borderBottomColor: '#1e293b', gap: 15 },
  iconContainer: { padding: 12, backgroundColor: '#162a5a', borderRadius: 15 },
  title: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  subtitle: { color: '#22c55e', fontSize: 12, fontWeight: '600' },
  bubble: { backgroundColor: '#162a5a', padding: 20, borderRadius: 25, borderTopLeftRadius: 5, marginBottom: 20 },
  bubbleText: { color: 'white', lineHeight: 22 },
  suggestion: { padding: 18, borderRadius: 20, borderWidth: 1, borderColor: '#1e293b', marginBottom: 10 },
  suggestionText: { color: '#94a3b8' },
  inputContainer: { flexDirection: 'row', padding: 20, gap: 10, alignItems: 'center' },
  input: { flex: 1, backgroundColor: '#162a5a', borderRadius: 20, padding: 18, color: 'white' },
  sendBtn: { backgroundColor: '#ff7418', padding: 15, borderRadius: 18 }
});