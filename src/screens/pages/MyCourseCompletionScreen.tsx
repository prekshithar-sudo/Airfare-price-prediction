import { createScreen } from '../createScreen';

export const MyCourseCompletionScreen = createScreen({
  id: 'my-course-completion',
  order: 42,
  figmaName: '42_MY COURSE - COURSE COMPLETED',
  title: '42_MY COURSE - COURSE COMPLETED',
  routeName: 'MyCourseCompletion',
  componentName: 'MyCourseCompletionScreen',
  group: 'Learning',
  description: 'Course completion success state after finishing all lessons.',
});

export default MyCourseCompletionScreen;
