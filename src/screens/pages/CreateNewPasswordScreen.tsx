import { createScreen } from '../createScreen';

export const CreateNewPasswordScreen = createScreen({
  id: 'create-new-password',
  order: 14,
  figmaName: '14_CREATE NEW PASSWORD',
  title: '14_CREATE NEW PASSWORD',
  routeName: 'CreateNewPassword',
  componentName: 'CreateNewPasswordScreen',
  group: 'Authentication',
  description: 'New password form after successful verification.',
});

export default CreateNewPasswordScreen;
