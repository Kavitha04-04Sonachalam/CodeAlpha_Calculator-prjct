function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const input = document.getElementById("display").value;
  try {
    const sanitizedInput = input.replace(/\b0+(\d+)/g, '$1');
    const result = eval(sanitizedInput);
    document.getElementById("display").value = result;
    addToHistory(input + " = " + result);
  } catch {
    alert("Invalid Expression");
  }
}

function addToHistory(entry) {
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li); // add to top
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
    appendValue(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearDisplay();
  }
});

// Theme toggle
document.getElementById("themeSwitch").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});
// Toggle History Show/Hide
document.getElementById("toggleHistory").addEventListener("click", function () {
  const historySection = document.getElementById("historySection");
  const toggleBtn = document.getElementById("toggleHistory");

  if (historySection.style.display === "none") {
    historySection.style.display = "block";
    toggleBtn.textContent = "Hide History";
  } else {
    historySection.style.display = "none";
    toggleBtn.textContent = "Show History";
  }
});

