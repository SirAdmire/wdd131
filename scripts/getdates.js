// Insert the current year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Insert the last modified date
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;
