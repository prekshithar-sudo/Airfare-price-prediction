import { createScreen } from '../createScreen';

export const VerifyForgotPasswordScreen = createScreen({
  id: 'verify-forgot-password',
  order: 13,
  figmaName: '13_VERIFY-FORGOT PASSWORD',
  title: '13_VERIFY-FORGOT PASSWORD',
  routeName: 'VerifyForgotPassword',
  componentName: 'VerifyForgotPasswordScreen',
  group: 'Authentication',
  description: 'OTP or verification code screen for password recovery.',
});

export default VerifyForgotPasswordScreen;
