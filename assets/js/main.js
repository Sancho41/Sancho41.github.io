function loaded () {

    const skills = document.querySelectorAll(".skill");
    const skillOn = document.createElement('span');
    const skillOff = document.createElement('span');
    skillOn.classList = "ball ball-on"
    skillOff.classList = "ball ball-off"

    skills.forEach(e => {
        let level = parseInt(e.getAttribute('level'));
        for (var i = 0; i < level; i++)
            e.appendChild(skillOn.cloneNode(true));

        for (var i = 0; i < 5 - level; i ++)
            e.appendChild(skillOff.cloneNode(true));
    })
}


document.addEventListener("DOMContentLoaded", loaded);