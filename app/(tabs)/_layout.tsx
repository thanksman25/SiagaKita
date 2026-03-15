import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { ShieldCheck, MessageSquare, Map as MapIcon, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff7418', // Oranye sesuai desain
        tabBarInactiveTintColor: '#64748b',
        tabBarStyle: {
          backgroundColor: '#0d1b3e', // Deep Navy
          borderTopWidth: 1,
          borderTopColor: '#1e293b',
          height: Platform.OS === 'ios' ? 90 : 70,
          paddingBottom: Platform.OS === 'ios' ? 30 : 12,
          paddingTop: 8,
        },
        headerShown: false,
      }}>
      
      {/* PENTING: 'name' harus sesuai dengan nama file kamu di folder (tabs). 
          Jika nama filenya 'chat.tsx', maka name-nya harus 'chat'.
      */}

      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Beranda',
          tabBarLabel: 'Beranda',
          tabBarIcon: ({ color }) => <ShieldCheck size={24} color={color} /> 
        }} 
      />

      <Tabs.Screen 
        name="chat" 
        options={{ 
          title: 'Chat',
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => <MessageSquare size={24} color={color} /> 
        }} 
      />

      <Tabs.Screen 
        name="map" 
        options={{ 
          title: 'Map',
          tabBarLabel: 'Map',
          tabBarIcon: ({ color }) => <MapIcon size={24} color={color} /> 
        }} 
      />

      <Tabs.Screen 
        name="profile" 
        options={{ 
          title: 'Profil',
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color }) => <User size={24} color={color} /> 
        }} 
      />
    </Tabs>
  );
}