"use strict";
let guest_list = ['Saad Khan', 'Ibad Khan', 'Hassan Rehman', 'Zeeshan Saleem'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!')
// }
let absent_Guest = 'Ibad Khan';
let new_Guest = 'Shahrukh Alam';
guest_list[1] = new_Guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!');
}
console.log(`Mr. ${absent_Guest} is not coming.`);
console.log('Good News! We find a big table so we are inviting 3 more guests.');
guest_list.unshift('Imran Khan');
guest_list.splice(2, 0, 'Bilal Qazi');
guest_list.push('Zubair bhai');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is pleasure to invite you in our party.\n\nThank You!');
}
