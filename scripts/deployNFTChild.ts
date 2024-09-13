import { toNano } from '@ton/core';
import { NFTChild } from '../wrappers/NFTChild';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nFTChild = provider.open(await NFTChild.fromInit());

    await nFTChild.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(nFTChild.address);

    // run methods on `nFTChild`
}
