export default function Tache({ id, titre, terminee, onBasculer, onSupprimer }) {
  const className = terminee ? "tache terminee" : "tache";

  return (
    <li className={className}>
      <input 
        type="checkbox" 
        checked={terminee} 
        onChange={() => onBasculer(id)} 
      />
      <span className="titre">{titre}</span>
      <button 
        className="danger" 
        onClick={() => onSupprimer(id)}
      >
        Supprimer
      </button>
    </li>
  );
}