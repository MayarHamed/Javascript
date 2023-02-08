var age;

do{
    age = prompt("Please enter your age");
    if (Number(age) < 0) {
        alert("age should be a positive number")
        continue;
    }
    else if (Number(age) > 1 && Number(age) < 10) {
        alert("you are a child")
    }
    else if (Number(age) > 11 && Number(age) < 18) {
        alert("you are a teenager")
    }
    else if (Number(age) > 19 && Number(age) < 50) {
        alert("you are a grown up")
    }
    else if (Number(age) > 50) {
        alert("you are old")

    }
}while (age != null || age.length <= 0) ;