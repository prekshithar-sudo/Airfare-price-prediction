import { createScreen } from '../createScreen';

export const TransactionsScreen = createScreen({
  id: 'transactions',
  order: 47,
  figmaName: '47_TRANSACTIONS',
  title: '47_TRANSACTIONS',
  routeName: 'Transactions',
  componentName: 'TransactionsScreen',
  group: 'Payments',
  description: 'Payment transaction history screen.',
});

export default TransactionsScreen;
