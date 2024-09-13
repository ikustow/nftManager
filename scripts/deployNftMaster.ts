import { toNano } from '@ton/core';
import { NftMaster } from '../wrappers/NftMaster';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nftMaster = provider.open(await NftMaster.fromInit());

    await nftMaster.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(nftMaster.address);

    // run methods on `nftMaster`
}
