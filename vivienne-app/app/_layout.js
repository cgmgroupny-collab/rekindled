import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from './constants/theme';

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.bg,
            borderTopColor: 'rgba(255,255,255,0.04)',
            borderTopWidth: 1,
            height: 85,
            paddingBottom: 28,
            paddingTop: 8,
          },
          tabBarActiveTintColor: COLORS.rose,
          tabBarInactiveTintColor: COLORS.muted,
          tabBarLabelStyle: {
            fontFamily: 'System',
            fontSize: 10,
            fontWeight: '600',
            letterSpacing: 0.5,
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="gifts"
          options={{
            title: 'Gifts',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="gift-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="trips"
          options={{
            title: 'Getaways',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="airplane-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="sessions"
          options={{
            title: 'Sessions',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={22} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={22} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
