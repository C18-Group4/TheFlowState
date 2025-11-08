const monthlyButton = document.getElementById('donation-frequency-monthly');
const yearlyButton = document.getElementById('donation-frequency-yearly');
const oneTimeButton = document.getElementById('donation-frequency-onetime');

const monthlyOptions = document.getElementById('monthly-options');
const yearlyOptions = document.getElementById('yearly-options');
const oneTimeOptions = document.getElementById('one-time-options');

function hideAllOptions() {
  monthlyOptions.style.display = 'none';
  yearlyOptions.style.display = 'none';
  oneTimeOptions.style.display = 'none';
}

function removeActiveClasses() {
  document
    .querySelectorAll('.donation-frequency-button')
    .forEach(btn => btn.classList.remove('active'));
}

function showSection(button, section) {
  hideAllOptions();
  removeActiveClasses();
  section.style.display = 'block';
  button.classList.add('active');
}

monthlyButton.addEventListener('click', () =>
  showSection(monthlyButton, monthlyOptions)
);
yearlyButton.addEventListener('click', () =>
  showSection(yearlyButton, yearlyOptions)
);
oneTimeButton.addEventListener('click', () =>
  showSection(oneTimeButton, oneTimeOptions)
);

// initialize page with the Monthly highlighted and shown. This is the default landing state.
window.addEventListener('DOMContentLoaded', () => {
  showSection(monthlyButton, monthlyOptions);
});

// transform "Custom Amount" button into input on click
document.querySelectorAll('.custom-amount').forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    document.querySelectorAll('.donation-option-button').forEach(btn => btn.classList.remove('active'));

    // Create input
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter amount';
    input.min = '1';
    input.classList.add('custom-amount-input');

    // Replace button with input
    button.replaceWith(input);

    // Focus the input immediately
    input.focus();

    // When user leaves the field and it’s empty, revert back to button
    input.addEventListener('blur', () => {
      if (input.value.trim() === '') {
        const newButton = document.createElement('button');
        newButton.className = 'donation-option-button custom-amount';
        newButton.textContent = 'Custom Amount';
        input.replaceWith(newButton);

        newButton.addEventListener('click', () => {
          newButton.replaceWith(input);
          input.focus();
        });
      }
    });
  });
});
