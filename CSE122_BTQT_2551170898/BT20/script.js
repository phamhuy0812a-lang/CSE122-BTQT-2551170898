const imgElement = document.getElementById("effect-img");

// Danh sách các class hiệu ứng tương ứng
const effectClasses = [
    "img-gray", "img-xray", "img-invert", "img-fliph", "img-flipv",
    "img-glow", "img-shadow", "img-bold-shadow", "img-dropshadow",
    "img-blur", "img-wave", "img-mask", "img-alpha"
];

function applyEffect(effectName, buttonElement) {
    // 1. Xoá toàn bộ class hiệu ứng cũ trên ảnh và reset transform
    imgElement.className = "";
    imgElement.style.transform = "";

    // 2. Thêm hiệu ứng mới dựa vào tên nút bấm
    switch (effectName) {
        case 'gray':
            imgElement.classList.add("img-gray");
            break;
        case 'xray':
            imgElement.classList.add("img-xray");
            break;
        case 'invert':
            imgElement.classList.add("img-invert");
            break;
        case 'fliph':
            imgElement.classList.add("img-fliph");
            break;
        case 'flipv':
            imgElement.classList.add("img-flipv");
            break;
        case 'glow':
            imgElement.classList.add("img-glow");
            break;
        case 'shadow':
            imgElement.classList.add("img-shadow");
            break;
        case 'bold-shadow':
            imgElement.classList.add("img-bold-shadow");
            break;
        case 'dropshadow':
            imgElement.classList.add("img-dropshadow");
            break;
        case 'blur':
            imgElement.classList.add("img-blur");
            break;
        case 'wave':
            imgElement.classList.add("img-wave");
            break;
        case 'mask':
            imgElement.classList.add("img-mask");
            break;
        case 'alpha':
            imgElement.classList.add("img-alpha");
            break;
        default:
            imgElement.classList.add("img-gray");
    }

    // 3. Cập nhật trạng thái active (tô nổi bật) cho nút được chọn[cite: 10]
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    buttonElement.classList.add("active");
}

// Thiết lập hiệu ứng mặc định ban đầu là Gray khi tải trang
window.onload = function() {
    imgElement.classList.add("img-gray");
};