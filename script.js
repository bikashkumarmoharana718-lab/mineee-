function showMessage() {
    const message = document.getElementById("secretMessage");
    message.style.display = "block";

    for (let i = 0; i < 25; i++) {
        const heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 700;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(1)",
                    opacity: 1
                },
                {
                    transform: `translate(${x}px, ${y}px) scale(0.2)`,
                    opacity: 0
                }
            ],
            {
                duration: 1500,
                easing: "ease-out"
            }
        );

        setTimeout(() => heart.remove(), 1500);
    }
}
