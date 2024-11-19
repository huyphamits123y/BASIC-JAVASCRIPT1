// javascript nâng cao
// đồng bộ là chạy theo thứ tự trên xuống dòng code phía sau phải đợi dòng code phía trước chạy  xong mới chạy được
// bất đồng bộ là chạy không theo thứ tự trên xuống dòng code nào nhanh thì chạy trước chậm thì chạy sau và vẫn ra được kết quả cuối cùngcùng
// ví dụ về bất đồng bộ
console.log(1);
console.log(2);
console.log(3);
setTimeout(() => {
    console.log("check time"); // ví dụ về bất đồng bộ là hàm này qui định thời gian chạy sau 3s nên có kết quả là 1 2 3 5 check time

}, 3000);
console.log(5);
// promise
const promiseExp = () => {

    return new Promise((resolve, reject) => {
        resolve("I am huyphamdev");

    });
}
promiseExp().then(data => {
    console.log(data);

});