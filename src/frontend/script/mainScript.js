fetch("https://api.github.com/users/Shivin1016")
  .then((response) => response.json())
  .then((user) => {
    document.querySelector(".contributors").innerHTML = `
      <div class="contributor-card">
        <img src="${user.avatar_url}" alt="${user.name}">
        <h3>${user.name || "Shivani Prajapati"}</h3>
        <p>${user.bio || "Frontend Developer • Open Source Contributor"}</p>
        
      </div>
      <div  class="contributor-card">
       <ul>
          <li>💻 Public Repos: ${user.public_repos}</li>
          <li>👥 Followers: ${user.followers}</li>
          <li>⭐ Following: ${user.following}</li>
        </ul>
         <button>
         <a href="${user.html_url}" class="github-btn" target="_blank">
          View GitHub Profile
        </a>
        </button>
      </div>
    `;
  })
  .catch((error) => console.error("Error fetching GitHub data:", error));

//   loacal commits history
const username = "Shivin1016";

let currentPage = 1;
let maxPages = 10;  // you can adjust based on needs (GitHub supports ~10–20 pages)
let perPage = 10;   // GitHub default is 30 — you can set 100 too

/* ======================================================
   LOAD EVENTS FOR A SPECIFIC PAGE
====================================================== */
 const YOUR_PERSONAL_ACCESS_TOKEN= "";
async function loadEvents(page = 1) {
  const url = `https://api.github.com/users/${username}/events?page=${page}&per_page=${perPage}`;

  const res = await fetch(url);
  const events = await res.json();

  // If empty → no more pages
  if (events.length === 0) return;

  // Build timeline for selected page only
  buildTimeline(events);

  // Build contribution graph based on all events from this page
//   buildContributionGraph(events);

  // Render pagination UI
  buildPagination(page);
}
 

/* ======================================================
      TIMELINE (SHOWS ONLY SELECTED PAGE)
====================================================== */
function buildTimeline(events) {
  const timeline = document.getElementById("timeline");
  timeline.innerHTML = ""; // replace old list with new page

  events.forEach(event => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    let title = "";
    let details = "";

    switch (event.type) {
      case "PushEvent":
        title = "Pushed commits";
        details = event.payload.commits
          ? event.payload.commits.map(c => `• ${c.message}`).join("<br>")
          : "No commit messages";
        break;

      case "PullRequestEvent":
        title = "Pull Request";
        details = event.payload.pull_request
          ? event.payload.pull_request.title
          : "Opened a PR";
        break;

      case "IssueCommentEvent":
        title = "Commented on Issue";
        details = event.payload.issue
          ? event.payload.issue.title
          : "Issue comment";
        break;

      case "IssuesEvent":
        title = "Issue Updated";
        details = event.payload.issue
          ? event.payload.issue.title
          : "Issue updated";
        break;

      case "ForkEvent":
        title = "Forked Repository";
        details = event.repo.name;
        break;

      case "CreateEvent":
        title = "Created Repository / Branch";
        details = event.repo.name;
        break;

      default:
        title = event.type;
        details = event.repo.name;
    }

    item.innerHTML = `
      <div class="event-type">👨‍💻 ${title}</div>
      <div class="small">
       <span>Repo Name: </span>
      ${event.repo.name}</div>
      <div class="small">
      <span>Repo Details: </span>
      ${details}</div>
      <div class="small">
      <span>Repo Time line: </span>
      ${new Date(event.created_at).toLocaleString()}</div>
    `;

    timeline.appendChild(item);
  });
}

/* ======================================================
      PAGINATION UI
====================================================== */

function buildPagination(activePage) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  // Previous Button
  if (activePage > 1) {
    const prev = document.createElement("button");
    prev.className = "page-btn";
    prev.textContent = "Prev";
    prev.onclick = () => loadEvents(activePage - 1);
    pagination.appendChild(prev);
  }

  // Page Number Buttons
  for (let i = 1; i <= maxPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-btn";

    if (i === activePage) btn.classList.add("active");

    btn.textContent = i;
    btn.onclick = () => loadEvents(i);

    pagination.appendChild(btn);
  }

  // Next Button
  const next = document.createElement("button");
  next.className = "page-btn";
  next.textContent = "Next";
  next.onclick = () => loadEvents(activePage + 1);
  pagination.appendChild(next);
}

/* ======================================================
      INITIAL LOAD
====================================================== */
loadEvents(1);

