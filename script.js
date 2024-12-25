const quotes = [
    "Cheers to a new year and another chance for us to get it right.",
    "May your New Year be filled with joy and happiness.",
    "Wishing you a year full of blessings and success.",
    "Here’s to a year of new adventures and opportunities.",
    "May the coming year bring you peace, joy, and happiness."
];

const emojiEffects = ['🎆', '🎇', '✨', '🥂', '🎉'];

for (let i = 0; i < 50; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = (Math.random() * 2 + 1) + 's';
    document.body.appendChild(sparkle);
}

function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    const diff = newYear - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (diff <= 0) {
        triggerCelebration();
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

const music = document.getElementById('background-music');

function playMusic() {
    music.play();
}

function stopMusic() {
    music.pause();
    music.currentTime = 0;
}

function sendGreeting() {
    const message = "🎉 Happy New Year! Wishing you a year full of success and happiness! 🎆";
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function generateGreetingCard() {
    const name = prompt("Enter your name:");
    if (name) {
        document.getElementById('greeting-name').textContent = name;
        document.getElementById('random-quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];
        document.getElementById('greeting-card').style.display = 'block';
    }
}

function triggerCelebration() {
    const fireworksContainer = document.createElement('div');
    fireworksContainer.classList.add('fireworks');
    document.body.appendChild(fireworksContainer);

    for (let i = 0; i < 30; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.bottom = Math.random() * 100 + 'vh';
        firework.style.animationDuration = (Math.random() * 1 + 1) + 's';
        fireworksContainer.appendChild(firework);
        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    // Play celebration music
    playMusic();
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    // Add transition class for smooth effect
    body.classList.add('theme-transition');

    // Remove transition class after animation duration
    setTimeout(() => {
        body.classList.remove('theme-transition');
    }, 500);
}
