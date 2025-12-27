export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (content) => ({
    type: ADD_NOTE,
    payload: content,
});

export const deleteNote = (index) => ({
    type: DELETE_NOTE,
    payload: index,
});
