function addUser(){
P1 = document.getElementById("player1_name_input").value;
P2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name", P1);
    localStorage.setItem("player2_name", P2);

    window.location = "game_page.html";
}