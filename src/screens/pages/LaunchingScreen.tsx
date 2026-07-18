import { StyleSheet, Text, View } from 'react-native';
import type { AppScreenComponent, ScreenDefinitionBase } from '../types';

const launchingScreen: ScreenDefinitionBase = {
  id: 'launching',
  order: 1,
  figmaName: '01_LAUNCHING',
  title: '01_LAUNCHING',
  routeName: 'Launching',
  componentName: 'LaunchingScreen',
  group: 'Onboarding',
  description: 'Splash screen used while the app initializes and loads session state.',
};

function LaunchingPage() {
  return (
    <View style={styles.container}>
      <View style={styles.stage}>
        <View style={styles.orbit} />
        <View style={styles.ticketShadow} />
        <View style={styles.ticket}>
          <View style={[styles.cutout, styles.cutoutLeftTop]} />
          <View style={[styles.cutout, styles.cutoutRightTop]} />
          <View style={[styles.cutout, styles.cutoutRightBottom]} />
          <View style={[styles.cutout, styles.cutoutBottom]} />
          <View style={[styles.cardLine, styles.cardLineOne]} />
          <View style={[styles.cardLine, styles.cardLineTwo]} />
          <View style={[styles.cardLine, styles.cardLineThree]} />
        </View>

        <View style={[styles.bubble, styles.bubbleLargeTop]} />
        <View style={[styles.bubble, styles.bubbleSmallTop]} />
        <View style={[styles.bubble, styles.bubbleTinyTop]} />
        <View style={[styles.bubble, styles.bubbleLargeLeft]} />
        <View style={[styles.bubble, styles.bubbleMediumRight]} />
        <View style={[styles.bubble, styles.bubbleSmallRight]} />

        <View style={[styles.motionMarks, styles.motionMarksLeft]}>
          <View style={styles.motionLineLong} />
          <View style={styles.motionLine} />
          <View style={styles.motionLineShort} />
        </View>
        <View style={[styles.motionMarks, styles.motionMarksRight]}>
          <View style={styles.motionLineShort} />
          <View style={styles.motionLine} />
          <View style={styles.motionLineLong} />
        </View>

        <View style={styles.videoPlayer}>
          <View style={styles.videoScreen}>
            <View style={styles.playCircle}>
              <View style={styles.playTriangle} />
            </View>
            <View style={styles.progressTrack}>
              <View style={styles.progressFill} />
              <View style={styles.progressKnob} />
            </View>
          </View>
          <View style={styles.videoButton} />
        </View>

        <View style={styles.hand}>
          <View style={styles.palm} />
          <View style={styles.indexFinger} />
          <View style={[styles.finger, styles.fingerOne]} />
          <View style={[styles.finger, styles.fingerTwo]} />
          <View style={[styles.finger, styles.fingerThree]} />
          <View style={styles.thumb} />
        </View>

        <Text style={styles.logo}>Telead</Text>
        <Text style={styles.tagline}>LEARN FROM HOME</Text>
      </View>
    </View>
  );
}

LaunchingPage.displayName = launchingScreen.componentName;

