import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import abi from './contractJson/NotesApp.json';
import './App.css';
import AddNote from './AddNote.jsx';
import Memo from './Memo.jsx';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  });

  const [account, setAccount] = useState('Not Connected');
  const [memos, setMemos] = useState([]);
  useEffect(() => {
    const initialize = async () => {
      const contractAddress = "0x055aeD23bDcf07be53D424935F986fBDa69d33ee"; // Add your contract address here
      const contractABI = abi.abi;

      try {
        const { ethereum } = window; // MetaMask login
        if (!ethereum) {
          alert("MetaMask is not installed!");
          return;
        }

        const accounts = await ethereum.request({
          method: "eth_requestAccounts"
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        

         const provider = new ethers.BrowserProvider(ethereum); //read
        const signer = await provider.getSigner(); //write
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        console.log('Provider:', provider);
        console.log('Signer:', signer);
        console.log('Contract:', contract);

        setState({ provider, signer, contract });
        setAccount(accounts[0]);
        const fetchedMemos = await contract.getNotes();
        setMemos(fetchedMemos);
        
      } catch (error) {
        console.error("Error initializing contract:", error.message);
        alert(`Error: ${error.message}`);
      }
    };

    initialize();
  }, []);

  return (
    <div>
      <div className='main'>
        <h1>MY NOTES</h1>
        <p className="connected-account">Connected Account: {account}</p>
        <AddNote state={state} />
        <Memo state={state} />
      </div>
    </div>
  );
}

export default App;
