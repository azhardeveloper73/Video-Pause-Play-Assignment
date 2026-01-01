const video = document.getElementById("bgVideo");
    const btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        btn.innerText = "Pause";
      } else {
        video.pause();
        btn.innerText = "Play";
      }
    });