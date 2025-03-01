// Get the company name from the URL and decode it properly
const params = new URLSearchParams(window.location.search);
let companyName = params.get('name') ? decodeURIComponent(params.get('name')).trim() : "";

console.log("Extracted Company Name from URL:", companyName); // Debugging Step 1

// Company details object with lowercase keys
const companyDetails = {
    "central depository services (india) ltd": "CDSL is the largest depository in India...",
    "affle (india) ltd": "Affle (India) Limited, together with its subsidiaries...",
    "infosys ltd": "Infosys Limited is an Indian multinational technology company...",
    "reliance industries ltd": "Reliance Industries Limited is an Indian multinational conglomerate...",
    "hdfc bank ltd": "HDFC Bank Limited is an Indian banking and financial services company..."
};

// Convert all object keys to lowercase for case-insensitive matching
const normalizedCompanyDetails = Object.fromEntries(
    Object.entries(companyDetails).map(([key, value]) => [key.toLowerCase().trim(), value])
);

console.log("Normalized Company Details Keys:", Object.keys(normalizedCompanyDetails)); // Debugging Step 2

// Convert user input to lowercase and trim spaces for accurate lookup
const normalizedCompanyName = companyName.toLowerCase().trim();

console.log("Normalized Company Name:", normalizedCompanyName); // Debugging Step 3

// Display company name and details
document.getElementById('company-name').innerText = companyName || "Company Name Not Found";
document.getElementById('company-details').innerText = normalizedCompanyDetails[normalizedCompanyName] || "Details not available.";

console.log("Matched Company Details:", normalizedCompanyDetails[normalizedCompanyName]); // Debugging Step 4
