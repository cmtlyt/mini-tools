/// <reference types="@rsbuild/core/types" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // biome-ignore lint/complexity/noBannedTypes: reason
  const component: DefineComponent<any, any, any>;
  export default component;
}
