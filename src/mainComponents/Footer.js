const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
}

export default function Footer() {
  return (
    <section id="footer">
      <footer className="footer">
        <section className="col-1"></section>
        <section className="col-2"></section>
        <section className="col-3"></section>
      </footer>
    </section>
  );
}
