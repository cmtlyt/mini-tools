import type { TObject } from '@cmtlyt/base';
import { createStore } from './util';

export * from './base';

export const storage = createStore<TObject<any>>('reactive', {});
