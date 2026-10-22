// Đợi DOM load xong
document.addEventListener('DOMContentLoaded', function () {
    const btnPrint = document.getElementById('btnPrint');

    // Mảng tên các Thứ trong tuần
    const daysOfWeek = [
        "Chủ nhật",
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy"
    ];

    // Hàm xử lý khi bấm nút "In lịch"
    function updateCalendar() {
        // Lấy giá trị từ các ô input
        const day = parseInt(document.getElementById('inputDay').value);
        const month = parseInt(document.getElementById('inputMonth').value);
        const year = parseInt(document.getElementById('inputYear').value);

        // Kiểm tra hợp lệ dữ liệu nhập
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            alert('Vui lòng nhập đầy đủ Ngày, Tháng và Năm!');
            return;
        }

        // Tạo đối tượng Date (Lưu ý: tháng trong Date bắt đầu từ 0 đến 11)
        const dateObj = new Date(year, month - 1, day);

        // 1. Cập nhật Năm, Tháng, Số ngày
        document.getElementById('displayYear').innerText = dateObj.getFullYear();
        document.getElementById('displayMonth').innerText = "Tháng " + (dateObj.getMonth() + 1);
        document.getElementById('displayDay').innerText = dateObj.getDate();

        // 2. Cập nhật Thứ (sử dụng getDay())
        const dayOfWeekIndex = dateObj.getDay();
        document.getElementById('displayWeekday').innerText = daysOfWeek[dayOfWeekIndex];

        // 3. Lời chào theo buổi (dựa trên giờ hiện tại - getHours())
        const currentHour = new Date().getHours();
        let greetingText = "";

        if (currentHour >= 0 && currentHour < 12) {
            greetingText = "Chào buổi sáng!";
        } else if (currentHour >= 12 && currentHour < 18) {
            greetingText = "Chào buổi chiều!";
        } else {
            greetingText = "Chào buổi tối!";
        }

        document.getElementById('displayGreeting').innerText = greetingText;
    }

    // Đăng ký sự kiện click cho nút "In lịch" bằng addEventListener
    btnPrint.addEventListener('click', updateCalendar);

    // Gọi hàm lần đầu để hiển thị dữ liệu mặc định khi vừa tải trang
    updateCalendar();
});