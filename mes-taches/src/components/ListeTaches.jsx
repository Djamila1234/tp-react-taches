import Tache from './Tache';

export default function ListeTaches({ taches }) {
  if (!taches || taches.length === 0) {
    return <p className="vide">Aucune tâche à afficher.</p>;
  }

  return (
    <ul className="liste-taches">
      {taches.map((tache) => (
        <Tache 
          key={tache.id} 
          titre={tache.titre} 
          terminee={tache.terminee} 
        />
      ))}
    </ul>
  );
}