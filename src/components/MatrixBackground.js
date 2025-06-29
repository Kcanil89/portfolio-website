import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = '01ANILKHATTRI01'; // Using the code symbols
        const charArray = characters.split('');

        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = [];

        for (let x = 0; x < columns; x++) {
            drops[x] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(13, 17, 23, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // --- COLOR CHANGED HERE ---
            // Changed from bright blue to a more subtle slate gray.
            ctx.fillStyle = '#8B949E'; // This is your --light-slate color
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = charArray[Math.floor(Math.random() * charArray.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        // --- SPEED CHANGED HERE ---
        // Changed from 33ms to 55ms to slow down the animation.
        const interval = setInterval(draw, 55);

        return () => clearInterval(interval);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: '50%',
            }}
        />
    );
};

export default MatrixBackground;