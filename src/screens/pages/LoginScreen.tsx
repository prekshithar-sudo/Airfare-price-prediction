import { createScreen } from '../createScreen';

export const LoginScreen = createScreen({
  id: 'login',
  order: 7,
  figmaName: '07_LOGIN',
  title: '07_LOGIN',
  routeName: 'Login',
  componentName: 'LoginScreen',
  group: 'Authentication',
  description: 'Returning user email, password, and recovery entry screen.',
});

export default LoginScreen;
