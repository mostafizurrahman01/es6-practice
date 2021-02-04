const person = { name: 'Jack William', age: 17, job: 'facebook', gfName: 'Ema Watson', address: 'Kochukhet', phone: '1112233' };
// const gfName = person.gfName;
// const phone = person.phone;
// const {phone, gfName } = person;

// console.log(gfName,phone);


const complexObject = {
    name: 'abc',
    info: {
        address: 'kola-bagan',
        leader: 'Tiger Leader'
    }
}
const {leader} = complexObject.info;
console.log(leader);

const friends = ['Sakib khan' , 'Arman Khan' , 'Aamir khan' , 'Salman khan'];
const [chotoFriend , ...olderF] = friends;  
// console.log(chotoFriend , nextFriend , restFriend);
console.log(olderF);