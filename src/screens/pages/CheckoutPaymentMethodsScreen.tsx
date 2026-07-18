import { createScreen } from '../createScreen';

export const CheckoutPaymentMethodsScreen = createScreen({
  id: 'checkout-payment-methods',
  order: 35,
  figmaName: '35_PAYMENT METHODS',
  title: '35_PAYMENT METHODS',
  routeName: 'CheckoutPaymentMethods',
  componentName: 'CheckoutPaymentMethodsScreen',
  group: 'Payments',
  description: 'Checkout payment confirmation state for selected method.',
});

export default CheckoutPaymentMethodsScreen;
