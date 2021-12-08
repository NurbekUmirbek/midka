$(".form").validate({
    rules:{
        login:{
            required:true,
           digits: true,
           minlength:5,
           maxlength:5
        },
        password:{
            required:true,
           minlength:8,
           maxlength:15
        }
    },
     messages:{
    login:{
        required:"Please,type login",
       minlength: "At least 5 digits ",
       digits: "only digits",
       maxlength:"MAX 5 digits ",
    },
    password:{
       minlength: "At least 8 characters ",
       required:"Please,type your password"
    }
     }
      });
      function signUp(e){
        event.preventDefault();
        
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        
        var user = {
        
            username: username,
            password: password,
        };
        var json = JSON.stringify(user);
        localStorage.setItem("username", json)
 
        }
        function loginFunc(e){
            event.preventDefault();
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
            var result = document.getElementById('result');
        
            var user = localStorage.getItem("username");
            var data = JSON.parse(user);
            console.log(data);
            if(user == null){
                result.innerHTML = 'wrong username';
            }
            else if(username == data.username && password == data.password){
                document.location.href = "midka/dl2.html";
            }else{
                result.innerHTML = 'wrong password';
            }
        }