document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user-type').value;

        // Implement authentication logic here, e.g., sending a request to the backend
        // You can use Fetch API or Axios for making HTTP requests

        // Example of making a fetch request to the backend
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, userType }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server, e.g., redirect to the user dashboard
            if (data.success) {
                if (userType === 'user') {
                    window.location.href = '/user-dashboard';
                } else if (userType === 'vendor') {
                    window.location.href = '/vendor-dashboard';
                } else if (userType === 'admin') {
                    window.location.href = '/admin-dashboard';
                }
            } else {
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});