const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('translate-x-0'); // Bring the box into view
        } else {
            if (box.classList.contains('-translate-x-full ')) {
                box.classList.remove('translate-x-0'); // Reset for left-translated boxes
            } else {
                box.classList.remove('translate-x-0'); // Reset for right-translated boxes
            }
        }
    });
}
