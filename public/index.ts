
import { PluginInitializerContext } from 'src/core/public/plugins';
import './index.scss';

import { KibanaCommentsAppPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, Kibana Platform `plugin()` initializer.
export function plugin(initializerContext: PluginInitializerContext) {  
    return new KibanaCommentsAppPlugin(initializerContext);
  };

export { KibanaCommentsAppPluginSetup, KibanaCommentsAppPluginStart } from './types';
