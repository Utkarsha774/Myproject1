document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");
  
    // Clear previous message
    message.textContent = "";
    message.style.color = "red";
  
    if (name === "" || email === "" || password === "") {
      message.textContent = "All fields are required.";
      return;
    }
  
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      message.textContent = "Invalid email format.";
      return;
    }
  
    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters.";
      return;
    }
  
    message.style.color = "green";
    message.textContent = "Registration successful!";
  });
  