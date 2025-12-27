import React, { useState } from "react";

const App = () => {
    const [steps, setSteps] = useState(0);

    return (
        <div className="container">
            <p>Today you've taken {steps} steps!</p>


            {steps === 0 && <p>You haven't started walking yet 🚶‍♀️</p>}

            {steps > 0 && steps < 10 && <p>Good start! Keep going 💪</p>}

            {steps >= 10 && <p>🔥 Amazing! You're very active today!</p>}

            <button onClick={() => setSteps(steps + 1)}>Click Me</button>
        </div>
    );
};

export default App;
