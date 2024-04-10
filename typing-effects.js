const textArray = ["Web Developer", "Geeky + Visionary💻✨"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
  const currentText = textArray[textIndex];
  if (!isDeleting) {
    // Typing text
    document.getElementById('typingText').textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    // Check if text is fully typed
    if (charIndex === currentText.length) {
      isDeleting = true;
      // Wait before deleting
      setTimeout(() => {
        // Clear the text before starting the next one
        document.getElementById('typingText').textContent = '';
        charIndex = 0;
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length; // Move to the next text
      }, 3000); // Adjust the delay before deleting (in milliseconds)
    }
  } else {
    // Deleting text
    document.getElementById('typingText').textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    // Check if text is fully deleted
    if (charIndex === 0) {
      isDeleting = false;
    }
  }
  setTimeout(typeText, 100); // Adjust typing speed (in milliseconds)
}

// Start typing effect
typeText();