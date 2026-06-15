//No a tady zatím nevím, protože jsem musel jít spát, ale zítra se na to podívám.

//tady je ještě test Branche

//TODO - @tomaseckhardt

let date = new Date();
let month = date.getMonth() + 1;

switch (month) {
    case 1:
        console.log("Your horoscope is Capricorn");
        break;
    case 2:
        console.log("Your horoscope is Aquarius");
        break;
    case 3:
        console.log("Your horoscope is Pisces");
        break;
    case 4:
        console.log("Your horoscope is Aries");
        break;
    case 5:
        console.log("Your horoscope is Taurus");
        break;
    case 6:
        console.log("Your horoscope is Gemini");
        break;
    case 7:
        console.log("Your horoscope is Cancer");
        break;
    case 8:
        console.log("Your horoscope is Leo");
        break;
    case 9:
        console.log("Your horoscope is Virgo");
        break;
    case 10:
        console.log("Your horoscope is Libra");
        break;
    case 11:
        console.log("Your horoscope is Scorpio");
        break;
    case 12:
        console.log("Your horoscope is Sagittarius");
        break;
    default:
        console.log("Invalid month");
}  