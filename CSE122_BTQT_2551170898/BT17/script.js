const form = document.getElementById("register-form");

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Hàm hiển thị thông báo lỗi
function showError(input, message) {
    input.classList.remove("valid");
    input.classList.add("error");
    
    const msgElem = document.getElementById(`msg-${input.id}`);
    msgElem.className = "msg error-msg";
    msgElem.innerHTML = `✗ ${message}`;
}

// Hàm hiển thị hợp lệ
function showValid(input, message = "Hợp lệ") {
    input.classList.remove("error");
    input.classList.add("valid");
    
    const msgElem = document.getElementById(`msg-${input.id}`);
    msgElem.className = "msg valid-msg";
    msgElem.innerHTML = `✓ ${message}`;
}

// Kiểm tra Họ và tên (không được để trống)
function checkFullname() {
    const value = fullnameInput.value.trim();
    if (value === "") {
        showError(fullnameInput, "Họ và tên không được để trống");
        return false;
    }
    showValid(fullnameInput);
    return true;
}

// Kiểm tra Email (đúng định dạng biểu thức chính quy)
function checkEmail() {
    const value = emailInput.value.trim();
    // Regex kiểm tra email chuẩn cơ bản
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;

    if (value === "") {
        showError(emailInput, "Email không được để trống");
        return false;
    } else if (!emailRegex.test(value)) {
        if (!value.includes("@")) {
            showError(emailInput, "Email không hợp lệ (thiếu ký tự @)");
        } else if (!value.split("@")[1] || !value.split("@")[1].includes(".")) {
            showError(emailInput, "Email không hợp lệ (thiếu tên miền)");
        } else {
            showError(emailInput, "Email không đúng định dạng");
        }
        return false;
    }
    showValid(emailInput);
    return true;
}

// Kiểm tra Mật khẩu (≥ 6 ký tự)
function checkPassword() {
    const value = passwordInput.value;
    if (value.length < 6) {
        showError(passwordInput, "Mật khẩu phải có ít nhất 6 ký tự");
        return false;
    }
    showValid(passwordInput);
    return true;
}

// Kiểm tra Xác nhận mật khẩu (phải khớp)
function checkConfirmPassword() {
    const passwordValue = passwordInput.value;
    const confirmValue = confirmPasswordInput.value;

    if (confirmValue === "") {
        showError(confirmPasswordInput, "Vui lòng nhập lại mật khẩu");
        return false;
    } else if (confirmValue !== passwordValue) {
        showError(confirmPasswordInput, "Mật khẩu xác nhận không khớp");
        return false;
    }
    showValid(confirmPasswordInput);
    return true;
}

// Lắng nghe sự kiện "input" để kiểm tra thời gian thực khi người dùng gõ
fullnameInput.addEventListener("input", checkFullname);
emailInput.addEventListener("input", checkEmail);
passwordInput.addEventListener("input", () => {
    checkPassword();
    if (confirmPasswordInput.value !== "") {
        checkConfirmPassword();
    }
});
confirmPasswordInput.addEventListener("input", checkConfirmPassword);

// Xử lý khi nhấn Submit form
form.addEventListener("submit", function (e) {
    // Chặn gửi form tự động
    e.preventDefault();

    // Kiểm tra tất cả trường
    const isFullnameValid = checkFullname();
    const isEmailValid = checkEmail();
    const isPasswordValid = checkPassword();
    const isConfirmValid = checkConfirmPassword();

    // Nếu tất cả đều hợp lệ thì cho phép thành công
    if (isFullnameValid && isEmailValid && isPasswordValid && isConfirmValid) {
        alert("Đăng ký tài khoản thành công!");
        // form.submit(); // Bỏ comment dòng này nếu muốn gửi tới máy chủ thật
    }
});