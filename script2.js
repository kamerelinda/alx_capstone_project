document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    //prevents default form submission

    // creating variables for the input fields
    const sendername = document.getElementById("name").value;
    const senderemail = document.getElementById("email").value;
    const sendermessage = document.getElementById("message").value;

    // form validation check if empty
    if (sendername === "" || senderemail === "" || sendermessage === "") {
        alert("Please fill in all the required fields.");
        // check if email format is valid
    } else if (!isValidEmail(senderemail)) {
        alert("Please enter a valid email address.");
    } else {
        // Call a function to send the email using EmailJS
        sendMessage();
    }
});

//checks the format of email format using Regex
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
// function to send form inputs to email using emailjs
function sendMessage(){
    (function(){
        emailjs.init("AXkO2tcJNMof1pQTE"); //Account Public Key
    })();
    let serviceID = "service_obau8ts";
    let templateID = "template_znpb9qn";

    let params = {
        sendername: document.getElementById('name').value,
        senderemail: document.getElementById('email').value,
        sendermessage: document.getElementById('message').value
    };
    emailjs.send(serviceID, templateID,params)
        .then(() => {
            // alert after sending the email
            swal("Thanks!", "Your message has been sent", "success");
            // reset the form after successful submission
            document.getElementById("contactForm").reset(); // Reset the form
        })
        .catch();
}
