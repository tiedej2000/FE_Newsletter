document.getElementById('form').addEventListener('submit', function (e){
    const emailInput = document.getElementById('email')
    const errorMsg = document.querySelector('.error-msg')
    const emailVal = emailInput.value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const signUpCard = document.querySelector('.card')
    const successCard = document.querySelector('.card-success')
    const successMsg = document.querySelector('.success-msg')

    sessionStorage.setItem('userEmail', emailVal);

    if (!emailPattern.test(emailVal)) {
        e.preventDefault(); 
        emailInput.style.borderColor = 'rgb(255, 156, 156)'
        emailInput.style.background = 'rgb(255, 201, 201)'
        errorMsg.style.visibility = 'visible'

    } else {
        e.preventDefault(); 
        signUpCard.style.display = 'none'
        successCard.style.display = 'flex'
        successMsg.innerHTML = `A confirmation email has been sent to <strong>${emailInput.value}</strong>. Please open it and click the button inside to confirm your subscription.`;
    }

    successCard.querySelector('button').addEventListener('click',function(){
        successCard.style.display = 'none'
        signUpCard.style.display = 'flex'
    })

    console.log(sessionStorage.getItem('userEmail'));
})
