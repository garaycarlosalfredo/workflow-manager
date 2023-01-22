import { isNotNilOrEmpty } from '@flybondi/ramda-land';

const {
  APP_VERSION,
} = process.env;

const config = Object.freeze({
  version: APP_VERSION!,
});

export type Configuration = typeof config;

export default config;