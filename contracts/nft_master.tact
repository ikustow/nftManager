import "@stdlib/deploy";
struct NFTMetada {
    name: String;
    description: String;
    image: String;
}

contract NftMaster with Deployable {
    deployer: Address;
    ownerName: String;
    init(deployer: Address, ownerName: String){
        self.deployer = deployer;
        self.ownerName = ownerName;
    }

    receive(msg: DeployNFT){
        let ownerAddress: Address = msg.owner;
        let nfrName: String = msg.name;
        let nftDescription: String = msg.description;
        let nfrImage: String = msg.image;
    }

    get fun getDeployer(): Address {
        return self.deployer;
    }

    get fun getOwnerName(): String {
        return self.ownerName;
    }
}
message DeployNFT {
    owner: Address;
    name: String;
    description: String;
    image: String;
}