import type { ComponentType } from 'react';

export type ScreenGroup =
  | 'Onboarding'
  | 'Authentication'
  | 'Discovery'
  | 'Course'
  | 'Learning'
  | 'Inbox'
  | 'Payments'
  | 'Profile';

export type ScreenDefinitionBase = {
  id: string;
  order: number;
  figmaName: string;
  title: string;
  routeName: string;
  componentName: string;
  group: ScreenGroup;
  description: string;
};

export type ScreenDefinition = ScreenDefinitionBase & {
  component: ComponentType;
};

export type AppScreenComponent = ComponentType & {
  screen: ScreenDefinitionBase;
};
