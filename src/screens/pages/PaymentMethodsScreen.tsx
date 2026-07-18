import { createScreen } from '../createScreen';

export const PaymentMethodsScreen = createScreen({
  id: 'payment-methods',
  order: 34,
  figmaName: '34_PAYMENT METHODS',
  title: '34_PAYMENT METHODS',
  routeName: 'PaymentMethods',
  componentName: 'PaymentMethodsScreen',
  group: 'Payments',
  description: 'Payment method selection during checkout.',
});

export default PaymentMethodsScreen;
