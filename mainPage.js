// Use for all pages
function goToCodeProj(){
    window.location.href = 'codeProj.html';
}
function goToWorkExp(){
    window.location.href = 'workExp.html'
}
function goToAboutMe(){
    window.location.href='aboutMe.html'
}
function goToRandS(){
    window.location.href='rands.html'
}
function goToContact(){
    window.location.href='contact.html'
}
// Stop Here

const text = "A motivated third-year student at The University \nof Western Ontario, doing an Honors Specialization \nin Computer Science. I am responsible, \nsedulous, independent, and always looking for \nfurther experience and skills.";
let index = 0;
let speed = 15; // Adjust the speed as needed
function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

// Call the typewriter function when the page is loaded
window.onload = typeWriter;
