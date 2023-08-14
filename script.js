// Function to open the sidebar
function openSidebar() {
  document.getElementById("sidebar").style.left = "0";
}

// Function to close the sidebar after 5 seconds
function closeSidebarAfterDelay() {
  closeSidebarAfterDelay.timeoutId = setTimeout(function() {
    closeSidebar();
  }, 5000);
}

// Function to clear the timeout and prevent auto-close
function preventCloseSidebar() {
  clearTimeout(closeSidebarAfterDelay.timeoutId);
}

// Function to close the sidebar
function closeSidebar() {
  document.getElementById("sidebar").style.left = "-200px";
}

// Add an event listener to close the sidebar when the cursor points at it
document.getElementById("sidebar").addEventListener("mouseenter", preventCloseSidebar);

// Add an event listener to restart the auto-close behavior when the cursor leaves the sidebar
document.getElementById("sidebar").addEventListener("mouseleave", closeSidebarAfterDelay);

// Open sidebar on page load
window.onload = function() {
  openSidebar();
  closeSidebarAfterDelay();
};

var popupTimeout;

// Function to show the pop-up
function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";

  // Start the auto-close timer only if the cursor is not over the pop-up content
  var popupContent = document.querySelector(".popup-content");
  popupContent.addEventListener("mouseenter", function () {
    clearTimeout(popupTimeout);
  });

  // Resume the auto-close timer when the cursor leaves the pop-up content
  popupContent.addEventListener("mouseleave", function () {
    popupTimeout = setTimeout(function () {
      hidePopup();
    }, 5000);
  });

  // Start the initial auto-close timer
  popupTimeout = setTimeout(function () {
    hidePopup();
  }, 5000);
}

// Function to hide the pop-up
function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
