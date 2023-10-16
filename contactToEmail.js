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
       alert('Thank you,' + params['sendername'] + '! Your message has been sent.')
    })
    .catch();
}