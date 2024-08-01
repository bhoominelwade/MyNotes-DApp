// import './App.css';
// import "./App.jsx";
// const AddNote=({state})=>{

//     const add=async(event)=>{
//         event.preventDefault();
//         try {
//             const { contract } = state;

//             if (!contract) {
//                 console.error("Contract not found");
//                 return;
//             }}
//         catch (error) {
//             console.error("An error occurred:", error);
//         }
//         const message=document.querySelector('#noteInput').value;
        
//         const transaction =await contract.createNote(message);
//         await transaction.wait();
//         console.log("Transaction successful")
//        }
//     return(
//        <div className="main">
//         <input type="text" id="noteInput" placeholder="write something"/>
//         <button className="add-btn" onClick={add}>add note</button>
//         <div className="notes-list" id="notesList"></div>
//        </div>
        
       
//     );
        
     
    
   

// }

// export default AddNote

import React from 'react';

const AddNote = ({ state }) => {
  const { contract } = state;

  const add = async () => {
    try {
      if (!contract) {
        throw new Error("Contract is not loaded");
      }

      // Example: Add a note to the contract
      const message=document.querySelector('#noteInput').value;
      const tx = await contract.createNote(message);
      await tx.wait();

      console.log("Note added successfully");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  return (
    <div>
      <input type="text" id="noteInput" placeholder="write something"/>
      <button className="add-btn" onClick={add}>Add Note</button>
    </div>
  );
};

export default AddNote;
