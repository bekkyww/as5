document.getElementById("submit").addEventListener("click", calculateDowry);

function calculateDowry() {
    let basePrice = 100;

    const educationSelect = document.getElementById("education").value;
    const educationFactors = {
        bachelor: 1.5,
        college: 1.2,
        high_school: 1.05,
        middle_school: 0.9
    };
    if (educationSelect in educationFactors) {
        basePrice *= educationFactors[educationSelect];
    }

    const networth = document.getElementById("networth").value;
    const networthFactors = {
        upper_class: 2,
        middle_class: 1.5,
        lower_class: 1.2
    };
    if (networth in networthFactors) {
        basePrice *= networthFactors[networth];
    }

    const caste = document.getElementById("caste").value;
    const casteBonus = {
        brahmin: 100,
        kshatriya: 50,
        vaishya: 20,
        shudra: 10,
        untouchable: -50
    };
    if (caste in casteBonus) {
        basePrice += casteBonus[caste];
    }

    if (document.getElementById("instrument").checked) basePrice += 10;
    if (document.getElementById("cook").checked) basePrice += 20;
    if (document.getElementById("easygoing").checked) basePrice += 15;
    if (document.getElementById("singer").checked) basePrice += 10;

    const ageRadios = document.getElementsByName("age");
    let ageFactor = 1;
    for (let radio of ageRadios) {
        if (radio.checked) {
            if (radio.value === "18-23") ageFactor = 1.5;
            else if (radio.value === "24-27") ageFactor = 1.2;
            else if (radio.value === "28+") ageFactor = 0.95;
        }
    }
    basePrice *= ageFactor;

    if (document.getElementById("parents_gossip").checked) basePrice *= 0.85;
    if (document.getElementById("character_gossip").checked) basePrice *= 0.9;
    if (document.getElementById("general_gossip").checked) basePrice -= 20;

    const result = document.getElementById("result");
    result.textContent = `Final calculated dowry price: $${basePrice.toFixed(2)}`;
    result.style.color = "green";
}
