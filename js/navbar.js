$(document).ready(function() {
    document.getElementById('insertNavBar').innerHTML = `
    <div id="mlag-logo">
      <a href="index.html"><img src="img/logo.png" alt="Michigan Leagues of Academic Games Logo" ></a>
    </div>
    <nav class="navbar navbar-expand-xl navbar-dark">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mlag-navbar" aria-controls="mlag-navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mlag-navbar">
          <ul class="navbar-nav justify-content-between w-100">
            <li class="nav-item">
              <a class="nav-link" href="saturday_tournament_results.html">Saturday Tournament Results</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tournament_results.html">Super Tournament Results</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="games.html">Games</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="tournament_rules.html">Rules</a>
            </li>
            <li>
              <a class="nav-link" href="meeting_notes.html">Opening Meeting Notes</a>
            </li>
<!--            <li class="nav-item">
              <a class="nav-link" href="tournament_documents.html">Super Tournament Documents</a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link" href="mlag-committee.html">MLAG Steering Committee</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" target="_blank" href="https://www.agloa.org/">AGLOA</a>
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
