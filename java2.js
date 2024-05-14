document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.querySelector('.textarea textarea');
    const buttons = document.querySelectorAll('.row button');
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        handleButtonClick(this.innerText);
      });
    });
    function handleButtonClick(value) {
      switch (value) {
        case 'Backspace':
          textarea.value = textarea.value.slice(0, -1);
          break;
        case 'Shift':
          isShiftPressed = !isShiftPressed;
            updateShiftState();
            break;
        case 'Enter':
          textarea.value += '\n';
          break;
        case 'Tab':
          textarea.value += '\t';
          break;
        case 'Caps':
          
          alert('Caps Lock Toggled');
          break;
        case 'Ctrl':
        case 'Win':
        case 'Alt':
          
          alert(value + ' key pressed');
          break;
        case 'Space':
          textarea.value += ' ';
          break;
        default:
        textarea.value += value;
        shift_btn.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.toggle('upper')
            })
        })
  
            }
          }
  });