import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { User, ShieldCheck, Fingerprint, Activity, Heart, Phone } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 25 }}>
        <Text style={styles.headerTitle}>Profil Pengguna</Text>
        
        <View style={styles.userCard}>
          <View style={styles.avatar}><User size={40} color="#94a3b8" />
            <View style={styles.check}><ShieldCheck size={12} color="white" /></View>
          </View>
          <View>
            <Text style={styles.userName}>Budi Santoso</Text>
            <Text style={styles.userId}>ID: SK-2983-4412</Text>
          </View>
        </View>

        <View style={styles.safetyCard}>
          <View style={styles.safetyHeader}>
            <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
              <Fingerprint color="#ff7418" size={20} />
              <Text style={styles.safetyTitle}>BIOMETRIC SAFETY LEDGER</Text>
            </View>
            <ShieldCheck size={16} color="#475569" />
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statBox}><Text style={styles.statLabel}>GOL. DARAH</Text><Text style={styles.statVal}>O Positif</Text></View>
            <View style={styles.statBox}><Text style={styles.statLabel}>BERAT/TINGGI</Text><Text style={styles.statVal}>70kg/175cm</Text></View>
          </View>

          <View style={styles.infoLine}>
            <Activity size={16} color="#ff7418" />
            <View><Text style={styles.infoLabel}>ALERGI UTAMA</Text><Text style={styles.infoVal}>Penisilin, Kacang</Text></View>
          </View>
          <View style={styles.infoLine}>
            <Heart size={16} color="#3b82f6" />
            <View><Text style={styles.infoLabel}>RIWAYAT MEDIS</Text><Text style={styles.infoVal}>Asma Ringan</Text></View>
          </View>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.sectionTitle}>Kontak Darurat</Text>
          <View style={styles.contactItem}>
            <View style={styles.contactInfo}>
              <View style={styles.smallAvatar}><User size={18} color="#94a3b8" /></View>
              <View><Text style={styles.contactName}>Siti Aminah (Istri)</Text><Text style={styles.contactPhone}>0812-3456-7890</Text></View>
            </View>
            <TouchableOpacity style={styles.callBtn}><Phone size={16} color="#22c55e" /></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1b3e' },
  headerTitle: { color: 'white', fontSize: 28, fontWeight: 'bold', marginBottom: 25 },
  userCard: { backgroundColor: '#162a5a', padding: 25, borderRadius: 30, flexDirection: 'row', alignItems: 'center', gap: 20 },
  avatar: { width: 70, height: 70, borderRadius: 35, backgroundColor: '#0d1b3e', justifyContent: 'center', alignItems: 'center', position: 'relative' },
  check: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#22c55e', padding: 4, borderRadius: 10, borderWidth: 2, borderColor: '#162a5a' },
  userName: { color: 'white', fontSize: 22, fontWeight: 'bold' },
  userId: { color: '#64748b', fontFamily: 'monospace', fontSize: 12 },
  safetyCard: { backgroundColor: '#162a5a', borderRadius: 35, padding: 25, marginTop: 25, borderTopWidth: 3, borderTopColor: '#ff7418' },
  safetyHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  safetyTitle: { color: '#ff7418', fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },
  statsRow: { flexDirection: 'row', gap: 15, marginBottom: 25 },
  statBox: { flex: 1, backgroundColor: '#0d1b3e', padding: 15, borderRadius: 20 },
  statLabel: { color: '#64748b', fontSize: 10, fontWeight: 'bold', marginBottom: 5 },
  statVal: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  infoLine: { flexDirection: 'row', gap: 15, marginBottom: 20 },
  infoLabel: { color: '#64748b', fontSize: 10, fontWeight: 'bold' },
  infoVal: { color: 'white', fontSize: 15, fontWeight: 'bold' },
  contactCard: { backgroundColor: '#162a5a', borderRadius: 30, padding: 25, marginTop: 20 },
  sectionTitle: { color: 'white', fontWeight: 'bold', marginBottom: 15 },
  contactItem: { backgroundColor: '#0d1b3e', padding: 15, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  contactInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  smallAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#162a5a', justifyContent: 'center', alignItems: 'center' },
  contactName: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  contactPhone: { color: '#64748b', fontSize: 12 },
  callBtn: { padding: 10, backgroundColor: 'rgba(34,197,94,0.1)', borderRadius: 12 }
});