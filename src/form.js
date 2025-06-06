document.getElementById('dio').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted");

    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('number').value; // Using 'mmr' as ID for phone number
    const budgetElement = document.querySelector('input[name="budget"]:checked');
    const budget = budgetElement ? budgetElement.value : "";
    const comments = document.getElementById('comments').value;
    const agree = document.getElementById('agree').checked; // this is a checkbox
    const brand = document.getElementById('brand').value;

    if (!fullname) {
        alert("You need to enter your name.");
        return;
    }

    if (!phone || phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    if (!budget) {
        alert("Please select your budget preference.");
        return;
    }

    if (!brand || brand === "") {
        alert("Please select your favorite brand.");
        return;
    }

    const formData = {
        fullname: fullname,
        email: email,
        phone: phone,
        brand: brand,
        budget: budget,
        comments: comments,
        agree: agree
    };

    console.log(formData);

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("dio").reset();
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }
    };

    xhr.send(JSON.stringify(formData));
    alert(`Success: ${fullname}`);
});
