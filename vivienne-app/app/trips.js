import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from './constants/theme';

const TRIPS = [
  { name: 'Napa Valley Wine Weekend', location: 'California', price: '$450–$800', duration: '2 nights', emoji: '🍷', desc: 'Wine tasting, vineyard tours, spa, fine dining for two.', tag: 'Popular' },
  { name: 'Sedona Desert Retreat', location: 'Arizona', price: '$350–$600', duration: '2 nights', emoji: '🏜️', desc: 'Red rock hiking, couples spa, stargazing, meditation.', tag: '' },
  { name: 'Charleston Romantic Escape', location: 'South Carolina', price: '$400–$700', duration: '3 nights', emoji: '🏛️', desc: 'Historic charm, carriage rides, farm-to-table dining.', tag: 'New' },
  { name: 'Santorini Sunset Package', location: 'Greece', price: '$1,200–$2,500', duration: '5 nights', emoji: '🌅', desc: 'Cliffside suite, private sunset cruise, wine tasting.', tag: 'Premium' },
  { name: 'Vermont Cabin Getaway', location: 'New England', price: '$250–$450', duration: '2 nights', emoji: '🏔️', desc: 'Cozy cabin, fireplace, hiking, local brewery tour.', tag: '' },
  { name: 'Tulum Beach Retreat', location: 'Mexico', price: '$600–$1,200', duration: '4 nights', emoji: '🏖️', desc: 'Beachfront bungalow, cenote swimming, mayan ruins.', tag: 'Popular' },
  { name: 'Savannah B&B Weekend', location: 'Georgia', price: '$300–$500', duration: '2 nights', emoji: '🌳', desc: 'Historic B&B, garden walks, riverfront dining.', tag: '' },
  { name: 'Big Sur Coastal Drive', location: 'California', price: '$500–$900', duration: '3 nights', emoji: '🌊', desc: 'Pacific coast highway, cliffside hotel, hot springs.', tag: '' },
];

export default function TripsScreen() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>✿ Getaways</Text>
        <Text style={s.sub}>Couples trips curated by Vivienne</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {TRIPS.map((t, i) => (
          <TouchableOpacity key={i} style={s.card}>
            <View style={s.cardLeft}>
              <Text style={{ fontSize: 32 }}>{t.emoji}</Text>
            </View>
            <View style={s.cardContent}>
              <View style={s.cardTop}>
                <Text style={s.cardName}>{t.name}</Text>
                {t.tag ? <View style={[s.tag, t.tag === 'Premium' && { backgroundColor: COLORS.gold }]}><Text style={s.tagText}>{t.tag}</Text></View> : null}
              </View>
              <Text style={s.cardLoc}>{t.location} · {t.duration}</Text>
              <Text style={s.cardDesc}>{t.desc}</Text>
              <View style={s.cardFoot}>
                <Text style={s.cardPrice}>{t.price}</Text>
                <TouchableOpacity style={s.bookBtn}>
                  <Text style={s.bookText}>Explore</Text>
                  <Ionicons name="arrow-forward" size={12} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 60 },
  header: { paddingHorizontal: SIZES.padding, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: '500', color: COLORS.cream },
  sub: { fontSize: 12, color: COLORS.gold, marginTop: 2, letterSpacing: 1 },
  card: { flexDirection: 'row', marginHorizontal: SIZES.padding, backgroundColor: COLORS.surface, borderRadius: 16, marginBottom: 12, overflow: 'hidden', borderWidth: 1, borderColor: COLORS.border },
  cardLeft: { width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.bg2 },
  cardContent: { flex: 1, padding: 16 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 },
  cardName: { fontSize: 15, fontWeight: '600', color: COLORS.cream, flex: 1, marginRight: 8 },
  tag: { backgroundColor: COLORS.rose, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 100 },
  tagText: { fontSize: 8, fontWeight: '800', color: '#fff', letterSpacing: 1, textTransform: 'uppercase' },
  cardLoc: { fontSize: 11, color: COLORS.gold, marginBottom: 6 },
  cardDesc: { fontSize: 12, color: COLORS.muted, lineHeight: 18, marginBottom: 12 },
  cardFoot: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPrice: { fontSize: 16, fontWeight: '700', color: COLORS.rose },
  bookBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: COLORS.gold, paddingHorizontal: 14, paddingVertical: 7, borderRadius: 100 },
  bookText: { fontSize: 11, fontWeight: '700', color: '#fff' },
});
