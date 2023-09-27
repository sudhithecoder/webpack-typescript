import { fetchUser } from './fetchUser';
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

const usersDiv = document.querySelector('#users');

fetchUser().then((users) => {
    console.log(users);
    const usersHtml = users
        .map(
            (user) =>
                `
        <div class="user-container">
            <p>User Name : ${user.name}</p>
            <p>Address : ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
        </div>
        `
        )
        .join(' ');
    usersDiv?.insertAdjacentHTML('afterbegin', usersHtml);
});
