function calculateAge() {
    let dob = document.getElementById("dob").value;
    let birthDate = new Date(dob);
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    document.forms[0].onsubmit = (e)=> e.preventDefault()
    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "عمرك هو " + age + " سنة.";
}
