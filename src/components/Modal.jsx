export default function Modal({ title, description, onClose }) {
  return (
    <dialog
      className="modal"
      style={{
        display: "block",
        backgroundColor: "transparent",
        border: "none",
        minWidth: "300px",
      }}
    >
      <div className="modal-dialog" role="document">
        <section className="modal-content">
          <header className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </header>
          {description && (
            <main className="modal-body">
              <p>{description}</p>
            </main>
          )}
          <footer className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={onClose}>
              Ok
            </button>
          </footer>
        </section>
      </div>
    </dialog>
  );
}

// redux trivia
