/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import './web.css';

const rootTag = document.getElementById('root');

if (rootTag == null) {
  throw new Error('Missing root element with id "root".');
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag });
