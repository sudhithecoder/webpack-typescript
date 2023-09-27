import { User } from './User.type';

const url = `https://jsonplaceholder.typicode.com/users`;
const request = new Request(url, {
    method: 'GET',
    cache: 'no-store'
});

export const fetchUser = async (): Promise<User[]> => {
    const res = await fetch(request);
    if (!res.ok) {
        throw Error('Data Fetching failed');
    }
    const userData: User[] = await res.json();
    return userData;
};
