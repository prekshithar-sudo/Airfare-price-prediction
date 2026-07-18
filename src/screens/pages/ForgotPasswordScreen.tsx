import { createScreen } from '../createScreen';

export const ForgotPasswordScreen = createScreen({
  id: 'forgot-password',
  order: 12,
  figmaName: '12_FORGOT PASSWORD',
  title: '12_FORGOT PASSWORD',
  routeName: 'ForgotPassword',
  componentName: 'ForgotPasswordScreen',
  group: 'Authentication',
  description: 'Password recovery method selection screen.',
});

export default ForgotPasswordScreen;
