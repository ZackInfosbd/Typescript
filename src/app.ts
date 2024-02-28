// Factory Use Case Example Code
import ChairFactory from './2024/design patterns/factory/chair-factory';

const SCHAIR = ChairFactory.getChair('SmallChair');
console.log(SCHAIR.getDimensions());

const MCHAIR = ChairFactory.getChair('MediumChair');
console.log(MCHAIR.getDimensions());
