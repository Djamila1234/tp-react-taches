const ANNEE = new Date().getFullYear();

export default function Pied({ auteur }) {
  return (
    <footer className="pied">
      TP React – réalisé par {auteur} – {ANNEE}
    </footer>
  );
}