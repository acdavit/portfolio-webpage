export default function light() {
    const handleOnMouseMove = e => {
        const {currentTarget: target} = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
    
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
    
    for (const card of document.querySelectorAll(".glass, .glass-card")) {
        card.onmousemove = e => handleOnMouseMove(e);
    }
}

// To use this function, import it in the project and call it in useEffect
// REQUIRED FOR THE GLASS GLOW EFFECT!!!