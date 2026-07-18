import { createScreen } from '../createScreen';

export const CreateNewPinScreen = createScreen({
  id: 'create-new-pin',
  order: 9,
  figmaName: '09_CREATE NEW PIN',
  title: '09_CREATE NEW PIN',
  routeName: 'CreateNewPin',
  componentName: 'CreateNewPinScreen',
  group: 'Authentication',
  description: 'PIN setup screen for secure app access.',
});

export default CreateNewPinScreen;
