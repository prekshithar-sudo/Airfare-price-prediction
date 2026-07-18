import { createScreen } from '../createScreen';

export const InboxCallsScreen = createScreen({
  id: 'inbox-calls',
  order: 45,
  figmaName: '45_INDOX - CALLS',
  title: '45_INDOX - CALLS',
  routeName: 'InboxCalls',
  componentName: 'InboxCallsScreen',
  group: 'Inbox',
  description: 'Call history and scheduled call list screen.',
});

export default InboxCallsScreen;
