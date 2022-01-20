// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricPower(name, power, on){
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

ElectricPower.prototype.getPower = function(name, power, on){
      if(this.on == true){
        console.log(`Потребляемая мощность ${this.name}а равна ${this.power}W`)
      } else {
      console.log(`Чтобы узнать потребляемую мощность ${this.name}а подключите в сеть`)
    }
}

function GadgetProperty(name, power, on, color){
    this.color = function(){
        console.log(`Цвет ${name}а ${color}`)
    }    
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

GadgetProperty.prototype = new ElectricPower()

const laptop = new GadgetProperty('Ноутбук', '200', true, 'Белый');
const tablet = new GadgetProperty('Планшет', '100', false, 'Черный');

laptop.onOff()
laptop.getPower()
tablet.onOff()
tablet.getPower()
laptop.color() 
tablet.color()
// console.log(laptop)
// console.log(tablet)