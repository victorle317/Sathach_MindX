// Nhận xét ở dưới
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".playVideo");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//get the iframe from  youtube

let playVid = document.querySelector(".video")


  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

  
    var close1 = document.getElementsByClassName("close1")[0];

    var modal1 = document.getElementById("myModal-1");

    // Get the button that opens the modal
    var btn1 = document.querySelector("#modal-1");


    btn1.onclick = function () {
      modal1.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    close1.onclick = function () {
      modal1.style.display = "none";
    }

// ------------
 


// (function () {
  var modal2 = document.getElementById("myModal-2");

  // Get the button that opens the modal
  var btn2 = document.querySelector("#modal-2");
  // sửa chưa chọn element close2
  var close2 = document.querySelector(".close2")

  // thiếu lệnh chuyển trạng thái display trong file
  btn2.onclick = function () {
    modal2.style.display = "block"
  }

  close2.onclick = function () {
    modal2.style.display = "none";
  }
// })();



// (function () {
  //   -------------

  // thiếu select model
  var close3 = document.getElementsByClassName("close3")[0];
  var modal3 = document.getElementById("myModal-3");


  // Get the button that opens the modal
  var btn3 = document.querySelector("#modal-3");

  // thiếu sự kiện cho btn3
  btn3.onclick = function () {
    modal3.style.display = "block";
  }


  close3.onclick = function () {
    modal3.style.display = "none";
  }
  //   -------------
// })();


// (function () {
  var close4 = document.getElementsByClassName("close4")[0];

  var modal4 = document.getElementById("myModal-4");

  // Get the button that opens the modal
  var btn4 = document.querySelector("#modal-4");


  btn4.onclick = function () {
    modal4.style.display = "block";
  }
  // thiếu sự kiện cho close 4
  close4.onclick = function () {
    modal4.style.display = "none";
  }
// })();



// (function () {
  // box đầu tiên file HTML thiếu modal

  var close5 = document.getElementsByClassName("close5")[0];

  var modal5 = document.getElementById("myModal-5");

  // Get the button that opens the modal
  var btn5 = document.querySelector("#modal5");


  btn5.onclick = function () {
    console.log('222');
    modal5.style.display = "block";
  }
  // thiếu sự kiện cho close 4
  close5.onclick = function () {
    modal5.style.display = "none";
  }
// })();




//----------------------------------------------------------------
// fix ở đây và trên nữa
// lỗi 1: chưa đặt event listener cho modal video
function Show (){
  modal.style.display = "block";
}

//-------------------------------------------
/**
 * Đánh giá
 * 1) Thiết kế
 * - Web chưa responsive (tuy nhiên vấn đề này ko nên đòi hòi quá nhiều nếu học viên mới )
 * - Không nên tô nền chữ như trong modal(màu vàng) và không căn chỉnh gì cả, cỡ chữ nên to hơn,phần modal ở dưới cần thêm ảnh cho sinh động
 * - Có vẻ web xuất hiện teencode (như tên tướng)
 * - Nhìn chung đã đầy đủ các phần cơ bản của trang web, navbar, banner, main part và footer
 * - Màu sắc chưa hài hòa, phần modal đang là 1 màu hồng, các phần còn lại là màu gradient
 * - Thiếu các thuộc tính hover ở các thumbnail modal(cho vào sẽ đẹp hơn)
 * - thumbnail của modal còn bị lặp ảnh (nên để các ảnh khác cho web sinh động)
 * - favicon của trang web cần đổi thành logo của trang
 * - Content theo mình vẫn còn hơi ít
 * - Hay bị mix giữa tiếng anh và tiếng việt (phần about khaziz)
 * - màu của font chữ thay đổi linh tinh, ko mạch lạc
 * - Nếu đây là học viên mới, thì web này thuộc mức khá, vì cái chính bạn đã biết tạo đc layout cho trang
 * - Modal bật lên phải blur nền đằng sau
 * 
 * 2) Phần tổ chức code
 * - Cách tổ chức code chưa tốt, còn bị lặp lệnh nhiều
 * - Nên khai báo biến ở trên đầu tiên của dòng code (bước này là refactoring)
 * - Cách đặt tên biến chưa được tốt, bị lặp lại nhiều 
 * - Nên nhóm các phần code vào 1 function nào đó có thể là IIFE như ở dưới (cách này nâng cao)
 * (function () {
    statements
    })();
    - Code dài nên chia file ra cho gọn
    - Giải pháp nâng cao : do code có tính lặp lại, nên tạo 1 file data ở local, rồi dùng hàm in ra thay vì gõ từng dòng HTML
    

 */

 //-------------------------------Phần style thêm cho web------------------------------------------
 // Lười quá ko muốn làm :)) điểm thế này thôi 
 // Nói thế thui, học viên style xấu thì vẫn phải sửa chứ :)) 




