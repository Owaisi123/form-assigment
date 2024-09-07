// Select the form element
const form = document.querySelector('.main') as HTMLElement;

// Add an event listener to handle form submission
if (form) {
    form.addEventListener('submit', (event) => {
        // Optionally, you can prevent default behavior to prevent page refresh.
        // event.preventDefault();
        
        // Simulate form processing here (e.g., validate or send data)
        console.log('Form submitted');

        // The page will refresh after form submission by default.
        // If you want to prevent the refresh, uncomment `event.preventDefault();` above.
    });
}
