let maGrille = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [2, 2, 2, 2, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 2, 2, 2, 2],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 1, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 1, 1, 0, 2, 0, 2, 2, 2, 2, 2, 2, 2, 0, 2, 0, 1, 1, 0],
    [0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 0, 2, 2, 2, 2, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0],
    [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

let monPacMan = new pacman(2, 1, 1); 
let tabFantome = [
    {
        x: 11,
        y: 11,
        direction: 1
    },
    {
        x: 11,
        y: 11,
        direction: 1
    },
    {
        x: 11,
        y: 11,
        direction: 1
    },
    {
        x: 11,
        y: 11,
        direction: 1
    },
    {
        x: 11,
        y: 11,
        direction: 1
    }]
/*tableau*/

let score = 0

/* fonctions j'ai gangé */

function jaiGagné() {

    let compteur = 0

    for (let i in maGrille) {

        for (let j in maGrille[i]) {

            if (maGrille[i][j] == 2) {

                compteur++
            }
        }
    }
    if (compteur == 0) {
        alert("trop fort ma gueule ")
        return true
    }
    return false
}
/* fonctions j'ai gangé */

/*affichage*/

function affichageGrille() {

    document.getElementById('grillePacman').innerHTML = " "

    for (let i in maGrille) {

        for (let j in maGrille[i]) {

            var monElem = document.createElement('div')


            if (maGrille[i][j] == 0) {

                monElem.classList.add("mur")

            }

            else if (maGrille[i][j] == 1) {

                monElem.classList.add("sol")

            }
            else if (maGrille[i][j] == 2) {

                monElem.classList.add("bonbon")
            }
            monElem.style.gridColumn = parseInt(j) + 1;
            monElem.style.gridRow = parseInt(i) + 1;
          document.getElementById('grillePacman').appendChild(monElem)
        }
    }
}

function afficheFantome(numFant) {
    let blocFantome = document.createElement('div');
    blocFantome.id = 'fantome';
    blocFantome.style.gridColumn = tabFantome[numFant].x;
    blocFantome.style.gridRow = tabFantome[numFant].y;

    if ([numFant] == 1) {

        blocFantome.id = 'fantome1';
    }
    else if ([numFant] == 2) {

        blocFantome.id = 'fantome2';
    }

    if ([numFant] == 3) {

        blocFantome.id = 'fantome3';
    }

    document.getElementById('grillePacman').appendChild(blocFantome)
}

function afficheScore() {
    document.getElementById('score').innerHTML = score
}
/*affichage*/

/*déplacement*/

function deplacePacman() {

    if (pacman.direction == 1) {
        pacman.x++
    }
    else if (pacman.direction == 2) {
        pacman.y++
    }
    else if (pacman.direction == 3) {
        pacman.x--
    }
    else if (pacman.direction == 4) {
        pacman.y--
    }
    if (pacman.x > maGrille[0].length) {
        pacman.x = 1
    }
    if (pacman.x < 1) {
        pacman.x = maGrille[0].length
    }
    if (maGrille[pacman.y - 1][pacman.x - 1] == 0) {
        if (pacman.direction == 1) {
            pacman.x--
        }
        else if (pacman.direction == 2) {
            pacman.y--
        }
        else if (pacman.direction == 3) {
            pacman.x++
        }

        else if (pacman.direction == 4) {
            pacman.y++
        }
    
    }
    if (maGrille[pacman.y - 1][pacman.x - 1] == 2) {

        maGrille[pacman.y - 1][pacman.x - 1] = 1
        score = score + 1
    }
}

function deplaceFantome(numFant) {
    tabFantome[numFant].direction = getRandomInt(4)

    if (tabFantome[numFant].direction == 1) {
        tabFantome[numFant].x++
    }
    else if (tabFantome[numFant].direction == 2) {
        tabFantome[numFant].y++
    }
    else if (tabFantome[numFant].direction == 3) {
        tabFantome[numFant].x--
    }
    else if (tabFantome.direction == 4) {
        tabFantome[numFant].y--
    }

    if (maGrille[tabFantome[numFant].y - 1][tabFantome[numFant].x - 1] == 0) {
        if (tabFantome[numFant].direction == 1) {
            tabFantome[numFant].x--
        }
        else if (tabFantome[numFant].direction == 2) {
            tabFantome[numFant].y--
        }
        else if (tabFantome[numFant].direction == 3) {
            tabFantome[numFant].x++
        }
        else if (tabFantome[numFant].direction == 4) {
            tabFantome[numFant].y++
        }
    }
}
/*déplacement*/

/*appuie touche*/

function appuieTouche(e) {
    console.log(e.key)

    if (e.key == "z") {
        pacman.direction = 4
    }
    else if (e.key == "s") {
        pacman.direction = 2
    }
    else if (e.key == "q") {
        pacman.direction = 3
    }
    else if (e.key == "d") {
        pacman.direction = 1
    }
}
/*appuie touche*/

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
/*collision*/

function collision() {
    if (pacman.x == tabFantome[numFant].x) {
        if (pacman.y == tabFantome[numFant].y) {
            alert("vous avez perdu ")
            return true
        }
    }
    return false
}
/*collision*/

function refresh() {
    let goOn = true
    deplacePacman()

    /*if(collision()){
      goOn = false
    }
    deplaceFantome()
      
      if(collision()){
        goOn = false
      }*/

    for (let i in tabFantome) {
        deplaceFantome(i)
    }
    affichageGrille()
    monPacMan.affichePacman()
    /*afficheFantome()*/

    for (let i in tabFantome) {
        afficheFantome(i)
    }
    afficheScore()

    if (jaiGagné()) {
        goOn = false
    }
    if (goOn == true) {
      setTimeout(refresh, 500)
    }
}
refresh()
document.body.addEventListener("keydown", appuieTouche)