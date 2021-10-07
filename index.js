
// let lang = prompt("Тил танданыз: 'ru' же 'ky' ");
// if (lang === "ru"){
//     document.write('Привет!');
// }else if (lang === "ky"){
//     document.write('Саламатсызбы!')
// }else document.write('Бизде мындай тил жок');




// let abcde=prompt('abcde');
// if (abcde[0]=="a"){
//     document.write("Да");
// }else document.write("Нет");



let numBer = prompt("12345");
if (numBer[0]=="1" || numBer[0]=="2" || numBer[0]=="3" || numBer[0]=="4" || numBer[0]=="5" ){
    document.write("Да"+"<br>");
}else document.write("Нет"+"<br>");



let numBer1=+prompt("Каалаган санды жазыныз.");
if (numBer1%2==0){
    document.write("Жуп сан"+"<br>");
} else document.write("Так сан"+"<br>");



let month = prompt("Введите название месяца, чтоб определить время года");
if (month=="январь" || month=="февраль" || month=="декабрь"){
    document.write("Бул кыш" + "<br>");
}else if (month=="март" || month=="апрель" || month=="май"){
    document.write("Бул жаз" + "<br>");
}else if (month=="июнь" || month=="июль" || month=="август"){
    document.write("Бул жай" + "<br>");
}else if (month=="сентябрь" || month=="октябрь" || month=="ноябрь"){
    document.write("Бул куз"+"<br>");
} 




let zodiac = +prompt("В каком году вы родились?");
let cycle = 12;

if (zodiac % cycle === 0) {
  document.write("Ваш знак зодиака по китайскому гороскопу: Обезъяна");
} else if (zodiac % cycle === 1) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу: Петух");
} else if (zodiac % cycle === 2) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Собака");
} else if (zodiac % cycle === 3) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Свинья");
} else if (zodiac % cycle === 4) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Крыса");
} else if (zodiac % cycle === 5) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Бык");
} else if (zodiac % cycle === 6) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Тигр");
} else if (zodiac % cycle === 7) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Кролик");
} else if (zodiac % cycle === 8) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Дракон");
} else if (zodiac % cycle === 9) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Змея");
} else if (zodiac % cycle === 10) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Лощадь");
} else if (zodiac % cycle === 11) {
  document.write("<b>Ваш знак зодиака по китайскому гороскопу:</b> Коза");
} else {
  alert("Неправильно был введен год рождения");
}



