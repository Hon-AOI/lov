// PASSWORD
function checkPassword() {
    let password = document.getElementById("password").value;

    let correctPassword = "7years";

    if (password === correctPassword) {
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText =
        "Wrong password ❤️";
    }
}

// PAGE NAVIGATION (smooth)
function goToPage(page) {
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = page;
    }, 400);
}

// LOVE LETTER TYPING
const text = `My love ❤️

      Thank you for being someone I can always appreciate and think of with warmth. Life feels a little lighter and better with you in it, and I hope you always know how valued you are.
      No matter where life takes us, I’ll always be glad our paths crossed.

         I love you deeply ❤️`;

let i = 0;

function typeLetter() {
    if (i < text.length) {
        document.getElementById("letter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeLetter, 40);
    }
}
