import React, { useState, useEffect } from "react";

const Memo = ({ state }) => {
  const [mem, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memosMessage = async () => {
      try {
        const mem = await contract.getNotes();
        console.log(mem);
        const formattedMemos = mem.map((memo) => ({
          content: memo.content,
          timestamp: Number(memo.timestamp), // Explicit conversion to Number
        }));
        setMemos(formattedMemos);
      } catch (error) {
        console.error("Error fetching memos:", error);
      }
    };

    const handleNewMemo = (author, content, timestamp) => {
      const newMemo = {
        content,
        timestamp: Number(timestamp),
      };
      setMemos((prevMemos) => [newMemo, ...prevMemos]);
    };

    if (contract) {
      memosMessage(); // Call the correct function to fetch existing memos

      // Listen for the NoteCreated event
      contract.on("NoteCreated", handleNewMemo);
    }

    // Clean up the event listener
    return () => {
      if (contract) {
        contract.off("NoteCreated", handleNewMemo);
      }
    };
  }, [contract]);

  return (
    <div>
      <h2>Your Notes</h2>
      <ul>
        {mem.map((memo, index) => (
          <li key={index}>
            <strong>{memo.content}</strong> <br />
            <small>Timestamp: {new Date(memo.timestamp * 1000).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Memo;
