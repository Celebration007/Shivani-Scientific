// Get modal elements
const modal = document.getElementById('pdf-modal');
const pdfFrame = document.getElementById('pdf-frame');

// Function to open the modal with the selected PDF
function openModal(pdfUrl) {
    pdfFrame.src = pdfUrl; // Set the PDF URL in the iframe
    modal.style.display = 'flex'; // Show the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none'; // Hide the modal
    pdfFrame.src = ''; // Clear the iframe source
}

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
