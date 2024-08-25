document.getElementById('complaintForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);

    fetch('http://127.0.0.1:5000/submit_complaint', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.complaint_id) {
            // Display the complaint ID
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.innerHTML = `<p>Your complaint has been submitted! Your complaint ID is: <strong>${data.complaint_id}</strong></p>`;
            responseMessage.style.display = 'block';

            // Redirect after 5 seconds
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 5000); // 5000ms = 5 seconds
        } else if (data.error) {
            alert('Error: ' + data.error);
        }
    })
    .catch(error => console.error('Error:', error));
});

function trackComplaint() {
    // Your code for tracking the complaint
    console.log("Track Complaint button clicked!");

    // Example: You can retrieve and display the complaint status based on a complaint ID.
    const complaintId = prompt("Enter your Complaint ID:");

    if (complaintId) {
        fetch(`http://127.0.0.1:5000/track_complaint/${complaintId}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    alert(`Error: ${data.error}`);
                } else {
                    alert(`Complaint ID: ${data.complaint_id}\nStatus: ${data.status}`);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to fetch complaint status.');
            });
    }
}
