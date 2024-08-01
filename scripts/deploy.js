const hre = require("hardhat");

async function main() {
    const Dapp = await hre.ethers.getContractFactory("NotesApp");
    const DappDeployed = await Dapp.deploy({
        gasLimit: 1000000
    });

    // Wait for the deployment to be confirmed
    //await chai.waitForDeployment();
    //console.log("Deployed contract address:", chai.target); 
    //console.log(`Token Deployed to: ${chai.value}`);
    console.log("Transaction Hash:", DappDeployed.deployTransaction.hash);

    // Wait for the deployment to be mined
    await DappDeployed.deployTransaction.wait();
    // console.log("Deployment result:", DappDeployed);
    // await DappDeployed.deployed();
    console.log("Deployed to:", DappDeployed.address);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});