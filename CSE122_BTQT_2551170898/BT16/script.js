// Khởi tạo các phần tử DOM
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const pendingCount = document.getElementById("pending-count");

// Dữ liệu ban đầu (giống trong hình minh họa)
let todos = [
    { id: 1, text: "Đọc chương HTML5 cơ bản", completed: true },
    { id: 2, text: "Làm bài tập CSS Grid", completed: false },
    { id: 3, text: "Quay video OBS nộp bài", completed: false }
];

// Hàm cập nhật và vẽ lại toàn bộ danh sách
function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.completed ? "completed" : ""}`;

        li.innerHTML = `
            <div class="todo-left" onclick="toggleTodo(${todo.id})">
                <div class="checkbox"></div>
                <span class="todo-text">${escapeHtml(todo.text)}</span>
            </div>
            <button class="btn-delete" onclick="deleteTodo(${todo.id})">Xoá</button>
        `;

        todoList.appendChild(li);
    });

    updatePendingCount();
}

// Hàm cập nhật số lượng công việc chưa hoàn thành
function updatePendingCount() {
    const uncompletedCount = todos.filter((todo) => !todo.completed).length;
    pendingCount.innerText = `Còn ${uncompletedCount} việc chưa hoàn thành`;
}

// Hàm thêm công việc mới
function addTodo() {
    const text = todoInput.value.trim();
    if (text === "") return;

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(newTodo);
    todoInput.value = "";
    renderTodos();
}

// Hàm chuyển đổi trạng thái (hoàn thành / chưa hoàn thành)
function toggleTodo(id) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
}

// Hàm xoá công việc khỏi danh sách
function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
    renderTodos();
}

// Bảo vệ tránh lỗi XSS khi hiển thị chuỗi nhập vào
function escapeHtml(text) {
    const div = document.createElement("div");
    div.innerText = text;
    return div.innerHTML;
}

// Sự kiện bấm nút "Thêm"
addBtn.addEventListener("click", addTodo);

// Sự kiện nhấn phím Enter trong ô nhập
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Chạy khởi tạo danh sách ban đầu
renderTodos();