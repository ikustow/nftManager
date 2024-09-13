import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { NftMaster } from '../wrappers/NftMaster';
import '@ton/test-utils';

describe('NftMaster', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let nftMaster: SandboxContract<NftMaster>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftMaster = blockchain.openContract(await NftMaster.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await nftMaster.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftMaster.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftMaster are ready to use
    });
});
