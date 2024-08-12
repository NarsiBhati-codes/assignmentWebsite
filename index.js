function openTab(event, tabId) {
  // Get all tab content elements
  const contents = document.querySelectorAll(".tab-content");
  // Hide all tab contents
  contents.forEach((content) => content.classList.remove("active"));

  // Get all tab buttons
  const buttons = document.querySelectorAll(".tab-button");
  // Remove active class from all buttons
  buttons.forEach((button) => button.classList.remove("active"));

  // Show the selected tab content
  document.getElementById(tabId).classList.add("active");
  // Add active class to the clicked button
  event.currentTarget.classList.add("active");
}
