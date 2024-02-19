function validate() {
    alert();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var password1=document.getElementById('password1').value;


    

    
    if(name !=''  && email !='' && password !='' && password1 !=''){
        let signup={
        'name':name,
        'email':email,
        'password':password,
        'password1':password1
        }
        let formdetails=localStorage.getItem('formdetails')? JSON.parse(localStorage.getItem('formdetails')):[];
        formdetails.push(signup);
        localStorage.setItem('formdetails',JSON.stringify(formdetails));
        alert('Sign up successful!');
        window.location.assign('login2.html')
        
            
    }
    else{
        alert('Enter All Fields')
    }
}


function Login() {

    var email1 = document.getElementById('email1').value;
    var password3 = document.getElementById('password3').value;

    if (email1 !='' && password3 !=''){
        if (check())
        {
            window.location.assign('index.html')
            alert('Login successful!');
          }
     else {
        alert('Please enter both EmailId and password.');
    }

    function check(){
        let exitUser =JSON.parse(localStorage.getItem('formdetails'));
        let status=false;
        exitUser.forEach(e=>{
            if(e.email==email1 && e.password1==password3){
                status =true
            }
        });
        return status;
    }
}
    else{
        alert('please enter all fields')
    }
}





function myfunction(){
    alert(aboutus.html);
}



function reply(){
    window.location.assign('order.html')
}
function log(){
    window.location.assign('login2.html')
    alert('signup successfully')
}


// function validateForm() {
//     var name = document.getElementById('name').value;
//     var contactno = document.getElementById('contactno').value;
//     var District = document.getElementById('District').value;
//     var items=document.getElementById('items').value;


//     localStorage.setItem('name', name);
//     localStorage.setItem('contactno', contactno);
//     localStorage.setItem('District', District);
//     localStorage.setItem('items',items)

//     // Simple validation
//     if (name && contactno && District && items) {
//         alert('ordered successful!');
//         // You can add code here to submit the form data to a server
       
//             window.location.assign("order.html")

    
//     } else {
//         alert('Please fill in all fields.');
    // }
// }






// // Assume imageURL is the file path of the image on the server
// const imageURL = 'https://example.com/path/to/image.jpg';

// Storing image URL in local storage
localStorage.setItem('userImage', imageURL);

// Retrieving image URL from local storage
const storedImageURL = localStorage.getItem('userImage');

// Displaying the image on the page
const imageElement = document.createElement('img');
imageElement.src = storedImageURL;
document.body.appendChild(imageElement);

