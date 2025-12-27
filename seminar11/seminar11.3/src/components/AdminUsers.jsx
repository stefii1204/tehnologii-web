export default function AdminUsers({ users }) {
    return (
        <div style={{ padding: 14, border: "2px solid #333", borderRadius: 10, marginTop: 18 }}>
            <h3>Admins ({users.length})</h3>

            {users.length === 0 ? (
                <p>No admins.</p>
            ) : (
                <ul>
                    {users.map((u) => (
                        <li key={u.id}>
                            <strong>{u.name}</strong> — {u.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
