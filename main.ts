function calculateAge(): void {
    const birthdateInput = (document.getElementById('birthdate') as HTMLInputElement).value;
    if (birthdateInput) {
        const birthdate = new Date(birthdateInput);
        const today = new Date();

        let ageYears = today.getFullYear() - birthdate.getFullYear();
        let ageMonths = today.getMonth() - birthdate.getMonth();
        let ageDays = today.getDate() - birthdate.getDate();

        if (ageDays < 0) {
            ageMonths--;
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); // days in previous month
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths += 12;
        }

        (document.getElementById('result') as HTMLParagraphElement).innerText = 
            `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
    } else {
        (document.getElementById('result') as HTMLParagraphElement).innerText = 'Please enter a valid birthdate.';
    }
}
