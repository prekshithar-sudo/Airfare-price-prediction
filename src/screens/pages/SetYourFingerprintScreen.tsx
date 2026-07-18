import { createScreen } from '../createScreen';

export const SetYourFingerprintScreen = createScreen({
  id: 'set-your-fingerprint',
  order: 10,
  figmaName: '10_SET YOUR FINGERPRINT',
  title: '10_SET YOUR FINGERPRINT',
  routeName: 'SetYourFingerprint',
  componentName: 'SetYourFingerprintScreen',
  group: 'Authentication',
  description: 'Biometric sign-in setup screen.',
});

export default SetYourFingerprintScreen;
