import { useEffect, useState } from "react";
import AdminUsers from "./components/AdminUsers";
import RegularUsers from "./components/RegularUsers";

export default function App() {
    const [users, setUsers] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if (!res.ok) throw new Error("Failed to load users");
                return res.json();
            })
            .then((data) => {

                const mapped = data.map((u, idx) => ({
                    id: u.id,
                    name: u.name,
                    email: u.email,
                    type: idx < 5 ? "admin" : "user",
                }));
                setUsers(mapped);
            })
            .catch(() => setErrorMsg("Could not load users."));
    }, []);

    const admins = users.filter((u) => u.type === "admin");
    const regulars = users.filter((u) => u.type === "user");

    return (
        <div style={{ fontFamily: "Arial", maxWidth: 700, margin: "40px auto" }}>
            <h2>Users</h2>

            {errorMsg && <p style={{ color: "crimson" }}>{errorMsg}</p>}
            {!errorMsg && users.length === 0 && <p>Loading...</p>}


            <AdminUsers users={admins} />
            <RegularUsers users={regulars} />
        </div>
    );
}
