// Hàm định dạng số thành chuỗi gồm 2 chữ số (VD: 5 -> "05")
function formatTwoDigits(num) {
    return num < 10 ? "0" + num : "" + num;
}

// Hàm lấy tên ảnh tương ứng cho từng số (VD: 5 -> "05.gif")
function getImgFileName(digit) {
    return "0" + digit + ".gif";
}

// Hàm cập nhật đồng hồ và lời chào
function updateClock() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Chuyển đổi thành dạng chuỗi 2 chữ số
    const strHours = formatTwoDigits(hours);
    const strMinutes = formatTwoDigits(minutes);
    const strSeconds = formatTwoDigits(seconds);

    // Đường dẫn thư mục chứa ảnh
    const path = "Anh/Bai13/";

    // Cập nhật ảnh cho Giờ
    document.getElementById("h1").src = path + getImgFileName(strHours[0]);
    document.getElementById("h2").src = path + getImgFileName(strHours[1]);

    // Cập nhật ảnh cho Phút
    document.getElementById("m1").src = path + getImgFileName(strMinutes[0]);
    document.getElementById("m2").src = path + getImgFileName(strMinutes[1]);

    // Cập nhật ảnh cho Giây
    document.getElementById("s1").src = path + getImgFileName(strSeconds[0]);
    document.getElementById("s2").src = path + getImgFileName(strSeconds[1]);

    // Cập nhật lời chào theo giờ hệ thống
    const greetingElem = document.getElementById("greeting");
    if (hours >= 0 && hours < 12) {
        greetingElem.innerText = "Chào buổi sáng";
    } else if (hours >= 12 && hours < 18) {
        greetingElem.innerText = "Chào buổi chiều";
    } else {
        greetingElem.innerText = "Chào buổi tối";
    }
}

// Chạy hàm ngay lập tức khi tải trang
updateClock();

// Đặt khoảng thời gian cập nhật lại mỗi 1 giây (1000 ms)
setInterval(updateClock, 1000);