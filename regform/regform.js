
    // script.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const mail = document.getElementById('mail').value;
    const enrollment = document.getElementById('enrollment').value;
    

    const enrolledContainer = document.getElementById('enrolledContainer');

    const dataBox = document.createElement('div');
    dataBox.className = 'data-box';
    dataBox.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Mail ID:</strong> ${mail}</p>
        <p><strong>Enrollment Number:</strong> ${enrollment}</p>
        
    `;

    enrolledContainer.appendChild(dataBox);
});

