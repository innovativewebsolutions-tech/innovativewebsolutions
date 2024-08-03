document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_nsiaotm';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Your message has been sent successfully!');
        }, (err) => {
            alert('Failed to send your message. Please try again later.');
            console.log(JSON.stringify(err));
        });
});
