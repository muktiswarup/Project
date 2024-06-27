const signUpButton = document.querySelector('.sign-up');
signUpButton.addEventListener('click', function() {
    
    const form = document.getElementById('signup-form');
    form.style.display = 'none';
    const successMessage = document.getElementById('success-message');
    successMessage.style.display = 'block';
    const header=document.querySelector('.header');
    header.style.display='none';


}
);