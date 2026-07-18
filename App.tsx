/**
 * @format
 */

import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { screens, type ScreenDefinition } from './src/screens';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedScreen, setSelectedScreen] = useState<ScreenDefinition>(
    screens[0],
  );

  const selectedIndex = screens.findIndex(
    screen => screen.id === selectedScreen.id,
  );
  const currentIndex = selectedIndex >= 0 ? selectedIndex : 0;
  const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < screens.length - 1;
  const ActiveScreen = selectedScreen.component;

  function goToScreen(index: number) {
    const nextScreen = screens[index];

    if (nextScreen != null) {
      setSelectedScreen(nextScreen);
    }
  }

  return (
    <View style={[styles.app, isDarkMode && styles.appDark]}>
      <ScrollView contentContainerStyle={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>Figma screen scaffold</Text>
            <Text style={styles.title}>E-learning pages</Text>
          </View>
          <View style={styles.countBadge}>
            <Text style={styles.countValue}>{screens.length}</Text>
            <Text style={styles.countLabel}>screens</Text>
          </View>
        </View>

        <View style={styles.layout}>
          <View style={styles.directory}>
            <Text style={styles.sectionTitle}>Screen directory</Text>
            <Text style={styles.sectionCopy}>
              Every Figma screen has a unique component name and route-friendly
              identifier.
            </Text>

            <View style={styles.screenGrid}>
              {screens.map(screen => {
                const isSelected = screen.id === selectedScreen.id;

                return (
                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{ selected: isSelected }}
                    key={screen.id}
                    onPress={() => setSelectedScreen(screen)}
                    style={({ pressed }) => [
                      styles.screenCard,
                      isSelected && styles.screenCardActive,
                      pressed && styles.screenCardPressed,
                    ]}>
                    <Text
                      style={[
                        styles.screenNumber,
                        isSelected && styles.screenNumberActive,
                      ]}>
                      {String(screen.order).padStart(2, '0')}
                    </Text>
                    <Text
                      style={[
                        styles.screenTitle,
                        isSelected && styles.screenTitleActive,
                      ]}>
                      {screen.title}
                    </Text>
                    <Text style={styles.screenMeta}>{screen.componentName}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={styles.preview}>
            <View style={styles.previewHeader}>
              <View>
                <Text style={styles.sectionTitle}>Selected page</Text>
                <Text style={styles.pageCounter}>
                  Page {currentIndex + 1} of {screens.length}
                </Text>
              </View>
              <View style={styles.walkthroughControls}>
                <Pressable
                  accessibilityRole="button"
                  disabled={!canGoBack}
                  onPress={() => goToScreen(currentIndex - 1)}
                  style={({ pressed }) => [
                    styles.walkthroughButton,
                    !canGoBack && styles.walkthroughButtonDisabled,
                    pressed && canGoBack && styles.walkthroughButtonPressed,
                  ]}>
                  <Text
                    style={[
                      styles.walkthroughButtonText,
                      !canGoBack && styles.walkthroughButtonTextDisabled,
                    ]}>
                    Previous
                  </Text>
                </Pressable>
                <Pressable
                  accessibilityRole="button"
                  disabled={!canGoForward}
                  onPress={() => goToScreen(currentIndex + 1)}
                  style={({ pressed }) => [
                    styles.walkthroughButton,
                    !canGoForward && styles.walkthroughButtonDisabled,
                    pressed && canGoForward && styles.walkthroughButtonPressed,
                  ]}>
                  <Text
                    style={[
                      styles.walkthroughButtonText,
                      !canGoForward && styles.walkthroughButtonTextDisabled,
                    ]}>
                    Next
                  </Text>
                </Pressable>
              </View>
            </View>
            <Text style={styles.sectionCopy}>
              Use the controls to walk through the Figma sequence, or tap any
              page in the directory.
            </Text>
            <ActiveScreen />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f4eddf',
  },
  appDark: {
    backgroundColor: '#15130f',
  },
  page: {
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 26,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#213328',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: 1180,
    padding: 24,
    width: '100%',
  },
  eyebrow: {
    color: '#f0c55f',
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.7,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#fff8ea',
    fontSize: 38,
    fontWeight: '900',
    letterSpacing: -1.1,
  },
  countBadge: {
    alignItems: 'center',
    backgroundColor: '#f0c55f',
    borderRadius: 22,
    minWidth: 92,
    paddingHorizontal: 18,
    paddingVertical: 14,
  },
  countValue: {
    color: '#1b1710',
    fontSize: 28,
    fontWeight: '900',
  },
  countLabel: {
    color: '#514120',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  layout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1180,
    width: '100%',
  },
  directory: {
    flexBasis: 560,
    flexGrow: 1,
    marginTop: 18,
    paddingRight: 8,
  },
  preview: {
    flexBasis: 420,
    flexGrow: 1,
    marginTop: 18,
    paddingLeft: 8,
  },
  sectionTitle: {
    color: '#213328',
    fontSize: 22,
    fontWeight: '900',
    marginBottom: 6,
  },
  sectionCopy: {
    color: '#6d6252',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 14,
  },
  pageCounter: {
    color: '#d45c38',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 6,
  },
  previewHeader: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  walkthroughControls: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  walkthroughButton: {
    backgroundColor: '#213328',
    borderRadius: 999,
    marginLeft: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  walkthroughButtonDisabled: {
    backgroundColor: '#d9cbb5',
  },
  walkthroughButtonPressed: {
    opacity: 0.78,
  },
  walkthroughButtonText: {
    color: '#fff8ea',
    fontSize: 12,
    fontWeight: '900',
  },
  walkthroughButtonTextDisabled: {
    color: '#91846e',
  },
  screenGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5,
  },
  screenCard: {
    backgroundColor: '#fffaf0',
    borderColor: '#e1d3bd',
    borderRadius: 18,
    borderWidth: 1,
    flexBasis: 168,
    flexGrow: 1,
    margin: 5,
    minHeight: 116,
    padding: 14,
  },
  screenCardActive: {
    backgroundColor: '#213328',
    borderColor: '#213328',
  },
  screenCardPressed: {
    opacity: 0.78,
  },
  screenNumber: {
    color: '#d45c38',
    fontSize: 13,
    fontWeight: '900',
    marginBottom: 10,
  },
  screenNumberActive: {
    color: '#f0c55f',
  },
  screenTitle: {
    color: '#242017',
    fontSize: 15,
    fontWeight: '900',
    lineHeight: 20,
  },
  screenTitleActive: {
    color: '#fff8ea',
  },
  screenMeta: {
    color: '#958872',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
    marginTop: 8,
  },
});

export default App;
