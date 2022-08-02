let over = document.getElementById('over');
let croix = document.getElementById('croix');
let contact = document.getElementById('contact')
let annee = document.getElementById("annee");

over.addEventListener('click', (e) => {
    if(e.target == over){
        setTimeout(() => {
            over.style.display = 'none'
        }, 500)
        
    }
})

croix.onclick = () => {
    over.style.display = 'none';
}

contact.onclick = () => {
    over.style.display ='flex'
}

const moonLanding = new Date();

annee.innerText = moonLanding.getFullYear()