var str;

do {
    str = prompt("please enter a sentence");
} while (str == null || str.length <= 0)

var count = 0;

for (let i=0; i < str.length; i++) {
    switch (str[i]) {
        case 'a':
            count++
            break;
        case 'e':
            count++
            break;
        case 'i':
            count++
            break;
        case 'o':
            count++
            break;
        case 'u':
            count++
            break;
    }
}

document.write(`Number of vowels in your sentence = ${count}`);