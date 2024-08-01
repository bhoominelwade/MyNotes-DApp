// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract NotesApp {

    
    struct Note {
        uint id;
        string content;
        uint timestamp;
    }

    
    mapping(address => Note[]) private userNotes;
    event NoteCreated(address indexed user, uint noteId, string content, uint timestamp);
    event NoteDeleted(address indexed user, uint noteId);

    
    function createNote(string calldata _content) external {
        uint noteId = userNotes[msg.sender].length;
        userNotes[msg.sender].push(Note(noteId, _content, block.timestamp));
        emit NoteCreated(msg.sender, noteId, _content, block.timestamp);
    }

   
    function getNotes() external view returns (Note[] memory) {
        return userNotes[msg.sender];
    }

    
    function deleteNote(uint _noteId) external {
        require(_noteId < userNotes[msg.sender].length, "Note does not exist");
        
        // Move the last note into the place of the note to be deleted and pop the last one
        uint lastNoteIndex = userNotes[msg.sender].length - 1;
        if (_noteId != lastNoteIndex) {
            userNotes[msg.sender][_noteId] = userNotes[msg.sender][lastNoteIndex];
            userNotes[msg.sender][_noteId].id = _noteId;
        }
        userNotes[msg.sender].pop();
        emit NoteDeleted(msg.sender, _noteId);
    }
}
