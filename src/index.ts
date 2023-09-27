import './style.css';
import './styles.scss';

type person<T> = {
    name: string;
    age: T;
    abc?: boolean;
};

const person1: person<string> = {
    name: 'Sudhi',
    age: '37'
};

console.log({ ...person1, abc: true });
