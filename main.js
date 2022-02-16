function xify(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + "x";
  }
  return result;
}

console.log(xify("Sonny"));

function yellingChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + "!";
  }
  return result;
}

console.log(yellingChars("Sonny"));

function indexedChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + [i] + str[i];
  }
  return result;
}

console.log(indexedChars("Sonny"));

function numberedChars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result + "(" + (i + 1) + ")" + str[i];
  }
  return result;
}

console.log(numberedChars("hello"));

function exclaim(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "?" || str[i] === ".") {
      return result + "!";
    } else {
      result = result + str[i];
    }
  }
  return result;
}

console.log(exclaim("This is fine."));

function repeatIt(str, max) {
  let result = "";
  let count = 0;
  while (count < max) {
    result = result + str;
    count = count + 1;
  }
  return result;
}

console.log(repeatIt("javascript", 3));

function truncate(str) {
  let result = "";
  for (let i = 0; i < 15; i++) {
    result = result + str[i];
  }

  result = result + "...";
  return result;
}

console.log(
  truncate("The fault, dear Brutus, is not in our stars, but in ourselves.")
);

function ciEmailify(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      result = result + ".";
    } else {
      result = result + str[i];
    }
  }
  return result.toLowerCase() + "@codeimmersives.com";
}

console.log(ciEmailify("Anthony DeRosa"));

function reverse(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

console.log(reverse("colin"));

function onlyVowels(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      result = result + char;
    }
  }
  return result;
}

console.log(onlyVowels("Anthony DeRosa"));

function crazyCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i % 2 === 0) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }
  return result;
}

console.log(crazyCase("hello"));

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

console.log(titleCase("return of the king"));

function camelCase(str) {
  return str
    .split(" ")
    .map(function (word, index) {
      if (index == 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

console.log(camelCase("United States"));
