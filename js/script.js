var options = {
    threshold: 0.9,
  };
  
// Run this function whenever intersections are detected
var callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Log if entry is intersecting
      if (entry.isIntersecting) {
        // Pass the element of the entry to then play the video
        playVideoFromElement(entry.target);
      } else {
        // Remove the "played" class
        entry.target.classList.remove("played");
      }
    });
  };
  
  // Make the observer
  var observer = new IntersectionObserver(callback, options);
  
  // Get all of the video wrappers
  var videoWrappers = document.querySelectorAll(".fancy-video");
  
  // Play the video wrapper's video
  function playVideo() {
    var video = this.querySelector("video");
    video.play();
  }
  
  // Play the video wrapper's video
  function playVideoFromElement(el) {
    var video = el.querySelector("video");
    video.play ();
  }
  
  function addPlayedClass() {
    this.parentElement.classList.add("played");
  }
  
  // do code that works for each video
  videoWrappers.forEach((videoWrapper) => {
    videoWrapper.addEventListener("click", playVideo);
    observer.observe(videoWrapper);
    var video = videoWrapper.querySelector("video");
    video.addEventListener("ended", addPlayedClass);
  });

var modal = document.getElementById("popout");
var btn = document.getElementById("open");
var span = document.getElementById("close");

btn.addEventListener(
  "click",
  function(event) {
    modal.style.display = "block";
  },
  false
);

btn.onclick = function() {
    modal.style.display = "block";
  };
  
  span.onclick = function() {
    modal.style.display = "none";
  };
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  