export const LaunchingScreen: AppScreenComponent = Object.assign(LaunchingPage, {
  screen: launchingScreen,
});

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    aspectRatio: 864 / 1824,
    backgroundColor: '#1266f1',
    borderRadius: 34,
    maxWidth: 430,
    minHeight: 680,
    overflow: 'hidden',
    width: '100%',
  },
  stage: {
    height: 430,
    left: '50%',
    marginLeft: -215,
    marginTop: -215,
    position: 'absolute',
    top: '50%',
    width: 430,
  },
  orbit: {
    borderColor: '#dcecf2',
    borderRadius: 175,
    borderWidth: 2.5,
    height: 350,
    left: 40,
    position: 'absolute',
    top: 38,
    transform: [{ rotate: '-12deg' }],
    width: 350,
  },
  ticketShadow: {
    backgroundColor: '#c8dde4',
    borderRadius: 24,
    height: 238,
    left: 31,
    opacity: 0.35,
    position: 'absolute',
    top: 98,
    transform: [{ rotate: '45deg' }],
    width: 372,
  },
  ticket: {
    backgroundColor: '#dcecf2',
    borderRadius: 26,
    height: 238,
    left: 29,
    overflow: 'hidden',
    position: 'absolute',
    top: 94,
    transform: [{ rotate: '45deg' }],
    width: 372,
  },
  cutout: {
    backgroundColor: '#1266f1',
    borderRadius: 24,
    height: 46,
    position: 'absolute',
    width: 46,
  },
  cutoutLeftTop: {
    left: -20,
    top: 31,
  },
  cutoutRightTop: {
    right: -20,
    top: 38,
  },
  cutoutRightBottom: {
    bottom: 30,
    right: -20,
  },
  cutoutBottom: {
    bottom: -20,
    left: 220,
  },
  cardLine: {
    backgroundColor: '#b7d0d8',
    borderRadius: 999,
    height: 4,
    opacity: 0.85,
    position: 'absolute',
    right: 62,
    width: 34,
  },
  cardLineOne: {
    top: 54,
  },
  cardLineTwo: {
    top: 65,
    width: 42,
  },
  cardLineThree: {
    top: 76,
    width: 31,
  },
  bubble: {
    backgroundColor: '#bcd4dc',
    borderRadius: 999,
    opacity: 0.9,
    position: 'absolute',
  },
  bubbleLargeTop: {
    height: 48,
    left: 123,
    top: 92,
    width: 48,
  },
  bubbleSmallTop: {
    height: 24,
    left: 136,
    top: 52,
    width: 24,
  },
  bubbleTinyTop: {
    height: 16,
    left: 178,
    top: 56,
    width: 16,
  },
  bubbleLargeLeft: {
    height: 44,
    left: 75,
    top: 300,
    width: 44,
  },
  bubbleMediumRight: {
    height: 38,
    right: 89,
    top: 192,
    width: 38,
  },
  bubbleSmallRight: {
    height: 20,
    right: 111,
    top: 245,
    width: 20,
  },
  motionMarks: {
    position: 'absolute',
  },
  motionMarksLeft: {
    bottom: 59,
    left: 48,
    transform: [{ rotate: '45deg' }],
  },
  motionMarksRight: {
    right: 43,
    top: 237,
    transform: [{ rotate: '45deg' }],
  },
  motionLineLong: {
    backgroundColor: '#bcd4dc',
    borderRadius: 999,
    height: 4,
    marginVertical: 4,
    width: 48,
  },
  motionLine: {
    backgroundColor: '#bcd4dc',
    borderRadius: 999,
    height: 4,
    marginVertical: 4,
    width: 36,
  },
  motionLineShort: {
    backgroundColor: '#bcd4dc',
    borderRadius: 999,
    height: 4,
    marginVertical: 4,
    width: 25,
  },
  videoPlayer: {
    alignItems: 'center',
    backgroundColor: '#075fbf',
    borderRadius: 8,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'center',
    left: 138,
    padding: 8,
    position: 'absolute',
    top: 177,
    width: 164,
  },
  videoScreen: {
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 74,
    overflow: 'hidden',
    width: 125,
  },
  playCircle: {
    alignItems: 'center',
    backgroundColor: '#085fc0',
    borderRadius: 26,
    height: 52,
    justifyContent: 'center',
    left: 38,
    position: 'absolute',
    top: 12,
    width: 52,
  },
  playTriangle: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 12,
    borderLeftColor: '#ffc31d',
    borderLeftWidth: 20,
    borderTopColor: 'transparent',
    borderTopWidth: 12,
    height: 0,
    marginLeft: 5,
    width: 0,
  },
  progressTrack: {
    backgroundColor: '#075fbf',
    borderRadius: 999,
    bottom: 13,
    height: 4,
    left: 20,
    position: 'absolute',
    width: 72,
  },
  progressFill: {
    backgroundColor: '#ffc31d',
    borderRadius: 999,
    height: 4,
    width: 26,
  },
  progressKnob: {
    backgroundColor: '#ffc31d',
    borderRadius: 8,
    height: 16,
    left: 18,
    position: 'absolute',
    top: -6,
    width: 16,
  },
  videoButton: {
    backgroundColor: '#ffc31d',
    borderRadius: 7,
    height: 14,
    marginLeft: 8,
    width: 14,
  },
  hand: {
    height: 90,
    left: 213,
    position: 'absolute',
    top: 229,
    width: 78,
  },
  palm: {
    backgroundColor: '#efc399',
    borderRadius: 18,
    bottom: 8,
    height: 55,
    left: 14,
    position: 'absolute',
    width: 40,
  },
  indexFinger: {
    backgroundColor: '#efc399',
    borderRadius: 11,
    height: 69,
    left: 25,
    position: 'absolute',
    top: 0,
    width: 18,
  },
  finger: {
    backgroundColor: '#efc399',
    borderRadius: 10,
    height: 35,
    position: 'absolute',
    top: 48,
    width: 16,
  },
  fingerOne: {
    left: 43,
  },
  fingerTwo: {
    left: 55,
    top: 55,
  },
  fingerThree: {
    left: 65,
    top: 64,
  },
  thumb: {
    backgroundColor: '#efc399',
    borderRadius: 12,
    height: 45,
    left: 2,
    position: 'absolute',
    top: 55,
    transform: [{ rotate: '-42deg' }],
    width: 18,
  },
  logo: {
    color: '#352071',
    fontFamily: 'serif',
    fontSize: 47,
    left: 165,
    letterSpacing: -1.5,
    position: 'absolute',
    top: 282,
  },
  tagline: {
    color: '#050505',
    fontSize: 14,
    fontWeight: '900',
    left: 164,
    letterSpacing: 0.4,
    position: 'absolute',
    top: 331,
  },
});

export default LaunchingScreen;
