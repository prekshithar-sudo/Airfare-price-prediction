import { createScreen } from '../createScreen';

export const PasswordResetCongratulationsScreen = createScreen({
  id: 'password-reset-congratulations',
  order: 15,
  figmaName: '15_CONGRATULATIONS',
  title: '15_CONGRATULATIONS',
  routeName: 'PasswordResetCongratulations',
  componentName: 'PasswordResetCongratulationsScreen',
  group: 'Authentication',
  description: 'Success state after password reset completion.',
});

export default PasswordResetCongratulationsScreen;
