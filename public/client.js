class Instruments {
 constructor (type, name, size){
   this.type = type;
   this.name = name;
   this.size = size;

 }
 sound(){
   console.log('ELTON JOHN!');
 }
}

class Piano extends Instruments {

    constructor(name, size, type, strings, keys){
      super(type, name, size );
      this.strings = strings;
      this.keys = 88;
    }


}

class Guitar extends Instruments{
  constructor(type, name, size, strings, gtrType){
    super(type, name, size);
    this.gtrType = gtrType;
    this.strings = strings;
  }
  artist(){
    console.log('PRINCE! PURPLE RAIN!');
  }
}

var Baldwin = new Piano('C142', 'baby grand', 230);
var Fender = new Guitar('Telecaster', 'MadCat', 'standard', 6,  'electric');
console.log(Baldwin.sound());
console.log(Fender.artist());
