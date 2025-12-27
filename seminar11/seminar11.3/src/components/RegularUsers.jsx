export default function RegularUsers({ users }) {
    return (
        <div style={{ padding: 14, border: "1px solid #aaa", borderRadius: 10, marginTop: 18 }}>
            <h3>Regular Users ({users.length})</h3>

            {users.length === 0 ? (
                <p>No regular users.</p>
            ) : (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            {u.name} — <em>{u.email}</em>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
