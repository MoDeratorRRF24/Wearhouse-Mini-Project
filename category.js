function loadProductCategories() {
    const categoriesContent = `
      <h2>Product Categories</h2>
      <button onclick="openAddCategoryPopup()">Add Category</button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Categories will be dynamically populated here using JavaScript -->
        </tbody>
      </table>
    `;
    document.querySelector('.content').innerHTML = categoriesContent;
  
    const categories = ['Clothing', 'Footwear', 'Accessories'];
    const categoriesTableBody = document.querySelector('tbody');
    categories.forEach(category => {
      categoriesTableBody.innerHTML += `
        <tr>
          <td>${category}</td>
          <td>
            <button onclick="openEditCategoryPopup('${category}')">Edit</button>
            <button onclick="confirmDeleteCategory('${category}')">Delete</button>
          </td>
        </tr>
      `;
    });
  }
  
  function openAddCategoryPopup() {
    const newCategory = prompt('Enter the new category:');
    if (newCategory) {
      alert(`Category "${newCategory}" added successfully!`);
      loadProductCategories();
    }
  }
function openEditCategoryPopup(oldCategory) {
    const newCategory = prompt(`Edit category "${oldCategory}" to:`);
    if (newCategory) {
      alert(`Category "${oldCategory}" edited to "${newCategory}" successfully!`);
      loadProductCategories();
    }
  }

  function confirmDeleteCategory(category) {
    const userConfirmation = confirm(`Are you sure you want to delete the category "${category}"?`);
    if (userConfirmation) {
      alert(`Category "${category}" deleted successfully!`);
      loadProductCategories();
    }
  }
  document.addEventListener('DOMContentLoaded', loadProductCategories);
  
  