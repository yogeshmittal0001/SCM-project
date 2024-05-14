const nightModeToggle = document.querySelector('.night_mode');
const toggleCircle = document.querySelector('.toggle_circle');
const body = document.body;

nightModeToggle.addEventListener('click', () => {
    toggleCircle.classList.toggle('active');
    body.classList.toggle('active');
});


const keys = document.querySelectorAll('.keys');
const textInput = document.querySelector('.text');
let capsLock = false;
let isShiftPressed = false;

keys.forEach(key => {
    key.addEventListener('click', () => {
        const keyValue = key.textContent.trim();

    
        switch (keyValue) {
            case 'Backspace':
                textInput.value = textInput.value.slice(0, -1);
                break;
            case 'Enter':
                textInput.value += '\n';
                break;
            case 'Space':
                textInput.value += ' ';
                break;
            case 'Caps Lock':
                capsLock = !capsLock;
                updateCapsLockStyle();
                 break;
            case 'Shift':
                isShiftPressed = !isShiftPressed;
                updateShiftState();
                 break;
            default:
                const isCapsLock = document.querySelector('.caps_lock_key').classList.contains('active');
                textInput.value += isShiftPressed || isCapsLock ? keyValue.toUpperCase() : keyValue.toLowerCase();
        }

        key.classList.add('remove');
        setTimeout(() => {
            key.classList.remove('remove');
        }, 100);
    });
});

function updateCapsLockStyle() {
    const capsLockKey = document.querySelector('.caps_lock_key');
    capsLockKey.classList.toggle('active', capsLock);
}

function updateShiftState() {
    keys.forEach(key => {
        key.classList.toggle('active', isShiftPressed && key.textContent.trim().length === 1);
    });
}