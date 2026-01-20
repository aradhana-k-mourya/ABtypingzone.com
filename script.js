const textElement = document.getElementById("text");
textElement.style.textAlign = "justify";
textElement.style.lineHeight = "1.25";
textElement.style.fontFamily = "Georgia, serif";
const inputElement = document.getElementById("input");
const timeElement = document.getElementById("time");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");
const nextBtn = document.getElementById("next");


const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.A strong leader is essential for guiding a team towards its goals. Effective leaders inspire and motivate their team members, provide clear direction and expectations, and create a positive and supportive work environment. They empower their team members to take ownership of their work, encourage collaboration.",
    "Typing speed tests help improve accuracy and efficiency.Teamwork is the cornerstone of human achievement, a force that amplifies individual strengths and transforms them into collective success. When individuals with diverse skills, perspectives, and experiences come together with a shared purpose, the possibilities become limitless.",
    "Practice makes perfect when learning to type fast.The question mark (?) is the punctuation of inquiry. It turns statements into questions, inviting responses and sparking curiosity. Whether it's a simple 'How are you?' or a complex philosophical question, the question mark signals a desire for information or a deeper understanding.",
    "Setting clear, achievable goals is fundamental to academic success. Goals provide direction, focus, and a sense of purpose, acting as a roadmap for your educational journey.The key is to make your goals SMART: specific, measurable, achievable, relevant, and time-bound.",
    "Effective communication is essential for building strong relationships and achieving success in both personal and professional settings. It involves not only expressing your thoughts and ideas clearly but also actively listening to others and understanding their perspectives. Good communication skills can help prevent misunderstandings."
];

let time = 60;
let timer;
let correctChars = 0;
let totalChars = 0;
let started = false;

function startTest() {
    textElement.textContent = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    inputElement.value = "";
    time = 60;
    correctChars = 0;
    totalChars = 0;
    started = false;
    timeElement.textContent = time;
    wpmElement.textContent = 0;
    accuracyElement.textContent = "0%";
}

function updateStats() {
    const typedText = inputElement.value;
    const targetText = textElement.textContent;
    totalChars = typedText.length;
    correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === targetText[i]) {
            correctChars++;
        }
    }

    const accuracy = totalChars > 0 ? (correctChars / totalChars) * 100 : 0;
    accuracyElement.textContent = accuracy.toFixed(1) + "%";

    const words = typedText.trim().split(/\s+/).length;
    const elapsed = 60 - time;
    const wpm = elapsed > 0 ? (words / elapsed) * 60 : 0;
    wpmElement.textContent = Math.round(wpm);
}

inputElement.addEventListener("input", () => {
    if (!started) {
        started = true;
        timer = setInterval(() => {
            time--;
            timeElement.textContent = time;
            if (time <= 0) {
                clearInterval(timer);
                inputElement.disabled = true;
            }
        }, 1000);
    }
    updateStats();
});

restartBtn.addEventListener("click", () => {
    inputElement.disabled = false;
    startTest();
});
startTest();

nextBtn.addEventListener("click", () => {
    inputElement.disabled = false;
    startTest();
});

startTest();






