import { createScreen } from '../createScreen';

export const SecurityScreen = createScreen({
  id: 'security',
  order: 55,
  figmaName: '55_SECURITY',
  title: '55_SECURITY',
  routeName: 'Security',
  componentName: 'SecurityScreen',
  group: 'Profile',
  description: 'Security settings for PIN, biometric, and account protection.',
});

export default SecurityScreen;
