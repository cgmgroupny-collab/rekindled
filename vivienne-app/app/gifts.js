import { View, Text, ScrollView, TouchableOpacity, TextInput, StyleSheet, Dimensions, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from './constants/theme';
import { useState } from 'react';

const CATEGORIES = ['All', 'Romantic', 'Self-Care', 'Experience', 'Home'];

const GIFTS = [
  { name: 'Couples Massage Experience', desc: 'Spa day for two with aromatherapy & private suite.', price: '$189–$450', emoji: '💆', cat: 'Experience', tag: 'Popular', url: 'https://amazon.com' },
  { name: 'Silk Robe & Eye Mask', desc: 'Mulberry silk in champagne or midnight navy.', price: '$175', emoji: '👘', cat: 'Self-Care', tag: 'Bestseller', url: 'https://amazon.com' },
  { name: 'Personalized Star Map', desc: 'The night sky on the date you met.', price: '$95', emoji: '⭐', cat: 'Romantic', tag: 'Popular', url: 'https://amazon.com' },
  { name: 'Weekend Getaway Voucher', desc: 'Boutique hotel + dinner for two.', price: '$400–$800', emoji: '✈️', cat: 'Experience', tag: 'Premium', url: 'https://amazon.com' },
  { name: 'Artisan Chocolate Collection', desc: '24-piece truffle collection. Single-origin cacao.', price: '$85', emoji: '🍫', cat: 'Romantic', tag: '', url: 'https://amazon.com' },
  { name: 'Aromatherapy Diffuser Set', desc: 'Ceramic diffuser with 6 essential oil blends.', price: '$89', emoji: '🕯️', cat: 'Home', tag: '', url: 'https://amazon.com' },
  { name: 'Luxury Candle Trio', desc: 'Fireside, Midnight Garden, Sunday Morning.', price: '$78', emoji: '🕯️', cat: 'Home', tag: '', url: 'https://amazon.com' },
  { name: 'Meditation Cushion Set', desc: 'Organic buckwheat zafu in earth tones.', price: '$120', emoji: '🧘', cat: 'Self-Care', tag: '', url: 'https://amazon.com' },
  { name: 'Handwritten Love Letter Kit', desc: 'Wax seal, calligraphy pen, guided prompts.', price: '$65', emoji: '💌', cat: 'Romantic', tag: '', url: 'https://amazon.com' },
  { name: 'Cashmere Throw Blanket', desc: 'Italian cashmere in warm neutral tones.', price: '$295', emoji: '🧣', cat: 'Home', tag: 'Luxury', url: 'https://amazon.com' },
  { name: 'Stargazing Experience', desc: 'Private telescope, champagne, blankets.', price: '$220', emoji: '🔭', cat: 'Experience', tag: '', url: 'https://amazon.com' },
  { name: 'Vintage Wine & Journal', desc: 'Aged Bordeaux + leather reflection journal.', price: '$145', emoji: '🍷', cat: 'Romantic', tag: '', url: 'https://amazon.com' },
];

export default function GiftsScreen() {
  const [cat, setCat] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = GIFTS.filter(g => (cat === 'All' || g.cat === cat) && (search === '' || g.name.toLowerCase().includes(search.toLowerCase())));

  return (
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>✿ Gift Shop</Text>
        <Text style={s.sub}>Curated by Vivienne</Text>
      </View>

      <View style={s.searchWrap}>
        <Ionicons name="search" size={16} color={COLORS.muted} style={{ marginRight: 8 }} />
        <TextInput style={s.searchInput} placeholder="Search gifts..." placeholderTextColor={COLORS.muted} value={search} onChangeText={setSearch} />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.catsRow}>
        {CATEGORIES.map(c => (
          <TouchableOpacity key={c} onPress={() => setCat(c)} style={[s.catBtn, cat === c && s.catActive]}>
            <Text style={[s.catText, cat === c && s.catTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.grid}>
          {filtered.map((g, i) => (
            <TouchableOpacity key={i} style={s.card} onPress={() => Linking.openURL(g.url)}>
              <View style={s.cardImg}>
                <Text style={{ fontSize: 36 }}>{g.emoji}</Text>
                {g.tag ? <View style={s.tag}><Text style={s.tagText}>{g.tag}</Text></View> : null}
              </View>
              <View style={s.cardBody}>
                <Text style={s.cardName}>{g.name}</Text>
                <Text style={s.cardDesc}>{g.desc}</Text>
                <View style={s.cardFoot}>
                  <Text style={s.cardPrice}>{g.price}</Text>
                  <TouchableOpacity style={s.buyBtn} onPress={() => Linking.openURL(g.url)}>
                    <Ionicons name="cart-outline" size={14} color="#fff" />
                    <Text style={s.buyText}>Buy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const cardW = (Dimensions.get('window').width - SIZES.padding * 2 - 12) / 2;
const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 60 },
  header: { paddingHorizontal: SIZES.padding, marginBottom: 16 },
  title: { fontSize: 24, fontWeight: '500', color: COLORS.cream },
  sub: { fontSize: 12, color: COLORS.gold, marginTop: 2, letterSpacing: 1 },
  searchWrap: { flexDirection: 'row', alignItems: 'center', marginHorizontal: SIZES.padding, backgroundColor: COLORS.surface, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10, marginBottom: 14, borderWidth: 1, borderColor: COLORS.border },
  searchInput: { flex: 1, color: COLORS.cream, fontSize: 14 },
  catsRow: { paddingLeft: SIZES.padding, marginBottom: 16 },
  catBtn: { paddingHorizontal: 18, paddingVertical: 8, borderRadius: 100, borderWidth: 1, borderColor: COLORS.faint, marginRight: 8 },
  catActive: { borderColor: COLORS.rose, backgroundColor: 'rgba(196,122,122,0.1)' },
  catText: { fontSize: 12, fontWeight: '600', color: COLORS.muted },
  catTextActive: { color: COLORS.rose },
  grid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: SIZES.padding, gap: 12 },
  card: { width: cardW, backgroundColor: COLORS.surface, borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: COLORS.border, marginBottom: 0 },
  cardImg: { height: 120, justifyContent: 'center', alignItems: 'center', backgroundColor: COLORS.bg2 },
  tag: { position: 'absolute', top: 8, right: 8, backgroundColor: COLORS.gold, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 100 },
  tagText: { fontSize: 8, fontWeight: '800', color: COLORS.bg, letterSpacing: 1, textTransform: 'uppercase' },
  cardBody: { padding: 14 },
  cardName: { fontSize: 13, fontWeight: '600', color: COLORS.cream, marginBottom: 4 },
  cardDesc: { fontSize: 11, color: COLORS.muted, lineHeight: 16, marginBottom: 10 },
  cardFoot: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardPrice: { fontSize: 14, fontWeight: '700', color: COLORS.rose },
  buyBtn: { flexDirection: 'row', alignItems: 'center', gap: 4, backgroundColor: COLORS.rose, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 100 },
  buyText: { fontSize: 11, fontWeight: '700', color: '#fff' },
});
