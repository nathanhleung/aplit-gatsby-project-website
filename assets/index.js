// Global state container
const state = {
  startTime: new Date().getTime(),
  minWaitingTime: 0, // 15000,
  overlayProgress: 0,
  overlayProgressInterval: null
};

// Start running the overlay progress
state.overlayProgressInterval = runOverlayProgress();

// Run init() function on load event
// (i.e. elements and images have loaded)
window.onload = init;

// Initializes overlay progress and orchestrates timing
// for library initialization and clearing the
// overlay after page has loaded
function init() {
  const { startTime, minWaitingTime } = state;

  // Wait at least 2.5 seconds before clearing the overlay
  const loadTime = new Date().getTime() - startTime;
  let waitTime;
  if (loadTime < minWaitingTime) {
    waitTime = minWaitingTime - loadTime;
  } else {
    waitTime = 0;
  }

  setTimeout(() => {
    state.overlayProgress = 100;
  }, waitTime);
  // Wait at least 500ms before clearing the interval to ensure last
  // call is executed (0.4s interval time on progress bar)
  setTimeout(() => {
    // Clear the interval to prevent memory leaks
    clearInterval(state.overlayProgressInterval);
  }, waitTime + 500);
  setTimeout(() => {
    // Update overlay content
    document.getElementById("overlay-content").innerHTML = `
      <button type="button" id="overlay-button">
        Enter Site
      </button>
    `;
    const button = document.getElementById("overlay-button");
    button.onclick = clearOverlay;
    button.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
  }, waitTime + 1000);
}

// Progresses the overlay progress bar by grabbing the progress from
// the global state container and automatically moving along the bar.
// Returns an interval, which can be cleared later.
function runOverlayProgress() {
  const overlayProgressEl = document.getElementById("overlay-progress");

  // Approximately every 0.5s, cut the remaining
  // progress by approx. 10%
  const interval = setInterval(() => {
    const { overlayProgress } = state;
    let nextOverlayProgress;
    // If progress is greater than 100, cap it at 100
    if (overlayProgress >= 100) {
      nextOverlayProgress = 100;
    } else {
      // Cut ~10% off remaining
      const scale = (1 + Math.random()) / 10;
      nextOverlayProgress = overlayProgress + scale * (100 - overlayProgress);
    }
    overlayProgressEl.style.right = `${100 - overlayProgress}%`;
    state.overlayProgress = nextOverlayProgress;
  }, 500 + Math.random() * 50);

  return interval;
}

function initLibraries() {
  // Initialize libraries
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000
  });
  const wow = new WOW().init();
}

function clearOverlay() {
  initLibraries();
  // Give libraries 100ms to load, then begin clearing overlay
  setTimeout(() => {
    // Remove overlay helper classes
    // This make the scrollbar visible
    document.body.classList.remove("overlay-visible");

    // Can't fix borders until the scrollbar is visible
    // because the width changes, and consequently, the
    // height
    fixWaveBorders();

    const overlay = document.getElementById("overlay");
    overlay.classList.add("overlay-invisible");
    // Wait for 0.5s animation to run before
    // changing z-index so the opacity change
    // is visible
    setTimeout(() => {
      overlay.classList.add("overlay-hidden");
    }, 500);
  }, 100);
}

function fixWaveBorders() {
  const borders = document.querySelectorAll(".wave-border");
  const height = borders[0].clientHeight;
  // Multiply 0.9 to give a little buffer (white line type bug)
  [].forEach.call(borders, border => {
    border.style.top = `-${height * 0.9}px`;
  });

  const bottomBorders = document.querySelectorAll(".wave-border-bottom");
  const bottomHeight = bottomBorders[0].clientHeight;
  [].forEach.call(bottomBorders, bottomBorder => {
    bottomBorder.style.top = `${height * 0.9}px`;
  });
}
