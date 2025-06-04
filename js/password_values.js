let pass1 = document.getElementById('password')
let pass2 = document.getElementById('confirm_password')
let submit = document.getElementById('submit')

submit.addEventListener('click', function(){
    if(pass1.value === pass2.value){
        console.log("same");
        pass2.classList.remove('notsame')
        pass1.classList.remove('notsame')
    }
    else{
        console.log('notsame');
        pass2.classList.add('notsame')
        pass1.classList.add('notsame')
    }
})