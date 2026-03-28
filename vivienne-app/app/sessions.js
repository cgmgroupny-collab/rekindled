import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from './constants/theme';

const FEATURES = [
  { icon: 'chatbubbles', title: 'Deep Relationship Audit', desc: 'Understand your patterns and growth edges' },
  { icon: 'bulb', title: 'Personalized Action Plan', desc: 'Concrete steps you can start today' },
  { icon: 'book', title: 'Follow-Up Resources', desc: 'Curated reading, exercises & reflections' },
  { icon: 'lock-closed', title: 'Completely Confidential', desc: 'A judgment-free zone for exploration' },
  { icon: 'mail', title: '7-Day Email Follow-Up', desc: 'Ongoing support after your session' },
  { icon: 'gift', title: 'Free Inner Work Journal', desc: '$14.99 value included with every session' },
];

export default function SessionsScreen() {
  return (
    <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <Text style={s.title}>✿ Private Sessions</Text>
        <Text style={s.sub}>One-on-one with Vivienne</Text>
      </View>

      {/* Price Card */}
      <View style={s.priceCard}>
        <Text style={s.price}>$249</Text>
        <Text style={s.perSession}>per session</Text>
        <View style={s.durRow}>
          <Ionicons name="time-outline" size={14} color={COLORS.text2} />
          <Text style={s.durText}>90 minutes · Zoom or Phone</Text>
        </View>
        <TouchableOpacity style={s.bookBtn}>
          <Text style={s.bookText}>Book Your Session</Text>
        </TouchableOpacity>
        <Text style={s.limited}>Limited availability · Next opening in 3 days</Text>
      </View>

      {/* What's Included */}
      <Text style={s.sectionTitle}>WHAT'S INCLUDED</Text>
      {FEATURES.map((f, i) => (
        <View key={i} style={s.featCard}>
          <View style={s.featIcon}>
            <Ionicons name={f.icon} size={18} color={COLORS.gold} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.featTitle}>{f.title}</Text>
            <Text style={s.featDesc}>{f.desc}</Text>
          </View>
        </View>
      ))}

      {/* Journal Card */}
      <View style={s.journalCard}>
        <Text style={{ fontSize: 32, marginBottom: 12 }}>📖</Text>
        <Text style={s.journalTitle}>The Inner Work Journal</Text>
        <Text style={s.journalDesc}>30-day guided journal + 52 conversation cards for couples. Digital download.</Text>
        <View style={s.journalPriceRow}>
          <Text style={s.journalPrice}>$14.99</Text>
          <Text style={s.journalWas}>$29.99</Text>
        </View>
        <TouchableOpacity style={s.journalBtn}>
          <Text style={s.journalBtnText}>Get The Journal</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 60 },
  header: { paddingHorizontal: SIZES.padding, marginBottom: 24 },
  title: { fontSize: 24, fontWeight: '500', color: COLORS.cream },
  sub: { fontSize: 12, color: COLORS.gold, marginTop: 2, letterSpacing: 1 },

  priceCard: { marginHorizontal: SIZES.padding, backgroundColor: COLORS.surface, borderRadius: 20, padding: 32, alignItems: 'center', borderWidth: 1, borderColor: COLORS.rose, marginBottom: 28 },
  price: { fontSize: 48, fontWeight: '600', color: COLORS.cream },
  perSession: { fontSize: 12, color: COLORS.muted, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 },
  durRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginBottom: 24 },
  durText: { fontSize: 13, color: COLORS.text2 },
  bookBtn: { backgroundColor: COLORS.rose, borderRadius: 100, paddingVertical: 16, paddingHorizontal: 48, width: '100%', alignItems: 'center', marginBottom: 12 },
  bookText: { fontSize: 14, fontWeight: '700', color: '#fff', letterSpacing: 0.5 },
  limited: { fontSize: 10, color: COLORS.muted },

  sectionTitle: { fontSize: 10, fontWeight: '700', letterSpacing: 2.5, color: COLORS.gold, paddingHorizontal: SIZES.padding, marginBottom: 14 },

  featCard: { flexDirection: 'row', alignItems: 'flex-start', marginHorizontal: SIZES.padding, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.03)', gap: 14 },
  featIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(201,169,110,0.08)', justifyContent: 'center', alignItems: 'center' },
  featTitle: { fontSize: 14, fontWeight: '600', color: COLORS.cream, marginBottom: 2 },
  featDesc: { fontSize: 12, color: COLORS.muted },

  journalCard: { margin: SIZES.padding, marginTop: 28, backgroundColor: COLORS.surface, borderRadius: 20, padding: 28, alignItems: 'center', borderWidth: 1, borderColor: COLORS.gold },
  journalTitle: { fontSize: 20, fontWeight: '600', color: COLORS.cream, marginBottom: 8 },
  journalDesc: { fontSize: 13, color: COLORS.text2, textAlign: 'center', lineHeight: 20, marginBottom: 16 },
  journalPriceRow: { flexDirection: 'row', alignItems: 'baseline', gap: 8, marginBottom: 16 },
  journalPrice: { fontSize: 32, fontWeight: '700', color: COLORS.gold },
  journalWas: { fontSize: 14, color: COLORS.faint, textDecorationLine: 'line-through' },
  journalBtn: { backgroundColor: COLORS.gold, borderRadius: 100, paddingVertical: 14, paddingHorizontal: 40 },
  journalBtnText: { fontSize: 14, fontWeight: '700', color: COLORS.bg },
});
