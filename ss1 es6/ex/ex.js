//1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.

let arrEx1 = [12, 3, 21, 5, 7, 2, 8, 1];
let newArrEx1 = arrEx1.filter((number) => number > 5);
console.log(newArrEx1.sort((a, b) => a - b));
// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
let arrEx2 = [12, 3, 4];
console.log(arrEx2.reduce((total, item) => total + item));

//  3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
const arrEx3 = [4,66,2,7,9,12];
const resultFind = arrEx3.find((item) => item === 66);
console.log(resultFind === undefined ? "Không tìm thấy" : resultFind);

// 4 Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.

const arrEx4 = [12,5,7,-9,12,3,2];
const newArrEx4 = arrEx4.filter((number) => number > 0);
console.log(arrEx4.length === newArrEx4.length?'Bằng nhau':'Không bằng nhau ')

// 5 Tìm phần tử đầu tiên trong mảng lớn hơn 3.
const arrEx5 = [2,1,17,-9,12,3,2];
const newArrEx5 = arrEx5.find((item) => item > 3 );
console.log(newArrEx5)

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
const arrEx6 = [19,33,44,22,12]
let[first,...rest] = arrEx6;
console.log(first)
console.log(rest)

// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

const personArrEx7 = [{
    name : "Bảo",
    age : 12,
    address : "Huế"
}, {
    name : "Độ",
    age : 21,
    address : "Quảng Nam"
}];

let[bao,doz] = personArrEx7;
console.log(doz.name + " " + doz.age)
console.log(bao.name + " " + bao.age)

// 8  Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
let funcEx8 = (...arg) => arg.reduce((total, item) => total + item);
console.log(funcEx8(1,2,3,4,5))

// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.

let funcEx9 = (...temp) => (  console.log("Welcome " + `${temp.map((row) => row )}`))
funcEx9("văn độ","nhật bảo","Khanh duy");

// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" 
// bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.
let  title = "sach hay";
let  author = "van do";
let  pages = 30;
let displayInfo = () => console.log(title + " " + author + " " + pages);
let book = {title,author,pages,displayInfo}

book.displayInfo();










