// Модуль 7. Задание 1
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const education = {
	platform: 'Skillfactory',
	speciality: 'Frontend-developer' 
};

const student = Object.create(education);
    student.name = 'Roman';
    student.age = 31;
    student.student = true;
    
function showOwnProp(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) 
        console.log(`${key} - ${obj[key]}`);
	}
}
showOwnProp(student);