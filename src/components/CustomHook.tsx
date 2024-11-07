import React, { useEffect, useState } from 'react';
// Custom Hook
const useTimer = (initialTime: number) => {
    const [time, setTime] = useState<number>(initialTime);
    
    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer); // Limpiar al desmontar
    }, []);

    return time;
};

// Componente usando el hook
const Timer: React.FC = () => {
    const timeLeft = useTimer(10); // Comienza desde 10 segundos

    return (
        <div>
            <p>Time left: {timeLeft} seconds</p>
            {timeLeft <= 0 && <p>Time's up!</p>}
        </div>
    );
};

export default Timer;
