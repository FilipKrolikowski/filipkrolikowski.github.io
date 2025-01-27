import { useSelector } from "react-redux";
import Modal from "react-modal";
import "../../styles/ModalGameDetails.css";
import { IoIosStar } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useWindowResize } from "../hooks";
import { useEffect } from "react";

export const ModalGameDetails = () => {
  const gameModal = useSelector((state) => state.gameModal);
  const windowSize = useWindowResize();
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch({
      type: "CLOSE_MODAL",
    });
  };

  useEffect(() => {
    if (windowSize.width < 767 && gameModal.isModalOpen) {
      handleCloseModal();
    }
  }, [windowSize.width]);

  return (
    <Modal
      isOpen={gameModal.isModalOpen}
      className="modal"
      overlayClassName="overlay"
      ariaHideApp={false}
      onRequestClose={handleCloseModal}
    >
      <div className="modal-close-container" onClick={handleCloseModal}>
        <IoClose className="modal-close" />
      </div>
      {gameModal?.game.short_screenshots?.length > 0 && (
        <div className="modal-screenshots-container">
          {gameModal?.game.short_screenshots?.slice(0, 4)?.map((s) => (
            <img className="modal-screenshot" key={s.id} src={s.image} />
          ))}
        </div>
      )}
      <div className="modal-rating">
        <IoIosStar />
        {gameModal.game.rating}
      </div>
      <div className="modal-info">
        <div>{gameModal.game.name}</div>
        {gameModal.game?.parent_platforms && (
          <div className="modal-platforms">
            {gameModal.game.parent_platforms.map(
              (p, index) => `${p.platform.name}${index + 1 !== gameModal.game.parent_platforms.length ? ", " : ""}`
            )}
          </div>
        )}
        {gameModal.game?.tags?.length > 0 && (
          <div className="modal-tags-container">
            {gameModal.game?.tags?.slice(0, 12)?.map((t) => (
              <div className="modal-tag" key={t.id}>
                {t.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};
