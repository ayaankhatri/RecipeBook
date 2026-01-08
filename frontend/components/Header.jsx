export default function Header({ darkMode, toggleDarkMode, filter, setFilter }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Recipe Book</h1>

        <div className="filter-nav">
          <button
            className="filter-btn"
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className="filter-btn"
            onClick={() => setFilter("veg")}
          >
            Veg
          </button>

          <button
            className="filter-btn"
            onClick={() => setFilter("non-veg")}
          >
            Non-Veg
          </button>
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn" onClick={toggleDarkMode}>
          {darkMode ? "☀" : "☾"}
        </button>

        <button className="auth-btn">Login</button>
        <button className="auth-btn">Sign Up</button>
      </div>
    </header>
  );
}