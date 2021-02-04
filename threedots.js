const ages = [12,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,30,42];
const allAges = ages.concat(ages2).concat(ages3);

//dot method
const allAges2 = [...ages, ages2, ages3];

console.log(allAges);

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisha = [50,40,60];
// const maximum = Math.max(business,minister,sochib);
const maximum = Math.max(...takaPoisha);

console.log(maximum);


