import '/home/tfvishal/Learning/development/Frontend-Basics/Day34/src/components/Modal/modal.css'
export default function ModalBox({ closeModal }) {

  return (
    <div className="modal-overlay" onClick={closeModal}>

      {/* Stop click bubbling */}
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >

        <div className="modal-header">
          <span>🎉 You opened a modal!</span>

          <span
            className="close-btn"
            onClick={closeModal}
          >
            ✕
          </span>
        </div>

        <p className="modal-text">
          This is a modal component. It has a backdrop overlay that blurs the background. Click outside or the X button to close it.
        </p>

        <div className="modal-actions">
          <button onClick={closeModal}>Cancel</button>
          <button className="confirm" onClick={closeModal}>
            Confirm
          </button>
        </div>

      </div>

    </div>
  );
}