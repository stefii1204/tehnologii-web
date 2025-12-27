function UserDetails({ user }) {
    if (!user) {
        return (
            <div className="user-details">
                <h3>User Details</h3>
                <p>Selectează un utilizator ca să vezi detaliile.</p>
            </div>
        )
    }

    return (
        <div className="user-details">
            <h3>User Details</h3>
            <p><b>ID:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <p><b>Email:</b> {user.email}</p>

            {/* pune aici ce câmpuri ai tu în server */}
            {user.age !== undefined && <p><b>Age:</b> {user.age}</p>}
            {user.role && <p><b>Role:</b> {user.role}</p>}
        </div>
    )
}

export default UserDetails
