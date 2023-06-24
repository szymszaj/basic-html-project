const day = 'wtorek'

// if (day === 'poniedziałek') {
//     console.log('Dziś jest poniedziałek');
// } else if (day === 'wtorek') {
//     console.log('dziś jest wtorek ');
// }
//  else if (day === 'sroda') {
//     console.log('dziś jest sroda ');
// }
//  else if (day === 'czwartek') {
//     console.log('dziś jest czwartek ');
// }
//  else if (day === 'piątek') {
//     console.log('dziś jest piątek ');
// }
//  else if (day === 'weekend') {
//     console.log('dziś jest weekend ');
// }

switch (day) {
    case 'poniedziałek':
        console.log('Dziś jest poniedziałek')
        break
    case 'wtorek':
        console.log('Dziś jest wtorek')
        break
    case 'sroda':
        console.log('Dziś jest sroda ')
        break
    case 'czwartek':
        console.log('Dziś jest czwartek')
        break
    case 'piątek':
        console.log('Dziś jest piątek ')
        break
        
        default:
            console.log('dziś jest weekend ');
}