import { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testRegex: '.*\\.test\\.ts$',
};

// eslint-disable-next-line import/no-default-export
export default config;
