function basicTeenager(age){
  if (age>12 && age< 20) {
    return "You are a teenager!"
  }
}
function teenager(age){
  if (age>12 && age<20) {
    return "You are a teenager!"
  } else {
    return "You are not a teenager"
  }
}
function ageChecker(age){
  if (age>12 && age<20) {
    return "You are a teenager!"
  } else if (age<13) {
    return "You are a kid"
  } else {
    return "You are a grownup"
  }
}

function ternaryTeenager(age){
  return age>12 && age<20 ? "You are a teenager" : "You are not a teenager"
}
function switchAge(age){
  switch(age){
    case 13:
    console.log("You are a teenager");
    break;
    case 14:
    console.log("You are a teenager");
    break;
    default:
    return("You are a teenager");
  }
}
