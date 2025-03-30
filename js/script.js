'use strict';

document.addEventListener('DOMContentLoaded', function() {

    // --- Smooth Scrolling for Navigation Links (Optional) ---
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Check if it's an internal link
            if (href && href.startsWith('#')) {
                e.preventDefault(); // Prevent default jump
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    // --- BMI Calculator Logic (Example Tool) ---
    const bmiForm = document.getElementById('bmi-form');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiResultDiv = document.getElementById('bmi-result');

    if (bmiForm) { // Check if the form exists on the page
        bmiForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent page reload

            const heightCm = parseFloat(heightInput.value);
            const weightKg = parseFloat(weightInput.value);

            // Basic Validation
            if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
                bmiResultDiv.textContent = 'Please enter valid height and weight.';
                bmiResultDiv.style.color = 'red'; // Indicate error
                return; // Stop calculation
            }

            // Calculate BMI (Weight in kg / (Height in meters)^2)
            const heightM = heightCm / 100;
            const bmi = weightKg / (heightM * heightM);
            const bmiRounded = bmi.toFixed(1); // Round to one decimal place

            // Display Result
            bmiResultDiv.textContent = `Your BMI is approximately: ${bmiRounded}`;
            bmiResultDiv.style.color = '#333'; // Reset color on success

            // You could add interpretation here, but BE CAREFUL not to give medical advice.
            // Example: bmiResultDiv.textContent += ' (Consult your doctor for interpretation)';
        });
    }


    // --- Placeholder for Accordion/Tabs Logic ---
    // Select trigger elements (e.g., buttons or headings)
    // Select content panels to show/hide
    // Add event listeners (e.g., 'click')
    // Inside the listener:
    //      Toggle a CSS class (e.g., 'active' or 'is-visible') on the content panel
    //      Maybe update ARIA attributes (aria-expanded) for accessibility


    // --- Placeholder for Simple Quiz Logic ---
    // Select quiz form/container
    // Select answer inputs (radio buttons?)
    // Select submit/check button
    // Select result display area
    // Add event listener to button
    // Inside listener:
    //      Check selected answers against correct answers
    //      Display score or feedback
    //      Crucially: Emphasize it's informational, not diagnostic.


    // --- Other Potential JS Enhancements ---
    // - Image lazy loading
    // - Animations on scroll (use sparingly)

    console.log("Website script loaded."); // For debugging

}); // End DOMContentLoaded