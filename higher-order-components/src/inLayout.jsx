export const inLayout = (Component) => (props) =>
  (
    <div style={{border: '2px solid blue', padding: '10px'}}>
      <header style={{borderBottom: '2px solid blue', marginBottom: '10px'}}>
        <h1>My Application</h1>
      </header>
      <main>
        <Component {...props} />
      </main>
      <footer style={{borderTop: '2px solid blue', marginTop: '10px'}}>
        <p>© 2024 My Application</p>
      </footer>
    </div>
  );
