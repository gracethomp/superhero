import { Storage } from '@google-cloud/storage';
import StorageConfig from 'src/config/storage-config';

const storage = new Storage({
  projectId: StorageConfig.projectId,
  credentials: {
    client_email: StorageConfig.client_email,
    private_key: StorageConfig.private_key,
  },
});

export { storage };
