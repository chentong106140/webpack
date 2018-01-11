import _ from 'lodash';
import numRef from './ref.json';

export  function numToWord(num) {
    return _.reduce(numRef,function (total, obj) {
        console.log(total,obj);
        return obj.num ===num ? obj.word : total;
    },{})
}


export  function wordToNum(word) {
    return _.reduce(numRef,function (accum, ref) {
        console.log(accum,ref);
        return ref.word === word && word.toLowerCase() ? ref.num : accum;
    },-1);
}