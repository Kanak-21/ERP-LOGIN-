// Waits for the page to load before running the function
document.addEventListener("DOMContentLoaded", () => {
    fetchRecords(); // Calls fetchRecords to get data from backend when the page loads
  });
  
  // Function to fetch data from backend
  function fetchRecords() {
    // Replace "YOUR_BACKEND_URL/api/records" with your actual API endpoint
    fetch("YOUR_BACKEND_URL/api/records")
      .then(response => response.json()) // Converts response to JSON
      .then(data => {
        const tableBody = document.getElementById("recordsTableBody");
        tableBody.innerHTML = ""; // Clears any existing content in table
  
        // Goes through each record in data and creates table rows
        data.forEach(record => {
          const row = document.createElement("tr"); // Creates a new row
          row.classList.add("border-b"); // Adds a CSS class for styling
  
          // Adds table cells with record data
          row.innerHTML = `
            <td class="p-2">${record.id}</td>
            <td class="p-2">${record.name}</td>
            <td class="p-2">${record.email}</td>
            <td class="p-2">${record.role}</td>
            <td class="p-2">
              <button class="text-blue-500 hover:text-blue-700" onclick="editRecord(${record.id})">Edit</button>
              <button class="text-red-500 hover:text-red-700 ml-2" onclick="deleteRecord(${record.id})">Delete</button>
            </td>
          `;
          tableBody.appendChild(row); // Adds row to the table body
        });
      })
      .catch(error => console.error("Error fetching records:", error));
  }