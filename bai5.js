const arrNumber = [9, 3, 5, 8, 1, 4, 3, 2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Thêm số 10 vào đầu và cuối (push, shift)
arrNumber.push(10);
arrNumber.unshift(10);

// Xóa số đầu và cuối (pop, shift)
arrNumber.pop();
arrNumber.shift();

// Sắp xếp tăng dần mảng arrNumber và arrStr (sort)
arrNumber.sort((a, b) => a - b);
arrStr.sort();

// Lấy ra mảng con từ vị trí 3 đến 5 từ mảng arrNumber (slice)
const subArrNumber = arrNumber.slice(3, 6);

// Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber (splice)
arrNumber.splice(3, 1, 11, 12, 13);

// Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber (indexOf)
const firstIndex3 = arrNumber.indexOf(3);

// Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber (lastIndexOf)
const lastIndex3 = arrNumber.lastIndexOf(3);

// Kiểm tra phần tử có giá trị 3 có trong mảng arrNumber không (includes)
const includes3 = arrNumber.includes(3);

// Duyệt mảng forEach
arrNumber.forEach((element) => {
  console.log(element);
});

// Duyệt mảng map
const mappedArr = arrNumber.map((element) => element * 2);

// Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber (filter)
const filteredArr = arrNumber.filter((element) => element > 5);

// Tính tổng các phần tử mảng arrNumber (reduce)
const sum = arrNumber.reduce(
  (accumulator, currentValue) => accumulator + currentValue,0);

// Nối 2 mảng arrNumber và arrStr lại thành 1 mảng (concat)
const combinedArr = arrNumber.concat(arrStr);

// Nối các phần tử mảng arrStr các nhau bởi dấu "-" (join)
const joinedStr = arrStr.join("-");

// Gán tất cả các phần tử mảng arrNumber bằng 0 (fill)
arrNumber.fill(0);

// Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng (copyWithin)
arrNumber.copyWithin(1, 3, 5);

// Tìm kiếm phần tử trong mảng thõa mãn điều kiện (find, findIndex)
const foundElement = arrNumber.find((element) => element > 5);
const foundIndex = arrNumber.findIndex((element) => element > 5);

// Tìm kiếm phần tử cuối cùng trong mảng thõa mãn điều kiện (findLast, findLastIndex)
const foundLastElement = arrNumber.reverse().find((element) => element > 5);
const foundLastIndex = arrNumber.reverse().findIndex((element) => element > 5);

// Kiểm tra tất cả các phần tử thõa mãn điều kiện (every)
const allGreaterThanZero = arrNumber.every((element) => element > 0);

// Kiểm tra ít nhất một phần tử thõa mãn điều kiện (some)
const someGreaterThanZero = arrNumber.some((element) => element > 0);
