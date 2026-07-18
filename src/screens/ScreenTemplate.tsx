import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ScreenDefinitionBase } from './types';

const groupAccents: Record<ScreenDefinitionBase['group'], string> = {
  Onboarding: '#f0c55f',
  Authentication: '#d45c38',
  Discovery: '#4f8f71',
  Course: '#396d89',
  Learning: '#745ba8',
  Inbox: '#c46d3d',
  Payments: '#2f7c80',
  Profile: '#7a6b48',
};

type ScreenTemplateProps = {
  screen: ScreenDefinitionBase;
};

export function ScreenTemplate({ screen }: ScreenTemplateProps) {
  const accent = groupAccents[screen.group];

  return (
    <View style={styles.phoneFrame}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.topBar, { backgroundColor: accent }]}>
          <Text style={styles.order}>{String(screen.order).padStart(2, '0')}</Text>
          <Text style={styles.group}>{screen.group}</Text>
        </View>

        <Text style={styles.title}>{screen.title}</Text>
        <Text style={styles.implementationHint}>Write {screen.componentName} code here.</Text>
        <Text style={styles.description}>{screen.description}</Text>

        <View style={styles.metaCard}>
          <Text style={styles.metaLabel}>Figma screen</Text>
          <Text style={styles.metaValue}>{screen.figmaName}</Text>
          <Text style={styles.metaLabel}>Component</Text>
          <Text style={styles.metaValue}>{screen.componentName}</Text>
          <Text style={styles.metaLabel}>Route name</Text>
          <Text style={styles.metaValue}>{screen.routeName}</Text>
        </View>

        <View style={styles.blockLarge} />
        <View style={styles.blockRow}>
          <View style={[styles.blockSmall, { backgroundColor: accent }]} />
          <View style={styles.blockSmallMuted} />
        </View>
        <View style={styles.action} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  phoneFrame: {
    backgroundColor: '#fffaf0',
    borderColor: '#dfd0b8',
    borderRadius: 34,
    borderWidth: 1,
    minHeight: 680,
    overflow: 'hidden',
    width: '100%',
  },
  content: {
    padding: 22,
  },
  topBar: {
    alignItems: 'center',
    borderRadius: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  order: {
    color: '#15120d',
    fontSize: 20,
    fontWeight: '900',
  },
  group: {
    color: '#15120d',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  title: {
    color: '#201c14',
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: -0.8,
    lineHeight: 36,
  },
  description: {
    color: '#6d6252',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 10,
  },
  implementationHint: {
    color: '#d45c38',
    fontSize: 14,
    fontWeight: '900',
    marginTop: 8,
  },
  metaCard: {
    backgroundColor: '#f3eadb',
    borderRadius: 22,
    marginTop: 20,
    padding: 18,
  },
  metaLabel: {
    color: '#8a7d67',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  metaValue: {
    color: '#241f16',
    fontSize: 15,
    fontWeight: '800',
    marginTop: 4,
  },
  blockLarge: {
    backgroundColor: '#efe1cd',
    borderRadius: 28,
    height: 150,
    marginTop: 22,
  },
  blockRow: {
    flexDirection: 'row',
    marginHorizontal: -5,
    marginTop: 10,
  },
  blockSmall: {
    borderRadius: 22,
    flex: 1,
    height: 92,
    marginHorizontal: 5,
  },
  blockSmallMuted: {
    backgroundColor: '#e8d8c0',
    borderRadius: 22,
    flex: 1,
    height: 92,
    marginHorizontal: 5,
  },
  action: {
    backgroundColor: '#201c14',
    borderRadius: 999,
    height: 52,
    marginTop: 22,
  },
});
