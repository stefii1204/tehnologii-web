const INITIAL_STATE = {
    notes: [],
    loading: false,
    error: null
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'DELETE_NOTE_REQUEST':
            return { ...state, loading: true, error: null }

        case 'DELETE_NOTE_SUCCESS':
            return {
                ...state,
                loading: false,
                notes: state.notes.filter(n => n.id !== action.payload)
            }

        case 'DELETE_NOTE_FAILURE':
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
