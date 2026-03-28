import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from './constants/theme';
import { useState } from 'react';

export default function ProfileScreen() {
  const [notifs, setNotifs] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <Text style={s.title}>✿ Profile</Text>
      </View>

      {/* Avatar */}
      <View style={s.avatarSection}>
        <View style={s.avatar}>
          <Ionicons name="person" size={32} color={COLORS.muted} />
        </View>
        <TouchableOpacity><Text style={s.editPhoto}>Edit Photo</Text></TouchableOpacity>
      </View>

      {/* Partner Info */}
      <Text style={s.sectionTitle}>PARTNER DETAILS</Text>
      <View style={s.card}>
        <View style={s.field}>
          <Text style={s.fieldLabel}>Partner's Name</Text>
          <TextInput style={s.input} placeholder="Enter name..." placeholderTextColor={COLORS.muted} />
        </View>
        <View style={s.field}>
          <Text style={s.fieldLabel}>Anniversary Date</Text>
          <TouchableOpacity style={s.dateBtn}>
            <Ionicons name="calendar-outline" size={16} color={COLORS.gold} />
            <Text style={s.dateBtnText}>Set Date</Text>
          </TouchableOpacity>
        </View>
        <View style={s.field}>
          <Text style={s.fieldLabel}>Partner's Birthday</Text>
          <TouchableOpacity style={s.dateBtn}>
            <Ionicons name="gift-outline" size={16} color={COLORS.gold} />
            <Text style={s.dateBtnText}>Set Date</Text>
          </TouchableOpacity>
        </View>
        <View style={s.field}>
          <Text style={s.fieldLabel}>Location</Text>
          <TouchableOpacity style={s.dateBtn}>
            <Ionicons name="location-outline" size={16} color={COLORS.gold} />
            <Text style={s.dateBtnText}>Set Location (for local gifts)</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Preferences */}
      <Text style={s.sectionTitle}>PREFERENCES</Text>
      <View style={s.card}>
        <View style={s.settingRow}>
          <View style={{ flex: 1 }}>
            <Text style={s.settingLabel}>Date Reminders</Text>
            <Text style={s.settingDesc}>Get notified before important dates</Text>
          </View>
          <Switch value={notifs} onValueChange={setNotifs} trackColor={{ true: COLORS.rose, false: COLORS.faint }} thumbColor="#fff" />
        </View>
        <View style={s.settingRow}>
          <View style={{ flex: 1 }}>
            <Text style={s.settingLabel}>Daily Reflections</Text>
            <Text style={s.settingDesc}>Receive morning wisdom from Vivienne</Text>
          </View>
          <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ true: COLORS.rose, false: COLORS.faint }} thumbColor="#fff" />
        </View>
      </View>

      {/* Quiz Result */}
      <Text style={s.sectionTitle}>YOUR EROTICISM TYPE</Text>
      <TouchableOpacity style={s.quizCard}>
        <Text style={s.quizEmoji}>🔥</Text>
        <Text style={s.quizType}>Take the Quiz</Text>
        <Text style={s.quizDesc}>Discover your erotic intelligence pattern — are you a Dormant Flame or a Living Flame?</Text>
        <View style={s.quizBtn}>
          <Text style={s.quizBtnText}>Start Quiz</Text>
        </View>
      </TouchableOpacity>

      {/* Subscription */}
      <Text style={s.sectionTitle}>SUBSCRIPTION</Text>
      <View style={s.card}>
        <View style={s.subRow}>
          <Text style={s.subLabel}>Current Plan</Text>
          <View style={s.freeBadge}><Text style={s.freeText}>FREE</Text></View>
        </View>
        <TouchableOpacity style={s.upgradeBtn}>
          <Text style={s.upgradeText}>Upgrade to Premium — $4.99/mo</Text>
        </TouchableOpacity>
      </View>

      {/* Links */}
      <View style={s.card}>
        {['Privacy Policy', 'Terms of Service', 'Contact Support', 'Rate Vivienne'].map((label, i) => (
          <TouchableOpacity key={i} style={s.linkRow}>
            <Text style={s.linkText}>{label}</Text>
            <Ionicons name="chevron-forward" size={14} color={COLORS.faint} />
          </TouchableOpacity>
        ))}
      </View>

      <Text style={s.version}>Vivienne v1.0.0</Text>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 60 },
  header: { paddingHorizontal: SIZES.padding, marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '500', color: COLORS.cream },

  avatarSection: { alignItems: 'center', marginBottom: 28 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: COLORS.surface, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: COLORS.border, marginBottom: 8 },
  editPhoto: { fontSize: 12, fontWeight: '600', color: COLORS.gold },

  sectionTitle: { fontSize: 10, fontWeight: '700', letterSpacing: 2.5, color: COLORS.gold, paddingHorizontal: SIZES.padding, marginBottom: 10, marginTop: 8 },

  card: { marginHorizontal: SIZES.padding, backgroundColor: COLORS.surface, borderRadius: 16, padding: 16, marginBottom: 20, borderWidth: 1, borderColor: COLORS.border },

  field: { marginBottom: 16 },
  fieldLabel: { fontSize: 11, fontWeight: '600', color: COLORS.muted, marginBottom: 6, letterSpacing: 0.5 },
  input: { backgroundColor: COLORS.bg2, borderRadius: 10, padding: 12, color: COLORS.cream, fontSize: 14, borderWidth: 1, borderColor: COLORS.faint },
  dateBtn: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: COLORS.bg2, borderRadius: 10, padding: 12, borderWidth: 1, borderColor: COLORS.faint },
  dateBtnText: { fontSize: 13, color: COLORS.muted },

  settingRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.03)' },
  settingLabel: { fontSize: 14, fontWeight: '500', color: COLORS.cream },
  settingDesc: { fontSize: 11, color: COLORS.muted, marginTop: 2 },

  quizCard: { marginHorizontal: SIZES.padding, backgroundColor: COLORS.surface, borderRadius: 16, padding: 24, alignItems: 'center', marginBottom: 20, borderWidth: 1, borderColor: COLORS.rose },
  quizEmoji: { fontSize: 32, marginBottom: 8 },
  quizType: { fontSize: 18, fontWeight: '600', color: COLORS.cream, marginBottom: 6 },
  quizDesc: { fontSize: 12, color: COLORS.text2, textAlign: 'center', lineHeight: 18, marginBottom: 16 },
  quizBtn: { backgroundColor: COLORS.rose, borderRadius: 100, paddingVertical: 12, paddingHorizontal: 32 },
  quizBtnText: { fontSize: 13, fontWeight: '700', color: '#fff' },

  subRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  subLabel: { fontSize: 14, color: COLORS.cream },
  freeBadge: { backgroundColor: 'rgba(201,169,110,0.12)', paddingHorizontal: 10, paddingVertical: 3, borderRadius: 100 },
  freeText: { fontSize: 10, fontWeight: '800', color: COLORS.gold, letterSpacing: 1 },
  upgradeBtn: { backgroundColor: COLORS.rose, borderRadius: 100, paddingVertical: 14, alignItems: 'center' },
  upgradeText: { fontSize: 13, fontWeight: '700', color: '#fff' },

  linkRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.03)' },
  linkText: { fontSize: 14, color: COLORS.text2 },

  version: { textAlign: 'center', fontSize: 11, color: COLORS.faint, marginTop: 20 },
});
