username="admin";
pw="421$$";

user_username=prompt("please enter username");
user_pw=prompt("please enter password");

unFlag=false,pwFlag=false;

let un_attempt= (user_username==username)?
() => unFlag=true :
() => alert("incorrect username");;

let pw_attempt= (user_pw==pw)?
() => pwFlag=true :
() => alert("incorrect password");

un_attempt();
pw_attempt();

 if(unFlag== true&&pwFlag == true){
    document.write("Welcome Login Success");
}
