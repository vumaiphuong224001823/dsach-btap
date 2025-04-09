function checkEvenOdd() {
    const number = parseInt(document.getElementById("numberInput").value);
    const result = document.getElementById("result");

    if (isNaN(number)) {
        result.textContent = "Vui lòng nhập một số hợp lệ.";
    } else if (number % 2 === 0) {
        result.textContent = number + " là số chẵn.";
    } else {
        result.textContent = number + " là số lẻ.";
    }
}
