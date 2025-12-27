import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { addNote, deleteNote } from '../actions/actions'

const noteListSelector = state => state.list.notes

const NoteList = () => {
    const notes = useSelector(noteListSelector, shallowEqual)
    const [content, setContent] = useState('')
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <h3>list of notes</h3>
                {
                    notes.map((e, i) => (
                        <div key={i} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            <span>{e}</span>
                            <button onClick={() => dispatch(deleteNote(i))}>Delete</button>
                        </div>
                    ))
                }
            </div>

            <div>
                <h3>add a note</h3>
                <input
                    type='text'
                    placeholder='note content'
                    value={content}
                    onChange={(evt) => setContent(evt.target.value)}
                />
                <input
                    type='button'
                    value='add'
                    onClick={() => {
                        if (!content.trim()) return;
                        dispatch(addNote(content.trim()));
                        setContent('');
                    }}
                />
            </div>
        </div>
    )
}

export default NoteList
