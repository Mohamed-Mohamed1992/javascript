function findSchool() {
    let age = Number(document.getElementById("ageInput").value);
    let result = document.getElementById("result");

    if (age <= 0 || isNaN(age)) {
        // OR operator example
        result.textContent = "❌ Please enter a valid age greater than 0.";
    }

    else if (age >= 1 && age <= 3) {
        // AND operator example
        result.textContent = "🧸 Nursery School";
    }

    else if (age >= 4 && age <= 10) {
        result.textContent = "📘 Primary School";
    }

    else if (age >= 11 && age <= 16) {
        result.textContent = "🏫 Secondary School";
    }

    else if (age >= 17 && age <= 18) {
        result.textContent = "📚 College / Sixth Form";
    }

    else if (age >= 19 && age <= 25) {
        result.textContent = "🎓 University";
    }

    else if (age > 25 && age < 120) {
        result.textContent = "📖 Adult Education or Postgraduate Studies";
    }

    else {
        result.textContent = "🤔 Age out of typical education range.";
    }
}