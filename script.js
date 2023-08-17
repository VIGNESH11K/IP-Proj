// Function to toggle table rows by status
function filterTableByStatus(status) {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      if (status === 'all' || row.classList.contains(status)) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    });
    showEmptyStateMessage();
  }
  
  // Function to sort table rows by column (date or name)
  function sortTableBy(columnIndex) {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    rows.sort((rowA, rowB) => {
      const valueA = rowA.children[columnIndex].textContent;
      const valueB = rowB.children[columnIndex].textContent;
      return valueA.localeCompare(valueB);
    });
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    rows.forEach(row => tbody.appendChild(row));
  }
  
  // Function to search projects by name
  function searchProjects() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const projectName = row.querySelector('td:first-child').textContent.toLowerCase();
      if (projectName.includes(filter)) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    });
    showEmptyStateMessage();
  }
  
  // Function to show empty state message
  function showEmptyStateMessage() {
    const emptyState = document.querySelector('.empty-state');
    const visibleRows = document.querySelectorAll('tbody tr[style="display: table-row;"]');
    if (visibleRows.length === 0) {
      emptyState.textContent = 'No projects found.';
    } else {
      emptyState.textContent = '';
    }
  }
  
  // Event listeners
  document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to filter dropdown
    const filterDropdown = document.getElementById('filter');
    filterDropdown.addEventListener('change', () => {
      const selectedStatus = filterDropdown.value;
      filterTableByStatus(selectedStatus);
    });
  
    // Attach event listener to sorting dropdown
    const sortDropdown = document.getElementById('sort');
    sortDropdown.addEventListener('change', () => {
      const selectedColumnIndex = sortDropdown.value === 'date' ? 2 : 0;
      sortTableBy(selectedColumnIndex);
    });
  
    // Attach event listener to search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', searchProjects);
    
    // Initially filter the table by "All" status
    filterTableByStatus('all');
  });
  


//   Approved budget

  document.addEventListener('DOMContentLoaded', () => {
    // ...other event listeners...
  
    // Attach event listener to approve and reject buttons
    const approveButtons = document.querySelectorAll('.approve-btn');
    const rejectButtons = document.querySelectorAll('.reject-btn');
  
    approveButtons.forEach(button => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.classList.remove('rejected');
        row.classList.add('approved');
        row.querySelector('td:nth-child(2)').textContent = 'Approved';
      });
    });
  
    rejectButtons.forEach(button => {
      button.addEventListener('click', () => {
        const row = button.closest('tr');
        row.classList.remove('approved');
        row.classList.add('rejected');
        row.querySelector('td:nth-child(2)').textContent = 'Rejected';
      });
    });
  });
  