function kiemtramasinhvien() {
  var masinhvien = prompt("Nhập mã sinh viên của ban: ");
  if (masinhvien.length == 10) {
    alert("Mã sinh viên hợp lệ!");
  } else {
    var xacnhan = confirm("Mã sinh viên không đúng!");
    if (xacnhan == true) {
      kiemtramasinhvien();
    } else {
      alert("Cảm ơn bạn!");
    }
  }
}
kiemtramasinhvien();
