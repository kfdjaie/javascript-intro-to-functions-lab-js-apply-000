function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  if (string === 'I love you, Grandma.'){
    return "I love you, too.";
  }
  elseif (string === string.toLowerCase()){
    return "I can\'t hear you!";
  }
  elseif (string === string.toUpperCase()){
    return "YES INDEED!";
  }
}