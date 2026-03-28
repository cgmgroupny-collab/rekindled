import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from './constants/theme';
import { useState, useEffect } from 'react';

const { width } = Dimensions.get('window');

const REFLECTIONS = [
  { q: "What if everything happening in our life had to happen, was planned for us, and is what is best for us?", a: "Melody Beattie", p: "Think of one worry you carried this week. What would change if you knew it would resolve perfectly?" },
  { q: "A relationship is not about this person and that person. It's what happens in between.", a: "Esther Perel", p: "What dynamic are you creating in your most important relationship?" },
  { q: "Humor and play is possibility. Possibility invites change. Change invites healing.", a: "Esther Perel", p: "When did you last truly play with a loved one? Plan one playful moment today." },
  { q: "Eroticism is the poetry that accompanies it. The quality of imagination, curiosity, playfulness, mystery.", a: "Esther Perel", p: "Where have you stopped being curious? Approach one area today with beginner's eyes." },
  { q: "You can take responsibility without blaming yourself, and hold others accountable without blaming them.", a: "Esther Perel", p: "Name your role in a past conflict without self-blame." },
  { q: "Today I will know that I don't have to worry about anything. If I worry, I choose to worry.", a: "Melody Beattie", p: "List three worries. For each: 'I release this, trusting it will resolve.'" },
  { q: "What if the people we love are experiencing exactly what they need to become what they were meant to become?", a: "Melody Beattie", p: "Is there someone you're trying to fix? What changes if you trust their journey?" },
];

const UPCOMING = [
  { label: "Valentine's Day", date: "Feb 14", days: 323, icon: "heart" },
  { label: "Your Anniversary", date: "Set date →", days: null, icon: "calendar" },
  { label: "Partner's Birthday", date: "Set date →", days: null, icon: "gift" },
];

