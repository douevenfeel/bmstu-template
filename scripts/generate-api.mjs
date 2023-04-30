import { resolve } from 'path';
import { generateApi } from 'swagger-typescript-api';

generateApi({
    name: 'Api.ts',
    output: resolve(import.meta.cwd(), './src/api'),
    url: import.meta.env.BE_URL,
    httpClientType: 'axios',
});
