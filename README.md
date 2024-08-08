# MyNotes-DApp

## Description

The Notes DApp is a decentralized application that allows users to create, store, and view notes on the Ethereum blockchain. Built using React for the frontend and Solidity for the smart contract backend, this app demonstrates a simple yet powerful way to interact with the blockchain.

## Features

- **Create Notes:** Users can add new notes, which are stored on the Ethereum blockchain.
- **View Notes:** All previously created notes are displayed, complete with timestamps.
- **Live Updates:** New notes appear immediately after they are added, without requiring a page reload.
- **Blockchain Integration:** Utilizes ethers.js to connect the frontend with the Ethereum network via MetaMask.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MetaMask](https://metamask.io/) (for interacting with the Ethereum network)
- [Hardhat](https://hardhat.org/) (for local Ethereum development)
- [Vite](https://vitejs.dev/) (for fast and modern frontend development)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/notes-dapp.git
    cd notes-dapp
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Compile the smart contract:**

    ```bash
    npx hardhat compile
    ```

4. **Deploy the smart contract:**

    Make sure your local Ethereum node or a test network is running.

    ```bash
    npx hardhat run scripts/deploy.js --network yourNetwork
    ```

5. **Start the React app:**

    ```bash
    npm run dev
    ```

6. **Connect MetaMask:**

    - Open your browser and connect MetaMask to the Ethereum network.
    - Make sure your MetaMask is connected to the same network where your smart contract was deployed.

## Usage

- **Add a Note:** Enter your note in the input field and submit. The note will be added to the blockchain and displayed in the list of notes.
- **View Notes:** All notes created on the blockchain will be displayed, including their content and timestamps.

## Project Structure

- `contracts/`: Contains the Solidity smart contract (`NotesApp.sol`).
- `scripts/`: Deployment script for the smart contract.
- `src/`: React components and application logic.
  - `App.jsx`: Main component managing state and rendering the UI.
  - `AddNote.jsx`: Component for adding new notes.
  - `Memo.jsx`: Component for displaying existing notes.
  - `contractJson/`: Contains the ABI of the deployed smart contract.
  
![image](https://github.com/user-attachments/assets/425167f2-c5ca-4b67-92ad-ae5bba52c642)
