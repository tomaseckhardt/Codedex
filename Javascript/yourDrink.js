const yourDrink = "Your drink is: ";

const reverse = function (s) {
  return s.split("").reverse().join("");
};

const barista = [
  {
    Str1: "ion",
    Str2: reverse("rcne"),
    Str3: "ypt",
    request: function (preference) {
      return preference + "Secret word: " + this.Str2 + this.Str3 + this.Str1;
    },
  },
];

console.log(barista[0].request(yourDrink));
