import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: ['src/main.ts', 'src/**/*.module.ts', 'test/**/*.ts'],
  project: ['src/**/*.ts', 'test/**/*.ts'],
  ignore: ['**/*.d.ts'],
  ignoreDependencies: [
    // NestJS required dependencies
    '@nestjs/platform-express',
    '@nestjs/cli',
    '@nestjs/schematics',
    '@nestjs/testing',
    // TypeScript types
    '@types/*',
    // Test related
    'jest',
    'ts-jest',
    'supertest',
    // Development tools
    'ts-node',
    'tsconfig-paths',
    // Prisma
    'prisma',
  ],
  ignoreExportsUsedInFile: true,
  rules: {
    dependencies: 'error',
    devDependencies: 'error',
    binaries: 'error',
    exports: 'error',
    files: 'error',
    nsExports: 'error',
    nsTypes: 'error',
    types: 'error',
  },
};

export default config;
