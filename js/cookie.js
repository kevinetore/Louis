import * as Cookies from "js-cookie";

Cookies.set('name', 'etore', { expires: 7 });
var data = Cookies.get('name');
console.log(data);
