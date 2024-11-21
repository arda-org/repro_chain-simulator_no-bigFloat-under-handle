import { afterEach, beforeEach, test } from 'vitest';
import { e, FSWorld } from 'xsuite';

let world: FSWorld;

beforeEach(async () => {
  world = await FSWorld.start({ saveLogs: true });
});

afterEach(async () => {
  world.terminate();
});

test('Test', async () => {
  const deployer = await world.createWallet({
    balance: 10n ** 18n,
  });
  await deployer.deployContract({
    code: 'file:output/repro.wasm',
    codeMetadata: [],
    gasLimit: 100_000_000,
    codeArgs: [
      e.U(16),
    ],
  });
});
