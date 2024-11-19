// javascript cơ bản
let a = "huy"
console.log("hello", a);
console.log("ket qua ", a + 5 + 4);
console.log("ket qua", 5 + 4 + a); 
console.log("ket qua", 4 + 5 + a + 4 + 5 + a);
console.log("ket qua", a + (6+4));
let b =`'HELLO'


"WORLD"`;

console.log(b);
// các dạng trong string
// slice cat chuoi (start, end)
// substring cat chuoi(start, end)
// substr cat chuoi(start, length)
// vi tri chuoi bat dau tu 0
let i = "HELLO WORLD";
let p = i.length;
console.log("so luong ky tu trong chuoi", p);
let v = i.slice(0,5); 
console.log("slice : ",v);
let h = i.slice(-5);
console.log("slice: ",h);
let j = i.substring(0,5);
console.log("substring :", j);
let k = i.substr(0,3);
console.log("substr :", k);
let o = i.replace("HELLO", "hello");
console.log("raplace : ", o);
let g = i.replace(i, a);
console.log("replace: ", g);
let l = i.toLowerCase();
console.log("chuyen chu thanh chu thuong ", l);
let n = i.toUpperCase();
console.log("chuyen chu thanh chu hoa ", n);
let uu = 5;
let ui = '5';
console.log(uu === ui, "uu : ", typeof uu, "ui :", typeof ui);
let io = uu + ui;
console.log(" uu + ui :", io);
let lo = uu - ui;
console.log("uu - ui:", lo);
let po = +ui;
console.log("type po:", typeof po);
console.log(`fifteen is ${uu+po}
${2*uu+po} in the ${uu}.`);
console.log(`${uu === ui} type uu : ${typeof uu} type ui : ${typeof ui}`);
let ik = {};
console.log (`kieu du lieu : ${typeof ik}`);
let obj = {
    name : "huy",
    address: "long an",
    sdt : "0349369139",
    pop: function()
    {
        console.log("hello world");
        return;

    }
}
console.log(`ho ten : ${obj.name}, dia chi : ${obj.address}, so dien thoai : ${obj.sdt}`);
console.log(obj.pop());
obj[name] = "huy pham";
console.log("ten sau khi thay doi : ", obj[name]);

let objj = {
    name : "huy",
    address: "long an",
    sdt : "0349369139"
}
console.log(" check data :", objj);
let ol = ["MU", "CHELSEA", "MAN CITY"];
console.log("type of : ", typeof ol, ol);
console.log(ol[0]);
console.log(ol.length);
// let fruit = ['APPLE', 'ORGANE', 'BANANA'];
// let flen = fruit.length;
// let text = "<ul>";
// for (let i = 0; i < flen; i++)
// {
//     text += "<li>" + fruit[i] + "</li>";
   
// }
// text += "</ul>";
// console.log(text);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let text = "<ul>";
for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
console.log(text);
console.log(fruits.push('Watermolon')); // them phan tu nay vao cuoi mang
console.log(fruits.pop()); // loai bo phan tu cuoi cung ra khoi mang
console.log(fruits.shift()); // loai bo phan tu dau tien trong mang
console.log(fruits.unshift("Watermelon")); // them phan tu vao dau mang
console.log(fruits.sort()); // sap xep theo bang thu tu chu cai
console.log(fruits.reverse()); //dao nguoc cac phan tu trong mang
let iuo = 5;
console.log(iuo++);
console.log(iuo);
let oopp = 5;
console.log(++oopp);
let bn = 0;
let flag = false;
while (flag == false)
{
    console.log("check value : " , bn);
    bn++;
    if (bn == 10) flag = true;
}
// break thoat khoi vong lap
let huy = 0;
while (huy <= 5)
{
    huy++;
    if (huy === 3)
    {
        continue; // khong thuc hien gi ca bo qua truong hop nay
    }
    else
    {
        console.log("gia tri" , huy);
    }
    
}
function xo(a ,b){
    if (a === 10)
   return; // thoat khoi ham
   else
   return a * b;
}
let mk = xo(10,10);
console.log("ket qua cua ham tinh : " , mk);
// arrow function
let sum = (a, b) =>{
    return a * b;
}
console.log("tich cua  hai so :", sum(10,10));
// ham setTimeOut qui dinh thoi gian ham do chay
let hello = () =>{
    console.log("huy dzzz");
}
setTimeout(hello(), 50000); // qui dinh thoi gian ham chay sau 5s
let arr = [1,2,3,4,5,6,7,8,9];
// filter tao mot mang moi va trả về các phần tử thỏa điều kiện và  mang ban dau khong bi thay doi  neu khong tim ra tra ve mot array rỗng
let filter = arr.filter((item, index) =>{ // item cac phan tu trong mang , index vi tri cac phan tu trong mang
    console.log("check filter " , "item : ", item, "index :", index);
    return item > 5;

});
console.log(filter);
let arr1 = [ 
    {name:"huy pham", age: 21},
    {name:"gia phuc", age:23},
    {name:"fdfdfd", age:21},
    {name:"tffdfdft", age :30},


];
let sool = arr1.filter((item, index)=>{
    return item && item.age === 21;

});
console.log(sool);
// find tra ve phan tu tim thay đầu tiên trong mảng nếu không tìm thấy trả về undifined
let sools = arr1.find((item, index) => {
    return item && item.age === 21;
});
console.log(sools);
// map tao ra mot mang moi 
// Phương thức map() tạo một mảng mới được điền với các kết quả của việc gọi một hàm được cung cấp trên mọi phần tử trong mảng gọi.
let mapArr = arr.map((item, index) => {
    item = item * 2;
    return item;

});
console.log(mapArr);
let arr2 = [6,3,8,1,5];
let arr3 =[];
arr2.sort((item1, item2) => {
    if (item1 > item2) arr3.push(item1)
    console.log(arr3);
    return item1 - item2;
});
console.log(arr2);