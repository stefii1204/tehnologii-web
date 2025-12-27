const SERVER = 'http://localhost:8080'

export const DELETE_NOTE_REQUEST = 'DELETE_NOTE_REQUEST'
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS'
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE'

export function deleteNoteAsync(id) {
    return async (dispatch) => {
        dispatch({ type: DELETE_NOTE_REQUEST })

        try {
            const res = await fetch(`${SERVER}/notes/${id}`, { method: 'DELETE' })
            if (!res.ok) throw new Error('delete failed')

            dispatch({ type: DELETE_NOTE_SUCCESS, payload: id })
        } catch (e) {
            dispatch({ type: DELETE_NOTE_FAILURE, payload: String(e) })
        }
    }
}
