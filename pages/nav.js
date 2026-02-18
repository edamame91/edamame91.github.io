function initNav(activePage) {
  const nav = document.querySelector(".navbar");
  nav.innerHTML = `
    <div class="nav-container">
      <a href="bash.html" class="nav-brand">
        <span class="terminal-icon">▶</span>
        <span>Dev Cheatsheets</span>
      </a>
      <ul class="nav-links">
        <li>
          <a href="bash.html" class="bash-link ${activePage === "bash" ? "active" : ""}">Bash</a>
        </li>
        <li>
          <a href="git.html" class="git-link ${activePage === "git" ? "active" : ""}">Git</a>
        </li>
      </ul>
    </div>
  `;
}
