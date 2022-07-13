let type = new Typed('.typing-text',{
    strings : [ 'frontend developer', 'fullstack developer', 'backend developer' ],
    typeSpeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));

// document.getElementById('btn').addEventListener('click',(e)=>{
//     e.preventDefault();
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : document.getElementById(name).value,
//         Password : "password",
//         To : '667aren667@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// });