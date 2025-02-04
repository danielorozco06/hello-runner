import { PluginInstance, PluginInstanceInfo } from '@df/sdk';

import { sayHello } from '../operation/operation';

interface Body {
  pluginName: string;
  version: string;
  provider: string;
  inputs: {
    name: string;
  };
  isAsync: string;
  entryPoint: string;
}
class PluginRunner extends PluginInstance<any, any> {
  info(): PluginInstanceInfo {
    return {
      displayName: 'Runner Plugin',
      description: 'Runner plugin for DevOps Framework',
      author: '',
      documentationUrl: '',
      sourceCodeUrl: '',
      tags: []
    };
  }

  async execute(body: Body): Promise<any> {
    try {
      return sayHello(body.inputs.name);
    } catch (error) {
      const errorMessage = `Failed to execute ${PluginRunner.name}: ${(error as Error).message ?? error}`;
      console.log(errorMessage, error);
      throw error;
    }
  }
}

export default PluginRunner;
