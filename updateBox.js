const update1 = document.getElementById('update1');
const update2 = document.getElementById('update2');
const update3 = document.getElementById('update3');
const update4 = document.getElementById('update4');
const update5 = document.getElementById('update5');
const update6 = document.getElementById('update6');

// Helper function to update the content with fade effect
function updateContentWithFade(element, newContent) {
    element.style.opacity = '.6';
    setTimeout(() => {
        element.textContent = newContent;
        element.style.opacity = '1';
    }, 50);
}

function updateUpdateBox(str) {
    update6.textContent = update5.textContent;
    update5.textContent = update4.textContent;
    update4.textContent = update3.textContent;
    update3.textContent = update2.textContent;
    update2.textContent = update1.textContent;
    update1.textContent = str;
}