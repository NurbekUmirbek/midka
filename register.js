$(".form").validate({
    rules:{
        login:{
            required: true,
           digits: true,
           minlength:5,
           maxlength:5
        },
        password:{
            required:true,
           minlength:8,
           maxlength:15
        },
        password_again: {
            required:true,
            minlength:8,
            maxlength:15,
            equalTo: ".form-login__password"
          }
    },
     messages:{
        login:{
        required:"Please,type your logins",
       minlength: "At least 5 digits ",
       digits: "Only digits",
       maxlength:"MAX 5 digits ",
    },
    password:{
       minlength: "At least 8 characters ",
       required:"Please,type your password"
    },
    password_again:{
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
        document.location.href = "midka/dl2.html";
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
                result.innerHTML = 'added';
        
            }else{
                result.innerHTML = 'wrong password';
            }
        }