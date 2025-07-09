let home = document.querySelector('#home');
let project = document.querySelector('#project')
let contact = document.querySelector("#contact")
let about = document.querySelector('#about')

let Home = document.getElementById('Home')
let project_card = document.getElementById('project_card')
let contact_form = document.getElementById('contact_form')
let About = document.getElementById('About')

// console.log(home,project,contact,Home,project_card,contact_form);


Home.style.display = 'block';
contact_form.style.display = 'none';
project_card.style.display = 'none';
About.style.display = 'none' ;

function showSection(showId, ...hideIds) {
    document.getElementById(showId).style.display = 'block';
    hideIds.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
}

/* console.log(document.getElementById(Home));
console.log(document.getElementById(project_card));
console.log(document.getElementById(contact_form)); */

// Usage:
home.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('hello');
    
    showSection('Home', 'contact_form', 'project_card', 'About');
});

contact.addEventListener('click', (e) => {
    e.preventDefault();

    showSection('contact_form', 'Home', 'project_card','About');
});

project.addEventListener('click',(e)=>{
    e.preventDefault()
    showSection('project_card','contact_form', 'Home','About' )
})

about.addEventListener('click',(e)=>{
    e.preventDefault()
    showSection('About','project_card','contact_form', 'Home')
})




