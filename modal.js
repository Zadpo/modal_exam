/* js code */
// Get the Cancel button
const cancelButton = document.getElementById('cancel-btn');

// Add an event listener to the Cancel button
cancelButton.addEventListener('click', () => {
  // Create the modal elements
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  
  const modalText = document.createElement('p');
  modalText.innerText = 'Are you sure you want to cancel your subscription?';
  
  const yesButton = document.createElement('button');
  yesButton.innerText = 'Yes - Cancel';
  yesButton.classList.add('button');
  yesButton.addEventListener('click', () => {
    // Replace the cancel button with the text "Canceled"
    cancelButton.innerText = 'Canceled';
    
    // Update the modal with a success message
    modalText.innerText = 'Subscription successfully cancelled!';
    
    // Wait 2 seconds before closing the modal
    setTimeout(() => {
      modal.style.display = 'none';
    }, 2000);
  });
  
  const noButton = document.createElement('button');
  noButton.innerText = 'No';
  noButton.classList.add('button');
  noButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  
  // Add the elements to the modal
  modalContent.appendChild(modalText);
  modalContent.appendChild(yesButton);
  modalContent.appendChild(noButton);
  modal.appendChild(modalContent);
  
  // Add the modal to the page
  document.body.appendChild(modal);
});
