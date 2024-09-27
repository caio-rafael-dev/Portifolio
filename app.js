

function typeText(element, text, speed, callback) {
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, speed); // Adjust typing speed here
        } else if (callback) {
            setTimeout(callback, 100);
        }
    }

    typeLetter();

}

function startTypingSequence(){
    const elements = document.querySelectorAll('.test');
    let currentIndex=0;

    function typeNext(){
        if(currentIndex < elements.length){
            const element = elements[currentIndex];
            const text = element.getAttribute('data-text');
            typeText(element, text, 85, typeNext);
            currentIndex++;
        }
    }

   setTimeout(typeNext,1000);
}

startTypingSequence();



// // /////////////////////



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});