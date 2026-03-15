import React, { useState, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { AlertCircle, FileText, BookOpen, Sun } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics'; 
import * as Speech from 'expo-speech'; // Ganti Audio dengan Speech

export default function HomeScreen() {
  const [sosProgress, setSosProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startHolding = () => {
    setIsHolding(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); // Getar awal mantap
    
    let progress = 0;
    timerRef.current = setInterval(() => {
      progress += 2;
      setSosProgress(progress);

      // Efek getar "ticking" setiap 10% agar terasa tegang
      if (progress % 10 === 0) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }

      if (progress >= 100) {
        if (timerRef.current) clearInterval(timerRef.current);
        triggerSOS();
      }
    }, 100);
  };

  const stopHolding = () => {
    if (isHolding && sosProgress < 100) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    setIsHolding(false);
    if (timerRef.current) clearInterval(timerRef.current);
    setSosProgress(0);
  };

  const triggerSOS = () => {
    // 1. Getar sukses
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    
    // 2. HP Bicara (Suara asisten)
    Speech.speak('Sinyal darurat terkirim. Bantuan sedang menuju lokasi Anda.', {
      language: 'id-ID',
      pitch: 1.0,
      rate: 1.0,
    });

    // 3. Alert visual
    Alert.alert("SIAGA KITA", "Sinyal SOS telah dipancarkan!");
    
    setIsHolding(false);
    setSosProgress(0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 44 }} />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.brandTitle}>SiagaKita</Text>
          <Text style={styles.brandSub}>Tekan dan tahan untuk bantuan</Text>
        </View>
        <TouchableOpacity style={styles.themeIcon}><Sun size={20} color="#ff7418" /></TouchableOpacity>
      </View>

      <View style={styles.sosSection}>
        <TouchableOpacity 
          onPressIn={startHolding} 
          onPressOut={stopHolding}
          activeOpacity={0.9}
          style={[styles.sosOuter, { transform: [{ scale: isHolding ? 1.1 : 1 }] }]}
        >
          <View style={styles.sosInner}>
            <AlertCircle size={80} color="white" />
            <Text style={styles.sosLabel}>SOS</Text>
            <Text style={styles.sosSub}>TAHAN 5 DETIK</Text>
          </View>
          
          {isHolding && (
            <View style={styles.progressOverlay}>
              <Svg height="260" width="260" viewBox="0 0 100 100">
                <Circle 
                  cx="50" cy="50" r="48" 
                  stroke="white" 
                  strokeWidth="4" 
                  fill="transparent"
                  strokeDasharray="301.4"
                  strokeDashoffset={301.4 - (301.4 * sosProgress) / 100} 
                  strokeLinecap="round"
                />
              </Svg>
            </View>
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconBox, {backgroundColor: '#1e293b'}]}><FileText color="#60a5fa" size={28} /></View>
          <Text style={styles.cardText}>Laporkan</Text>
          <Text style={styles.cardSub}>Kirim bukti & lokasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={[styles.iconBox, {backgroundColor: '#1e293b'}]}><BookOpen color="#fb923c" size={28} /></View>
          <Text style={styles.cardText}>Edukasi</Text>
          <Text style={styles.cardSub}>Panduan penyelamatan</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0d1b3e', paddingHorizontal: 25 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  brandTitle: { color: '#ff7418', fontSize: 28, fontWeight: '900' },
  brandSub: { color: '#94a3b8', fontSize: 13 },
  themeIcon: { padding: 10, backgroundColor: '#162a5a', borderRadius: 12 },
  sosSection: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  sosOuter: { 
    width: 240, height: 240, borderRadius: 120, backgroundColor: '#ff7418', 
    justifyContent: 'center', alignItems: 'center', elevation: 20, 
    shadowColor: '#ff7418', shadowOpacity: 0.6, shadowRadius: 30 
  },
  sosInner: { alignItems: 'center' },
  sosLabel: { color: 'white', fontSize: 50, fontWeight: '900' },
  sosSub: { color: 'white', fontSize: 12, fontWeight: 'bold', letterSpacing: 1 },
  progressOverlay: { position: 'absolute' },
  grid: { flexDirection: 'row', gap: 15, marginBottom: 30 },
  card: { flex: 1, backgroundColor: '#162a5a', padding: 20, borderRadius: 30, alignItems: 'center' },
  iconBox: { padding: 12, borderRadius: 20, marginBottom: 10 },
  cardText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  cardSub: { color: '#94a3b8', fontSize: 10, textAlign: 'center', marginTop: 4 },
});