export default function HomeScreen() {
  const [ref] = useState(REFLECTIONS[new Date().getDay() % REFLECTIONS.length]);
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const now = new Date();
  const dateStr = `${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`;

  return (
    <ScrollView style={s.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={s.header}>
        <View>
          <Text style={s.logo}>✿ Vivienne</Text>
          <Text style={s.dateText}>{dateStr}</Text>
        </View>
        <TouchableOpacity style={s.notifBtn}>
          <Ionicons name="notifications-outline" size={20} color={COLORS.muted} />
        </TouchableOpacity>
      </View>

      {/* Daily Reflection Card */}
      <View style={s.reflCard}>
        <View style={s.reflGradient} />
        <Text style={s.reflLabel}>TODAY'S REFLECTION</Text>
        <Text style={s.reflQuote}>"{ref.q}"</Text>
        <Text style={s.reflAuthor}>— {ref.a}</Text>
        <View style={s.reflPrompt}>
          <Text style={s.reflPromptLabel}>Vivienne asks:</Text>
          <Text style={s.reflPromptText}>{ref.p}</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={s.sectionTitle}>Quick Actions</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.actionsRow}>
        <TouchableOpacity style={[s.actionCard, { backgroundColor: 'rgba(196,122,122,0.1)' }]}>
          <Ionicons name="help-circle-outline" size={24} color={COLORS.rose} />
          <Text style={s.actionText}>How's Your{'\n'}Eroticism?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[s.actionCard, { backgroundColor: 'rgba(201,169,110,0.1)' }]}>
          <Ionicons name="gift-outline" size={24} color={COLORS.gold} />
          <Text style={s.actionText}>Find a{'\n'}Gift</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[s.actionCard, { backgroundColor: 'rgba(196,122,122,0.1)' }]}>
          <Ionicons name="airplane-outline" size={24} color={COLORS.rose} />
          <Text style={s.actionText}>Plan a{'\n'}Getaway</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[s.actionCard, { backgroundColor: 'rgba(201,169,110,0.1)' }]}>
          <Ionicons name="book-outline" size={24} color={COLORS.gold} />
          <Text style={s.actionText}>Inner Work{'\n'}Journal</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Upcoming Dates */}
      <Text style={s.sectionTitle}>Important Dates</Text>
      {UPCOMING.map((d, i) => (
        <TouchableOpacity key={i} style={s.dateCard}>
          <View style={[s.dateIcon, { backgroundColor: i === 0 ? 'rgba(196,122,122,0.12)' : 'rgba(201,169,110,0.08)' }]}>
            <Ionicons name={d.icon} size={18} color={i === 0 ? COLORS.rose : COLORS.gold} />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.dateLabel}>{d.label}</Text>
            <Text style={s.dateValue}>{d.date}</Text>
          </View>
          {d.days !== null ? (
            <View style={s.daysBadge}>
              <Text style={s.daysText}>{d.days}d</Text>
            </View>
          ) : (
            <Ionicons name="chevron-forward" size={16} color={COLORS.faint} />
          )}
        </TouchableOpacity>
      ))}

      {/* Premium CTA */}
      <TouchableOpacity style={s.premiumCard}>
        <Text style={s.premiumTitle}>Unlock Vivienne Premium</Text>
        <Text style={s.premiumDesc}>AI-powered gift suggestions, trip planning, date reminders & unlimited relationship advice</Text>
        <View style={s.premiumPrice}>
          <Text style={s.priceText}>$4.99/mo</Text>
          <Text style={s.priceSave}>or $39.99/year (save 33%)</Text>
        </View>
        <View style={s.premiumBtn}>
          <Text style={s.premiumBtnText}>Start Free Trial</Text>
        </View>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 60 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: SIZES.padding, marginBottom: 24 },
  logo: { fontSize: 24, fontWeight: '500', color: COLORS.cream, letterSpacing: 0.5 },
  dateText: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  notifBtn: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, borderColor: COLORS.faint, justifyContent: 'center', alignItems: 'center' },

  reflCard: { marginHorizontal: SIZES.padding, backgroundColor: COLORS.surface, borderRadius: 20, padding: 28, marginBottom: 28, overflow: 'hidden', borderWidth: 1, borderColor: COLORS.border },
  reflGradient: { position: 'absolute', top: 0, left: 0, right: 0, height: 3, backgroundColor: COLORS.rose },
  reflLabel: { fontSize: 9, fontWeight: '700', letterSpacing: 2.5, color: COLORS.gold, marginBottom: 16 },
  reflQuote: { fontSize: 18, fontWeight: '400', fontStyle: 'italic', color: COLORS.cream, lineHeight: 28, marginBottom: 12 },
  reflAuthor: { fontSize: 12, color: COLORS.muted, marginBottom: 20 },
  reflPrompt: { backgroundColor: COLORS.bg2, borderRadius: 12, padding: 16, borderLeftWidth: 3, borderLeftColor: COLORS.gold },
  reflPromptLabel: { fontSize: 11, fontWeight: '700', color: COLORS.gold, marginBottom: 6 },
  reflPromptText: { fontSize: 14, color: COLORS.text2, lineHeight: 22 },

  sectionTitle: { fontSize: 11, fontWeight: '700', letterSpacing: 2, color: COLORS.muted, textTransform: 'uppercase', paddingHorizontal: SIZES.padding, marginBottom: 14 },

  actionsRow: { paddingLeft: SIZES.padding, marginBottom: 28 },
  actionCard: { width: 100, height: 100, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginRight: 12, borderWidth: 1, borderColor: COLORS.border },
  actionText: { fontSize: 11, fontWeight: '600', color: COLORS.cream, textAlign: 'center', marginTop: 8, lineHeight: 15 },

  dateCard: { flexDirection: 'row', alignItems: 'center', marginHorizontal: SIZES.padding, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.03)' },
  dateIcon: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginRight: 14 },
  dateLabel: { fontSize: 14, fontWeight: '500', color: COLORS.cream },
  dateValue: { fontSize: 12, color: COLORS.muted, marginTop: 2 },
  daysBadge: { backgroundColor: 'rgba(196,122,122,0.12)', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  daysText: { fontSize: 11, fontWeight: '700', color: COLORS.rose },

  premiumCard: { margin: SIZES.padding, marginTop: 28, backgroundColor: COLORS.surface, borderRadius: 20, padding: 28, borderWidth: 1, borderColor: COLORS.rose, overflow: 'hidden' },
  premiumTitle: { fontSize: 20, fontWeight: '600', color: COLORS.cream, marginBottom: 8 },
  premiumDesc: { fontSize: 13, color: COLORS.text2, lineHeight: 20, marginBottom: 16 },
  premiumPrice: { marginBottom: 20 },
  priceText: { fontSize: 28, fontWeight: '700', color: COLORS.rose },
  priceSave: { fontSize: 12, color: COLORS.gold, marginTop: 4 },
  premiumBtn: { backgroundColor: COLORS.rose, borderRadius: 100, paddingVertical: 16, alignItems: 'center' },
  premiumBtnText: { fontSize: 14, fontWeight: '700', color: '#fff', letterSpacing: 0.5 },
});
