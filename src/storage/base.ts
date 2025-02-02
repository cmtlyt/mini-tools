import { createStorage } from 'unstorage';
import localStorageDriver from 'unstorage/drivers/localstorage';

export const baseStorage = createStorage({});

baseStorage.mount('local', localStorageDriver({ base: 'cl:app:mini-tools' }));
