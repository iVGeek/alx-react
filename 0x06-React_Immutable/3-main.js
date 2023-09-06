import { getListObject, addElementToList } from './3-list';

const list = getListObject(['John', 'James']);

console.log(getListObject(list));

console.log(addElementToList(list, 'Jennifer'));