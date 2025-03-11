document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Ngăn chặn load lại trang

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Kiểm tra hợp lệ
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email.");
            return;
        }

        if (message.length < 10) {
            alert("Message must be at least 10 characters.");
            return;
        }

        // Mô phỏng gửi mail thành công
        alert("Message has been sent!");
        document.getElementById("contactForm").reset();
    });
});

// Hàm kiểm tra email hợp lệ
function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
