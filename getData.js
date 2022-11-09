const myForm=document.getElementById('myForm');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    const formData=new FormData(myForm);
    
    fetch('sendmail.php',{
        method:'post',
        body:formData
    }).then(function(response){
        return response.text();
    }).then(function(text){
        if (text=="Sent"){
            alert("Message has been sent successfully!");
        }else{
            alert("Message could not be sent.")
        }
    })


});