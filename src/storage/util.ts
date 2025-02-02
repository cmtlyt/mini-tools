import type { SerializerAsync } from '@vueuse/core';
import type { Storage, StorageValue } from 'unstorage';
import { isEmpty } from '@cmtlyt/base';
import { useStorageAsync } from '@vueuse/core';
import { baseStorage } from './base';

interface CreateStoreOption {
  serializer: SerializerAsync<any>;
}

export function createStore<T extends StorageValue>(id: string, initValue: T, storage: Storage = baseStorage, option?: CreateStoreOption) {
  if (isEmpty(id))
    throw new TypeError('id is empty');
  return useStorageAsync(id, initValue, storage, {
    serializer: {
      read: r => r as any,
      write: r => r as any,
    },
    ...option,
  });
}
