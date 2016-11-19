//Counter code 
var button=document.getElementById('counter');

button.onclick=function(){
    //Create a request 
    var request= new XMlHttpRequest();
    //capture the response and store it in a variable
    request.onreadystatechange =function() {
        if (request.readyState ---XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status---200)
            {
            var counter =  request.responeText;
            }
        }
    };
    //render the variale in the correct span
    //Make the request
    request.open('GET','http://vrinda11.imad.hasura-app.io/counter',true);
    request.send(null);
  
    
};