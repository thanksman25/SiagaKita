import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { MapPin, Clock } from 'lucide-react-native';

export default function MapScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 25 }}>
        <Text style={styles.badge}>RESPON CEPAT UNTUK WISATA AMAN</Text>
        <Text style={styles.title}>MULTI-AGENCY REAL-TIME MAP</Text>
        <View style={styles.liveContainer}>
          <Text style={styles.trackingText}>Tracking lapangan</Text>
          <View style={styles.liveBadge}><Text style={styles.liveText}>LIVE</Text></View>
        </View>

        <View style={styles.mapBox}>
          {/* Grid background simulation */}
          <View style={styles.mapInner}>
            <View style={[styles.unit, {backgroundColor: '#ff7418', top: '20%', left: '20%'}]}><Text style={styles.unitText}>SOS</Text></View>
            <View style={[styles.unit, {backgroundColor: 'white', top: '45%', left: '40%'}]}><Text style={[styles.unitText, {color: 'black'}]}>Medis</Text></View>
            <View style={[styles.unit, {backgroundColor: '#2563eb', bottom: '25%', right: '20%'}]}><Text style={styles.unitText}>BASARNAS</Text></View>
            <View style={[styles.unit, {backgroundColor: '#0d9488', bottom: '40%', right: '10%'}]}><Text style={styles.unitText}>BPBD</Text></View>
          </View>
          
          <View style={styles.locationBar}>
            <View style={styles.locItem}><MapPin size={16} color="#64748b" /><View><Text style={styles.locLabel}>AREA</Text><Text style={styles.locVal}>Lhoknga, Aceh</Text></View></View>
            <View style={styles.locItem}><Clock size={16} color="#64748b" /><View><Text style={styles.locLabel}>ESTIMASI</Text><Text style={styles.locVal}>4 menit</Text></View></View>
          </View>
        </View>

        <View style={styles.logCard}><Text style={styles.logText}>BASARNAS Unit 01 - Mendekati lokasi</Text></View>
        <View style={styles.logCard}><Text style={styles.logText}>BPBD - Rute telah disinkronkan</Text></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1b3e' },
  badge: { color: '#ff7418', fontWeight: 'bold', fontSize: 11, letterSpacing: 1 },
  title: { color: 'white', fontSize: 24, fontWeight: '900', marginTop: 8 },
  liveContainer: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 5 },
  trackingText: { color: '#94a3b8' },
  liveBadge: { backgroundColor: '#2563eb', paddingHorizontal: 6, borderRadius: 4 },
  liveText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  mapBox: { backgroundColor: '#162a5a', borderRadius: 40, marginTop: 25, padding: 20, overflow: 'hidden' },
  mapInner: { height: 280, backgroundColor: '#09122b', borderRadius: 25, position: 'relative' },
  unit: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12, position: 'absolute' },
  unitText: { color: 'white', fontSize: 10, fontWeight: 'bold' },
  locationBar: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 },
  locItem: { flexDirection: 'row', gap: 10, alignItems: 'center' },
  locLabel: { color: '#64748b', fontSize: 10, fontWeight: 'bold' },
  locVal: { color: 'white', fontWeight: 'bold' },
  logCard: { backgroundColor: '#162a5a', padding: 20, borderRadius: 20, marginTop: 12, borderWidth: 1, borderColor: '#1e293b' },
  logText: { color: '#94a3b8', fontSize: 13 }
});