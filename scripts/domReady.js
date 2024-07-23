define(function () {
  return function (callback) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      // Already ready or interactive, execute callback
      callback();
    } else {
      // Wait for the DOM to be ready
      document.addEventListener("DOMContentLoaded", callback);
    }
  };
});
