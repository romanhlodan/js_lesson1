let name = 'John';
let admin = name;
console.log(admin);


let login = 'Admin';
let password = login;
if (login == 'Admin'){
    if (password == 'Admin'){
        console.log('Welcome')
    }else if (password == 'Cancel'){
        console.log('Canceled')
    }else {
        console.log('Wrong password')
    }
}else if (login == 'Canceled'){
    console.log('Cancel')
}else{
    console.log("I don't know you")
}


switch (login){
    case 'Admin':
        console.log('Welcome');
        break;
    case 'Cancel':
        console.log('Canceled');
        break;
    default:
        console.log("I don't know you")
}

