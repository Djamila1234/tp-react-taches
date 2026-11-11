const ANNEE = new Date().getFullYear();

export default function Pied() {
  return (
    <footer className="pied">
      TP React – {ANNEE}
    </footer>
  );
}