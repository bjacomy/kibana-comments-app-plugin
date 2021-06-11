import { schema, TypeOf } from '@kbn/config-schema';
import { PluginConfigDescriptor, PluginInitializerContext } from '../../../src/core/server';
import { KibanaCommentsAppPlugin } from './plugin';
const configSchema = schema.object({
  enabled: schema.boolean({ defaultValue: true })
});


export const config: PluginConfigDescriptor<ConfigType> = {
  exposeToBrowser: {
    enabled: true
  },
  schema: configSchema,
};
export   type ConfigType = TypeOf<typeof configSchema>;
//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

//  This exports static code and TypeScript types,
//  as well as, Kibana Platform `plugin()` initializer.

export function plugin(initializerContext: PluginInitializerContext) {
  return new KibanaCommentsAppPlugin(initializerContext);
}

export { KibanaCommentsAppPluginSetup, KibanaCommentsAppPluginStart } from './types';
