const textSegments = document.querySelectorAll('.text-segment');
const visuals = document.querySelectorAll('.column-visual');

function updateActiveSegment() {
    let closestSegment = null;
    let minDistance = Infinity;
    const viewportCenter = window.innerHeight / 2;

    textSegments.forEach(segment => {
        const rect = segment.getBoundingClientRect();
        const segmentCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - segmentCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestSegment = segment;
        }
    });

    if (closestSegment) {
        const activeId = closestSegment.dataset.id;
        textSegments.forEach(segment => {
            segment.classList.toggle('active', segment === closestSegment);
        });
        visuals.forEach(visual => {
            visual.classList.toggle('active', visual.dataset.id === activeId);
        });
    }
}

window.addEventListener('scroll', updateActiveSegment);
window.addEventListener('resize', updateActiveSegment);
updateActiveSegment(); // Run once when page loads