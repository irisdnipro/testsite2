let mas = [1,2,3,"Joe",5,-7,-8];
//Вывести массив в цикле
mas.array.forEach((item) {
	document.write(item+"<br>");
	
});
//ильтрация массива
let mas1 = mas.filter((item) => {
	return item > 0;
});
document.write(mas1+"<br>");