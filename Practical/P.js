function calculateScore() {
    let score = 0;

    for (let i = 1; i <= 5; i++) {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === "1") {
            score++;
        }
    }

    document.getElementById("result").innerText = "Your Score: " + score + " / 5";
}