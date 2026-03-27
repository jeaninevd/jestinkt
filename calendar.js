// Startdatum: 27 maart 2026 
const startDate = new Date(2026, 2, 27); // maand 2 = maart
const today = new Date();

// Bereken hoeveel dagen sinds start
const diffTime = today - startDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;

// Lieve berichtjes
const messages = {
    1: "Vandaag begint deze domme kalender. je mag.. neee MOET elke dag een vakje openen en dan staat er iets liefs.. of iets gemeens in! ly en groetjes van je vriendinnetje :) 💗",
    2: "Je bent zo lief.",
    3: "Ik ben trots op jou.",
    4: "Je maakt mij gelukkig.",
    5: "Je bent mijn lievelings persoon.",
    6: "Ik hou van je lachje.",
    7: "Je geeft mij rust in mijn hoofdje.",
    8: "Je bent de aller knapste.",
    9: "Je hebt mijn hele hartje.",
    10: "Je bent mijn toekomst.",
    11: "u feel like home.",
    12: "Je bent mijn beste vriend.",
    13: "Je bent mijn soulmate.",
    14: "Je bent kk sterk en je man handled mij ieuwww.",
    15: "Je bent mijn alles.",
    16: "Ik kies elke dag voor jou en zal dat altijd blijven doen.",
    17: "Je maakt mij gelukkig.",
    18: "Je bent mijn reden om te leven.",
    19: "Je bent perfect voor mij.",
    20: "Ik hou van je om wie je bent, ik hou van je persoonlijkheid.",
    21: "Je bent mijn forever and alwaysssss.",
    22: "Ik wil met je trouwen!!!.",
    23: "Je pesd me hooft!! STOHOPPPP.",
    24: "Je hebt mij laten zien wat real love is.",
    25: "i love you sososososo much justin.",
    26: "Je bent mijn veilige plek.",
    27: "Ik ben dankbaar voor jou.",
    28: "Je bent mijn wereld, zonder jou bestaat er geen wereld voor mij.",
    29: "Je bent mijn droom vriendje.",
    30: "Ik hou van jou tot aan de maan en terug.",
    31: "Je bent mijn nummer één en zal dat altijd blijven!.",
    32: "Ik wil kindjes met jou maken.",
    33: "Je stinkt.",
    34: "Met je lieve kuiltjes i love them sm.",
    35: "Einde van de domme kalender… maar nooit van mijn liefde voor vriendje !! 💗"
};

const messageBox = document.getElementById("messageBox");

// Regenboogkleuren voor hartjes
const heartColors = [
    "#ff0000", // rood
    "#ff7f00", // oranje
    "#ffff00", // geel
    "#00ff00", // groen
    "#0000ff", // blauw
    "#4b0082", // indigo
    "#8b00ff"  // violet
];

// Functie om regenbooghartjes te laten vallen
function dropHearts() {
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";

        // Willekeurige positie
        heart.style.left = Math.random() * 100 + "vw";

        // Willekeurige grootte
        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        // Willekeurige regenboogkleur
        const color = heartColors[Math.floor(Math.random() * heartColors.length)];
        heart.style.color = color;

        document.body.appendChild(heart);

        // Verwijder hartje na 1 seconde
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// Selecteer alle vakjes
document.querySelectorAll(".day").forEach(day => {
    const dayNumber = parseInt(day.dataset.day);

    // Lock toekomstige dagen
    if (dayNumber > diffDays) {
        day.classList.add("locked");
    }

    // Klikbare dagen
    day.addEventListener("click", () => {
        if (day.classList.contains("locked")) return;

        // Als het bericht al zichtbaar is → verberg het
        if (messageBox.style.display === "block" && messageBox.dataset.open === String(dayNumber)) {
            messageBox.style.display = "none";
            messageBox.dataset.open = "";
            return;
        }

        // Toon bericht
        messageBox.style.display = "block";
        messageBox.innerHTML = messages[dayNumber] || "Ik hou van jou 💗";
        messageBox.dataset.open = dayNumber;

        // Laat regenbooghartjes vallen
        dropHearts();
    });
});
