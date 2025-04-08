document.addEventListener('DOMContentLoaded', () => {
    // Fun facts about weird furniture
    const funFacts = [
        "Some chairs are shaped like giant hands!",
        "There's a couch designed to look like a hot dog.",
        "The 'Carpet Chair' looks like a rolled-up rug, but you can sit on it.",
        "A fish tank coffee table combines an aquarium with functionality.",
        "There’s a bookshelf that resembles a tree to store your books creatively."
    ];

    // Reference to the fun fact container
    const funFactContainer = document.querySelector('#fun-fact');

    // Show a random fun fact when the "Show Fun Fact" button is clicked
    document.querySelector('#show-fact-btn').addEventListener('click', () => {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        funFactContainer.textContent = randomFact;
    });

    // Toggle visibility of the gallery
    document.querySelector('#toggle-gallery-btn').addEventListener('click', () => {
        const gallery = document.querySelector('#gallery');
        gallery.style.display = gallery.style.display === 'none' ? 'block' : 'none';
    });
});