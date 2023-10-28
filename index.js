
    document.getElementById('booking-final').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var selectedOption = document.querySelector('select').value;
        var serviceDate = document.getElementById('service').value;
        var specialRequest = document.getElementById('Request').value;

        var emailBody = "Name: " + name + "\n" +
            "Email: " + email + "\n" +
            "Selected Option: " + selectedOption + "\n" +
            "Service Date: " + serviceDate + "\n" +
            "Special Request: " + specialRequest;

        var emailLink = "mailto:m.rizwanhaider11@gmail.com?subject=Booking Request&body=" + encodeURIComponent(emailBody);
        window.location.href = emailLink;
    });
