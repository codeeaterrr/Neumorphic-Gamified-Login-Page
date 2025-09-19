function startGameLogin() {
  document.querySelector(".progress-container").style.display = "block";
  document.querySelector(".status").style.display = "block";
  let bar = document.querySelector(".progress-bar");
  let status = document.querySelector(".status");
  let progress = 0;

  let interval = setInterval(() => {
    progress += 10;
    bar.style.width = progress + "%";
    status.innerText = "Loading... " + progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      status.innerText = " Welcome To CODE EATER";
      setTimeout(() => {
        window.location.href = "dashboard.html"; // Redirect after success
      }, 1500);
    }
  }, 400);
}
