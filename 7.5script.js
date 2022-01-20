// Переписать консольное приложение из предыдущего юнита на классы.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

class ElectricPower {
    constructor (name, power, on) {
    this.power = power,
    this.name = name,
    this.divice = 'Electrical',
    this.on = on,
    this.onOff = function(){
    if(this.on == true) {
      console.log(`${this.name} включен`)
    } else {
      console.log(`${this.name} отключен`)
    } 
  }
}

getPower = function(name, power, on){
      if(this.on == true){
        console.log(`Потребляемая мощность ${this.name}а равна ${this.power}W`)
      } else {
      console.log(`Чтобы узнать потребляемую мощность ${this.name}а подключите в сеть`)
    }     
    }
}

class GadgetProperty extends ElectricPower {
  constructor (color, name, power, on) {
    super (name, power, on)
    this.color = function(){
        console.log(`Цвет ${name}а ${color}`)
    } 
  }
}


const notebook = new GadgetProperty('Белый', 'Ноутбук', '200', true);
const tablet = new GadgetProperty('Черный', 'Планшет', '100', false);

notebook.onOff()
notebook.getPower()
tablet.onOff()
tablet.getPower()
notebook.color() 
tablet.color()
// console.log(notebook)
// console.log(tablet)