/**
 * @format
 */

import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const courseHighlights = [
  'Curated learning paths',
  'Progress tracking',
  'Mobile and web ready',
];

const stats = [
  { label: 'Lessons', value: '120+' },
  { label: 'Tracks', value: '8' },
  { label: 'Mentors', value: '24' },
];

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.safeArea, isDarkMode && styles.safeAreaDark]}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>E-learning workspace</Text>
          <Text style={styles.title}>Build skills without losing momentum.</Text>
          <Text style={styles.subtitle}>
            A shared React Native codebase now runs on Android, iOS, and the
            browser through React Native Web.
          </Text>

          <View style={styles.actions}>
            <Pressable
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.primaryAction,
                pressed && styles.primaryActionPressed,
              ]}>
              <Text style={styles.primaryActionText}>Start learning</Text>
            </Pressable>
            <Text style={styles.caption}>One app surface, three targets.</Text>
          </View>
        </View>

        <View style={styles.panel}>
          <Text style={styles.panelTitle}>What is ready</Text>
          {courseHighlights.map(item => (
            <View key={item} style={styles.highlightRow}>
              <View style={styles.highlightDot} />
              <Text style={styles.highlightText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.statsGrid}>
          {stats.map(stat => (
            <View key={stat.label} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5efe3',
  },
  safeAreaDark: {
    backgroundColor: '#16130f',
  },
  page: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  hero: {
    backgroundColor: '#223127',
    borderRadius: 34,
    maxWidth: 920,
    overflow: 'hidden',
    padding: 32,
    width: '100%',
  },
  eyebrow: {
    color: '#f1c766',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.6,
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  title: {
    color: '#fff8ea',
    fontSize: 44,
    fontWeight: '900',
    letterSpacing: -1.4,
    lineHeight: 50,
    maxWidth: 620,
  },
  subtitle: {
    color: '#d8cdb9',
    fontSize: 18,
    lineHeight: 28,
    marginTop: 18,
    maxWidth: 620,
  },
  actions: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 28,
  },
  primaryAction: {
    backgroundColor: '#f1c766',
    borderRadius: 999,
    marginRight: 16,
    paddingHorizontal: 22,
    paddingVertical: 13,
  },
  primaryActionPressed: {
    opacity: 0.82,
  },
  primaryActionText: {
    color: '#1d1a14',
    fontSize: 16,
    fontWeight: '800',
  },
  caption: {
    color: '#b9ab92',
    fontSize: 14,
    marginVertical: 12,
  },
  panel: {
    backgroundColor: '#fffaf0',
    borderColor: '#e1d4bf',
    borderRadius: 28,
    borderWidth: 1,
    marginTop: 20,
    maxWidth: 920,
    padding: 24,
    width: '100%',
  },
  panelTitle: {
    color: '#223127',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 12,
  },
  highlightRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 9,
  },
  highlightDot: {
    backgroundColor: '#d75837',
    borderRadius: 6,
    height: 12,
    marginRight: 12,
    width: 12,
  },
  highlightText: {
    color: '#3d372d',
    fontSize: 17,
    fontWeight: '600',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    maxWidth: 920,
    width: '100%',
  },
  statCard: {
    backgroundColor: '#ded0b8',
    borderRadius: 24,
    flexGrow: 1,
    margin: 6,
    minWidth: 150,
    padding: 22,
  },
  statValue: {
    color: '#223127',
    fontSize: 30,
    fontWeight: '900',
  },
  statLabel: {
    color: '#665a48',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 4,
    textTransform: 'uppercase',
  },
});

export default App;
