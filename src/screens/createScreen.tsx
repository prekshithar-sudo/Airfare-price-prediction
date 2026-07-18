import { ScreenTemplate } from './ScreenTemplate';
import type { AppScreenComponent, ScreenDefinitionBase } from './types';

export function createScreen(screen: ScreenDefinitionBase): AppScreenComponent {
  const GeneratedScreen = () => <ScreenTemplate screen={screen} />;

  GeneratedScreen.displayName = screen.componentName;

  return Object.assign(GeneratedScreen, { screen });
}
