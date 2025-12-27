import './User.css'

function User({ item, onSelect, isSelected }) {
    return (
        <div
            className={`user ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelect(item)}
            style={{ cursor: 'pointer' }}
        >
            <p><b>{item.name}</b></p>
            <p>{item.email}</p>
            <small>(click pentru detalii)</small>
        </div>
    )
}

export default User
