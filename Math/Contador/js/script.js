const buttons = document.querySelectorAll('.btn');
const counterElement = document.querySelector('#counter');
buttons[1].disabled = true;        

 console.log(counterElement)

 let counter = 0;
 buttons.forEach( (button, index) => {
     button.addEventListener('click', (event) => {
         const operationType = event.target.dataset.operation;
         operationType === 'suma' ? ++counter : --counter
         counterElement.textContent = counter;
         buttons[1].disabled = counter <= 0 ? true : false;
     });
 });