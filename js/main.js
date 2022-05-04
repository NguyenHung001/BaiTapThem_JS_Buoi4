// const thang31Ngay = [1,3,5,7,8,10,12];
// const thang30Ngay = [4,6,9,11];

// ! Bài 1: ngày hôm qua và ngày mai
/**
 * INPUT: ngày tháng năm
 * SOLUTION:
 *  - kiểm tra người nhập: 0<day<=31, 0<month<=12
 *  - ngayhomqua:
 *    + nếu là ngày đàu tháng 
 *          + tháng 1: 31/12/year-1
 *          + tháng 3: 28/2
 *          + tháng 4,6,8,9,11: 31/month-1/year
 *          + tháng còn lại: 30/month-1/year
 *    + ko phải ngày đầu tháng: day-1/month/year
 *  - ngaymai:
 *      + day=28 nếu month=2 thì : 1/3/year
 *      + day=30 nếu là tháng 4,6,9,11: 1/month+1/year
 *      + day=31 nếu là tháng 12: 1/1year+1 nếu không thì 1/month+1/year
 *      + ko phải những trường hợp trên: day+1/month/year
 * OUTPUT: gắn even và in ra kết quả
 */
function ngayHomQua(){
    var day = Number(document.getElementById('day').value);
    var month = Number(document.getElementById('month').value);
    var year = Number(document.getElementById('year').value);
    var kqBai1 = document.getElementById('txtNotify1');
// <----------------------------------------------------------->
    --day;
    if(day<0 || day>32 || month==0 || month>12){
        kqBai1.innerHTML = 'Nhập không hợp lệ!';
    }else if((month==4 || month==6 || month==9 || month==11) && day==30){
        kqBai1.innerHTML = 'Nhập ngày không hợp lệ!'
    }else if(month==2 && day>27){
        kqBai1.innerHTML = 'Nhập ngày không hợp lệ!'
    }else if(day==0){
        switch(month){
            case 1:
                kqBai1.innerHTML = 'Ngày hôm qua: 31/12/' + (year-1);
                break;
            case 3:
                kqBai1.innerHTML = 'Ngày hôm qua: 28/2/' +year;
                break;
            case 4:
            case 6:
            case 8:
            case 9:
            case 11:
                kqBai1.innerHTML = 'Ngày hôm qua: 31/' + (month-1) +'/' + year;
                break;
            default:
                kqBai1.innerHTML = 'Ngày hôm qua: 30/' + (month-1) +'/' + year;
                break;
        }
    }else{
        kqBai1.innerHTML = 'Ngày hôm qua: ' + day + '/' + month + '/' + year;
    }
}
function ngayMai(){
    var day = Number(document.getElementById('day').value);
    var month = Number(document.getElementById('month').value);
    var year = Number(document.getElementById('year').value);
    var kqBai1 = document.getElementById('txtNotify1');
// <----------------------------------------------------------->
    ++day;
    if(day<2 || day>32 || month==0 || month>12){
        kqBai1.innerHTML = 'Nhập không hợp lệ!';
    }else if((month==4 || month==6 || month==9 || month==11) && day==32){
        kqBai1.innerHTML = 'Nhập ngày không hợp lệ!'
    }else if(month==2 && day>29 ){
        kqBai1.innerHTML = 'Nhập ngày không hợp lệ!'
    }else
    if(day==29){
        (month==2) ? kqBai1.innerHTML = 'Ngày mai: 1/3/' + year :
                     kqBai1.innerHTML = 'Ngày mai: ' + day + '/' + month + '/' + year;
    } else if(day==31){
        switch(month){
            case 4:
            case 6:
            case 9:
            case 11:
                kqBai1.innerHTML = 'Ngày mai: 1/' + (month+1) + '/' + year;
                break;
            default:
                kqBai1.innerHTML = 'Ngày mai: ' + day + '/' + month + '/' + year;
                break;
        }   
    } else if(day==32){
        switch(month){
            case 12:
                kqBai1.innerHTML = 'Ngày mai: 1/' + 1 + '/' + (year+1);
                break;
            default:
                kqBai1.innerHTML = 'Ngày mai: 1/' + (month+1) + '/' + year;
                break;
        }
    }else{
        kqBai1.innerHTML = 'Ngày mai: ' + day + '/' + month + '/' + year;
    }
}
// ! đếm số ngày của 1 tháng
/**
 * INPUT: tháng năm
 * SOLUTION: kiểm tra tháng nhập hợp lệ : 0<month<=12
 *  - các tháng có 30 ngày: 4,6,9,11
 *  - các tháng có 31 ngày: 1,3,5,7,8,10,12
 *  - nếu là tháng 2 thì ktra năm nhuận là 29 ngày, ko nhuận 28 ngày
 * OUTPUT: hiển thị kết quả
 */
