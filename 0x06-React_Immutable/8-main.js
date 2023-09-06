import { Map } from 'immutable';
import printBestStudents from  './8-seq.js';

const grades = Map{
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 79,
        firstName: 'Julien',
        lastName: 'Savea',
    },
    3: {
        score: 29,
        firstName: 'Ari',
        lastName: 'Gol',
    },
};

printBestStudents(grades);