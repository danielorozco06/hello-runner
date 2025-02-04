import { PluginModule } from '@df/sdk';
import { HelloWorldHandler } from '../handlers/helloWorld.handler';

export const HelloWorldPluginModule = PluginModule.register({
  info: {
    displayName: 'Hello World Plugin',
    author: 'Tu Nombre',
    description: 'Plugin que imprime "Hello world" con el nombre enviado en la request.',
    documentationUrl: '',
    sourceCodeUrl: '',
    tags: ['hello', 'example']
  },
  handlers: {
    generalExceptions: [],
    ruleExceptions: [],
    ruleExecutors: [],
    policySelectors: [],
    contextConstructors: [],
    actions: [HelloWorldHandler]
  }
});
