function calculateAge() {
    var birthdateInput = document.getElementById('birthdate').value;
    if (birthdateInput) {
        var birthdate = new Date(birthdateInput);
        var today = new Date();
        var ageYears = today.getFullYear() - birthdate.getFullYear();
        var ageMonths = today.getMonth() - birthdate.getMonth();
        var ageDays = today.getDate() - birthdate.getDate();
        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in previous month
        }
        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }
        document.getElementById('result').innerText =
            "You are ".concat(ageYears, " years, ").concat(ageMonths, " months, and ").concat(ageDays, " days old.");
    }
    else {
        document.getElementById('result').innerText = 'Please enter a valid birthdate.';
    }
}
