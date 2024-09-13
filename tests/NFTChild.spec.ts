import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { NFTChild } from '../wrappers/NFTChild';
import '@ton/test-utils';

describe('NFTChild', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let nFTChild: SandboxContract<NFTChild>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nFTChild = blockchain.openContract(await NFTChild.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await nFTChild.send(
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
            to: nFTChild.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nFTChild are ready to use
    });
});
