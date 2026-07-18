import { createScreen } from '../createScreen';

export const HomeScreen = createScreen({
  id: 'home',
  order: 16,
  figmaName: '16_HOME',
  title: '16_HOME',
  routeName: 'Home',
  componentName: 'HomeScreen',
  group: 'Discovery',
  description: 'Main dashboard with categories, courses, mentors, and learning shortcuts.',
});

export default HomeScreen;
