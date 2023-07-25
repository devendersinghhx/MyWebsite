function updateViewerCount() {
    // Get the current viewer count from local storage (default to 0 if not set)
    let viewerCount = parseInt(localStorage.getItem("viewerCount")) || 0;
  
    // Increment the viewer count by 1 for each page load
    viewerCount++;
  
    // Update the viewer count in local storage
    localStorage.setItem("viewerCount", viewerCount);
  
    // Display the viewer count on the webpage
    document.getElementById("viewerCount").innerText = viewerCount;
  }
  
  // Call the updateViewerCount function when the page finishes loading
  window.onload = updateViewerCount;
  