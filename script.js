




function logout() {
    let answer = confirm("Are you sure you want to logout?");

    if (answer) {
        document.getElementById("message").innerHTML =
            "You have successfully logged out!";
    }
}
