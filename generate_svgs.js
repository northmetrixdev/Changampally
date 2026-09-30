const fs = require('fs');
const path = require('path');

const depts = [
    "oncology", "neurology", "rheumatology", "endocrinology", "cardiology",
    "gastroenterology", "psychiatry", "pulmonology", "orthopedics", "ophthalmology",
    "hematology", "dermatology", "dental", "rehab"
];

const dir = path.join(__dirname, 'public', 'images', 'departments');
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

depts.forEach((id, index) => {
    // Generate organic positions based on index to ensure consistency but variety
    const seed = index * 13;
    const cx1 = 200 + (seed % 400);
    const cy1 = 150 + ((seed * 7) % 300);

    const cx2 = 600 - (seed % 400);
    const cy2 = 450 - ((seed * 11) % 300);

    // Subtle plum/blush hues
    const h1 = 310 + (index % 15);
    const h2 = 325 - (index % 10);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
    <defs>
        <linearGradient id="bg-${id}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fdfbfb" />
            <stop offset="100%" stop-color="#f6f4f5" />
        </linearGradient>
        <filter id="blur-${id}" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="80" />
        </filter>
        <pattern id="grid-${id}" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 75, 125, 0.03)" stroke-width="1"/>
        </pattern>
    </defs>
    
    <!-- Base smooth background -->
    <rect width="800" height="500" fill="url(#bg-${id})" />
    
    <!-- Very subtle grid overlay for a clinical/precision feel -->
    <rect width="800" height="500" fill="url(#grid-${id})" />
    
    <!-- Soft abstract plum/blush blur 1 -->
    <circle cx="${cx1}" cy="${cy1}" r="${250 + (index * 5)}" fill="hsl(${h1}, 25%, 90%)" filter="url(#blur-${id})" opacity="0.7" />
    
    <!-- Soft abstract blur 2 -->
    <circle cx="${cx2}" cy="${cy2}" r="${200 + (index * 3)}" fill="hsl(${h2}, 30%, 93%)" filter="url(#blur-${id})" opacity="0.8" />
    
    <!-- Minimalist clinical accent line -->
    <line x1="${cx1}" y1="${cy1}" x2="${cx1 + 40}" y2="${cy1}" stroke="rgba(148, 75, 125, 0.15)" stroke-width="1.5" />
    <circle cx="${cx1}" cy="${cy1}" r="3" fill="rgba(148, 75, 125, 0.2)" />
</svg>`;

    fs.writeFileSync(path.join(dir, `min_dept_${id}.svg`), svg);
});

console.log('14 Custom Minimalist SVGs generated successfully.');
