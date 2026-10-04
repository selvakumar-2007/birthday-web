document.addEventListener("DOMContentLoaded", () => {

  // ENTER BUTTON
  window.enterExperience = function () {
    const intro = document.querySelector(".intro");

    if (intro) {
      intro.scrollIntoView({
        behavior: "smooth"
      });
    }
  };


  // GIFT
  window.openGift = function () {

    const message = document.getElementById("giftMessage");

    if (message) {
      message.innerHTML =
        "Happy Birthday, Sivanya! ✨💖";
    }

    createConfetti();
  };


  // PARTICLES
  const particles = document.getElementById("particles");

  if (particles) {

    for (let i = 0; i < 45; i++) {

      const p = document.createElement("div");

      p.className = "particle";

      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";

      p.style.animationDuration =
        (3 + Math.random() * 5) + "s";

      p.style.opacity =
        0.2 + Math.random() * 0.7;

      particles.appendChild(p);
    }
  }

});


// CONFETTI
function createConfetti() {

  for (let i = 0; i < 80; i++) {

    const confetti = document.createElement("div");

    confetti.style.position = "fixed";
    confetti.style.width = "8px";
    confetti.style.height = "8px";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.zIndex = "9999";
    confetti.style.pointerEvents = "none";

    confetti.style.background =
      ["#ff9fc5", "#ffd166", "#ffffff", "#f78fb3"][
        Math.floor(Math.random() * 4)
      ];

    confetti.style.borderRadius = "2px";

    document.body.appendChild(confetti);

    const fall =
      confetti.animate(
        [
          {
            transform: "translateY(0) rotate(0deg)",
            opacity: 1
          },
          {
            transform:
              `translateY(110vh) rotate(${Math.random() * 720}deg)`,
            opacity: 0
          }
        ],
        {
          duration: 2500 + Math.random() * 2000,
          easing: "ease-out"
        }
      );

    fall.onfinish = () => {
      confetti.remove();
    };
  }
}