function demSoNgay(){
    var month = Number(document.getElementById('month2').value);
    var year = Number(document.getElementById('year2').value);
    var kqBai2 = document.getElementById('txtNotify2');
// <---------------------------------------------------------->
    if(month<=0 || month>12){
        kqBai2.innerHTML = 'Nhập không hợp lệ!';
    }else if(month != 2){
        switch(month){
            case 4:
            case 6: 
            case 9:
            case 11:
                kqBai2.innerHTML = 'Tháng ' + month + ' năm ' + year + ' có 30 ngày';
                break;
            default:
                kqBai2.innerHTML = 'Tháng ' + month + ' năm ' + year + ' có 31 ngày';
                break;
        }
    }else{
        ((year % 4 ==0) || (year % 400 ==0)) ? 
            kqBai2.innerHTML = 'Tháng ' + month + ' năm ' + year + ' có 29 ngày':
            kqBai2.innerHTML = 'Tháng ' + month + ' năm ' + year + ' có 28 ngày';
        }
    }
// ! cách đọc số
/**
 * INPUT: số có 3 chữ số
 * SOLUTION: tách 3 chữ số hàng trăm chục đơn vị và gán cách đọc tên cho từng số từng số từ 1 đến 9,
 * ghép chuỗi cách đọc tương ứng vs mỗi số
 * OUTPUT: in ra màn hình kết quả
 */
function cachDocSo(){
    var number = Number(document.getElementById('number').value);
    var kqBai3 = document.getElementById('txtNotify3');
    var a = '';
    var b = '';
    var c = '';
    var soHangDonVi = number % 10;
    var soHangChuc =  Math.floor(number / 10) % 10;
    var soHangTram = Math.floor(number / 100);
// <---------------------------------------------------->
    switch(soHangTram){
        case 1: a = 'Một trăm '; break;
        case 2: a = 'Hai trăm '; break;
        case 3: a = 'Ba trăm '; break;
        case 4: a = 'Bốn trăm '; break;
        case 5: a = 'Năm trăm '; break;
        case 6: a = 'Sáu trăm '; break;
        case 7: a = 'Bảy trăm '; break;
        case 8: a = 'Tám trăm '; break;
        default: a = 'Chín trăm '; break;

    }
    switch(soHangChuc){
        case 1: b = 'mười'; break;
        case 2: b = 'hai mươi'; break;
        case 3: b = 'ba mươi'; break;
        case 4: b = 'bốn mươi'; break;
        case 5: b = 'năm mươi'; break;
        case 6: b = 'sáu mươi'; break;
        case 7: b = 'bảy mươi'; break;
        case 8: b = 'tám mươi'; break;
        default: b = 'chín mươi'; break;
    }
    switch(soHangDonVi){
        case 1: c = ' mốt'; break;
        case 2: c = '  hai'; break;
        case 3: c = ' ba'; break;
        case 4: c = ' bốn'; break;
        case 5: c = ' năm'; break;
        case 6: c = ' sáu'; break;
        case 7: c = ' bảy'; break;
        case 8: c = ' tám'; break;
        default: c = ' chín'; break;
    }
    if(number<100 || number>999){
        kqBai3.innerHTML = 'Mời nhập lại !';
    }else if(soHangChuc == 1 && soHangDonVi == 1){
        kqBai3.innerHTML = a + b +' một';
    }else if(soHangDonVi == 0){
        kqBai3.innerHTML = a + b;
    }else if(soHangChuc == 0){
        if(soHangDonVi == 1){
            kqBai3.innerHTML = a + 'lẻ một';
        }else{
            kqBai3.innerHTML = a + 'lẻ ' + c;
        }
    }else{
        kqBai3.innerHTML = a + b + c;
    }
}
// !Sinh viên xa trường nhất
// sinhvien1 d1 X[0],Y[0]
// sinhvien2 d2 X[1],Y[1]
// sinhvien3 d3 X[2],Y[2]
// truonghoc X[3],Y[3]
function sinhVien(){
    var name1 = document.getElementById('sv1').value;
    var name2 = document.getElementById('sv2').value;
    var name3 = document.getElementById('sv3').value;
    var kqBai4 = document.getElementById('txtNotify4');
    var X = Array.from(document.querySelectorAll('.toadoX')).map(e => parseInt(e.value));
    var Y = Array.from(document.querySelectorAll('.toadoY')).map(e => parseInt(e.value));
// <----------------------------------------------->
    function tinhQuangDuong(a1,a2,b1,b2){
        var quangDuong = Math.sqrt(Math.pow((a2-a1),2) + Math.pow((b2-b1),2));
        return quangDuong;
    }
    var d1 = tinhQuangDuong(X[3],X[0],Y[3],Y[0]);
    var d2 = tinhQuangDuong(X[3],X[1],Y[3],Y[1]);
    var d3 = tinhQuangDuong(X[3],X[2],Y[3],Y[2]);
    var result = 'Sinh viên xa trường nhất: ';
    (name1 == '' || name2 == '' || name3 == '') ?
        kqBai4.innerHTML = 'Chưa nhập đủ tên sinh viên !' :
    (d1==d2 && d2==d3) ?
        kqBai4.innerHTML = 'Khoảng cách từ trường tới nhà 3 sinh viên bằng nhau' :
    (d1>d2 && d1>d3) ?
        kqBai4.innerHTML = result + name1 :
    (d2>d1 && d2>d3) ?
        kqBai4.innerHTML = result + name2 : 
        kqBai4.innerHTML = result + name3
}