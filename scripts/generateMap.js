const fs = require('fs');
const path = require('path');

// 1. Read the SVG file
const svgPath = path.join(__dirname, '../assets/kerala-map-3.svg');
let svgContent = '';
try {
    svgContent = fs.readFileSync(svgPath, 'utf8');
} catch (e) {
    console.error("Could not read SVG file:", e);
    process.exit(1);
}

// 2. Extract path strings, but specifically the one for the map outline!
// The user noted to take the "black shaded region", which in kerala-map-3 is `fill="#1F2020"`
const pathRegex = /<path d="([^"]+)" fill="#1F2020"[^>]*transform="translate\(([^,]+),([^)]+)\)"/g;
const paths = [];

let match;
while ((match = pathRegex.exec(svgContent)) !== null) {
    const dString = match[1];
    const transX = match[2];
    const transY = match[3];

    // apply translation
    paths.push({
        d: dString,
        x: transX,
        y: transY
    });
}

console.log(`Extracted ${paths.length} outline paths from SVG.`);

const componentContent = `"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// The path array so we can use it in Canvas logic too
const KERALA_PATHS = ${JSON.stringify(paths)};

function StarlinkCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = 1600;
        let height = 1600;

        // Increase 300%: form a massive dense net
        const numNodes = 420;
        const nodes: {x: number, y: number, radius: number}[] = [];
        for (let i = 0; i < numNodes; i++) {
            nodes.push({
                x: 450 + Math.random() * 600, // Roughly matching Kerala bounding width
                y: 200 + Math.random() * 1200, // Roughly matching Kerala bounding height
                radius: Math.random() * 1.5 + 0.5
            });
        }

        // Pre-compute connections so glows can travel on them
        const connections: { n1: any, n2: any, dist: number }[] = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) { // Keep distance tight but with high node count
                    connections.push({ n1: nodes[i], n2: nodes[j], dist });
                }
            }
        }

        // Active glowing pulses travelling along connections
        const activeGlows: { conn: any, progress: number, speed: number }[] = [];
        const numGlows = 40; // amount of glowing dots flying around
        for(let i=0; i<numGlows; i++) {
             activeGlows.push({
                 conn: connections[Math.floor(Math.random() * connections.length)],
                 progress: Math.random(),
                 speed: 0.005 + Math.random() * 0.015
             });
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            ctx.save();
            
            // Apply single clip path to trap it securely in map outline
            if (KERALA_PATHS.length > 0) {
               const p = KERALA_PATHS[0];
               const path2d = new Path2D(p.d);
               ctx.translate(parseFloat(p.x), parseFloat(p.y));
               ctx.clip(path2d);
               ctx.translate(-parseFloat(p.x), -parseFloat(p.y));
            }

            // Draw connecting lines
            ctx.lineWidth = 1.0;
            connections.forEach(c => {
                 ctx.beginPath();
                 ctx.strokeStyle = \`rgba(255, 255, 255, \${(1 - c.dist / 100) * 0.3})\`;
                 ctx.moveTo(c.n1.x, c.n1.y);
                 ctx.lineTo(c.n2.x, c.n2.y);
                 ctx.stroke();
            });

            // Draw nodes
            ctx.fillStyle = "rgba(255, 255, 255, 0.8)"; 
            nodes.forEach(node => {
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            // Update and draw traveling glows
            activeGlows.forEach(glow => {
                glow.progress += glow.speed;
                if(glow.progress >= 1) {
                    glow.progress = 0;
                    glow.conn = connections[Math.floor(Math.random() * connections.length)];
                }

                const gx = glow.conn.n1.x + (glow.conn.n2.x - glow.conn.n1.x) * glow.progress;
                const gy = glow.conn.n1.y + (glow.conn.n2.y - glow.conn.n1.y) * glow.progress;

                // draw the flare
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255, 1)";
                ctx.shadowBlur = 15;
                ctx.shadowColor = "white";
                ctx.arc(gx, gy, 2.5, 0, Math.PI * 2);
                ctx.fill();
                ctx.shadowBlur = 0; // reset
            });

            ctx.restore(); // remove clip

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} width={1600} height={1600} style={{ width: '100%', height: '100%' }} />;
}

export default function KeralaAnimatedMap({ className = "" }: { className?: string }) {
    return (
        <div className={\`relative w-full h-full flex items-center justify-center pointer-events-none \${className}\`} style={{ zIndex: 0 }}>
            <motion.svg
                viewBox="0 0 1600 1600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] scale-[1.2] -translate-x-[15%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <foreignObject x="0" y="0" width="1600 " height="1600">
                    <StarlinkCanvas />
                </foreignObject>

                {/* Generated from kerala-map-3.svg */}
                ${paths.map((p, index) => `
                <motion.g transform="translate(${p.x}, ${p.y})">
                    {/* Highly visible base layout, NO animated glow edge around map */}
                    <motion.path
                        d="${p.d}"
                        stroke="rgba(255,255,255,0.4)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="transparent"
                    />
                </motion.g>`).join('\n')}
            </motion.svg>
        </div>
    );
}
`;

fs.writeFileSync(path.join(__dirname, '../components/organisms/KeralaAnimatedMap.tsx'), componentContent);
console.log('Successfully generated KeralaAnimatedMap.tsx with ' + paths.length + ' paths!');
