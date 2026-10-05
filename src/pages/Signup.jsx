function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">

        <h1>Signup</h1>

        <form>
          <label>Name</label>

          <input
            type="text"
            placeholder="Enter your name"
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Create a password"
          />

          <button type="submit">
            SIGN UP
          </button>
        </form>

      </div>
    </div>
  );
}

export default Signup;