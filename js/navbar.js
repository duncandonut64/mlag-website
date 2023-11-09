$(document).ready(function() {
    document.getElementById('insertNavBar').innerHTML = `
    <div id="mlag-logo">
      <a href="index.html"><img src="img/logo.png" alt="Michigan Leagues of Academic Games Logo" ></a>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mlag-navbar" aria-controls="mlag-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mlag-navbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="tournaments.html">2023-2024 Tournaments</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tournament_results.html">Super Tournament Results</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="games.html">Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="documents.html">Documents</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="mlag-committee.html">MLAG Steering Committee</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
        `;
});
