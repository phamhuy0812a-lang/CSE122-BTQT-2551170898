let currentInput = "0";
let previousInput = "";
let isResultShown = false;

const currentOperandScreen = document.getElementById("current-operand");
const previousOperandScreen = document.getElementById("previous-operand");

// Hàm cập nhật hiển thị lên màn hình
function updateDisplay() {
    currentOperandScreen.innerText = currentInput;
    previousOperandScreen.innerText = previousInput;
}

// Hàm thêm ký tự (số hoặc phép tính) vào màn hình
function appendCharacter(char) {
    if (isResultShown) {
        // Nếu vừa bấm tính xong mà bấm số mới thì reset lại chuỗi
        if (!isNaN(char) || char === '(') {
            currentInput = "";
        }
        isResultShown = false;
    }

    if (currentInput === "0" && !isNaN(char)) {
        currentInput = char;
    } else {
        // Xử lý riêng cho dấu nhân giao diện (× thành *) để dễ tính toán sau này
        currentInput += char;
    }
    updateDisplay();
}

// Hàm xoá toàn bộ màn hình (Phím C)
function clearDisplay() {
    currentInput = "0";
    previousInput = "";
    isResultShown = false;
    updateDisplay();
}

// Hàm tính toán kết quả (Phím =)
function calculateResult() {
    try {
        previousInput = currentInput + " =";
        
        // Thay thế các ký hiệu giao diện thành ký hiệu toán học chuẩn trong JS
        let expression = currentInput
            .replace(/×/g, '*')
            .replace(/÷/g, '/');

        // Xử lý cơ bản phần trăm nếu có
        // Lưu ý: eval dùng để tính biểu thức nhanh trong bài tập cơ bản
        let result = eval(expression);
        
        // Làm tròn tránh lỗi số thập phân dài trong JS
        currentInput = parseFloat(result.toFixed(10)).toString();
        isResultShown = true;
        updateDisplay();
    } catch (error) {
        currentInput = "Lỗi";
        updateDisplay();
        setTimeout(clearDisplay, 1500);
    }
}