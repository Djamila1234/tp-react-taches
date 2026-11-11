export default function Tache({ titre, terminee }) {
  // Gestion de la classe CSS et de l'icône via des opérateurs ternaires
  const className = terminee ? "tache terminee" : "tache";
  const icone = terminee ? "✅" : "⏹️";

  return (
    <li className={className}>
      <span className="titre">
        {icone} {titre}
      </span>
    </li>
  );
}