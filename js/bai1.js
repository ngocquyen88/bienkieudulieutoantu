let vatly=prompt("Nhập điểm vật lý:");
let hoahoc=prompt("Nhập điểm hóa học:");
let sinhhoc=prompt("Nhập điểm sinh học:");
let average=(parseFloat(vatly)+parseFloat(hoahoc)+parseFloat(sinhhoc))/3;
let total=parseFloat(vatly)+parseFloat(hoahoc)+parseFloat(sinhhoc);
document.write("Điểm trung bình của bạn là: "+average);
document.write("Tổng điểm của bạn là: "+total);
