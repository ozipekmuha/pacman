class pacman {
    x; 
    y; 
    direction; 
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    } affichePacman() {
        let blocPacman = document.createElement('div');
        blocPacman.id = 'pacman';
        blocPacman.style.gridColumn = pacman.x;
        blocPacman.style.gridRow = pacman.y;
        document.getElementById('grillePacman').appendChild(blocPacman)
    }
}
