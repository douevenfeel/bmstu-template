import { resolve } from 'path';
import { generateApi } from 'swagger-typescript-api';

generateApi({
    name: 'Api.ts',
    output: resolve(process.cwd(), './src/api'),
    url: process.env.BE_URL,
    httpClientType: 'axios',
});
