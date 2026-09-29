import { PlusIcon } from './icons.jsx';

export default function Fab({ onClick }) {
  return (
    <div className="fab-layer">
      <button className="fab" onClick={onClick} aria-label="Aggiungi buono">
        <PlusIcon />
      </button>
    </div>
  );
}
