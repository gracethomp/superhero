import { useEffect, useState } from "react";
import { FC } from "react";
import { icons } from "../icons/icons";
import Button from "../ui/common/button/Button";
import Header from "../ui/common/header/Header";
import Tag from "../ui/common/tag/Tag";
import "./Pages.css";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  deleteSuperhero,
  fetchSuperheroById,
} from "../store/services/superhero.services";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { routes } from "../utils/routes";
import { Modal } from "../ui/common/modal/Modal";
import { clearPage } from "../store/slices/superheroes.slice";

const SuperheroPage: FC = () => {
  const superhero = useAppSelector(
    (state) => state.superheroes.currentSuperhero
  );
  const [isOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentIndexImage, setCurrentIndexImage] = useState<number>(0);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchSuperheroById(parseInt(id)));
    }
  }, [dispatch, id]);

  const handleDelete = () => {
    if (superhero?.id) {
      dispatch(deleteSuperhero(superhero?.id));
      dispatch(clearPage());
      navigate(routes.home);
    }
  };

  return (
    <>
      <Header />
      <main>
        <div className="superhero-main">
          {superhero && (
            <>
              <div>
                <img
                  src={superhero?.images?.at(currentIndexImage)}
                  alt=""
                  className="superhero-image"
                />
                {superhero?.images && superhero?.images?.length > 1 && (
                  <div className="image-arrows">
                    <img
                      src={icons.leftArrow}
                      alt="left arrow"
                      className="arrow"
                      onClick={() =>
                        setCurrentIndexImage(
                          superhero?.images
                            ? (currentIndexImage + 1) %
                                superhero?.images?.length
                            : 0
                        )
                      }
                    />
                    <img
                      src={icons.rightArrow}
                      alt="left arrow"
                      className="arrow"
                      onClick={() =>
                        setCurrentIndexImage(
                          superhero?.images
                            ? (currentIndexImage - 1) %
                                superhero?.images?.length
                            : 0
                        )
                      }
                    />
                  </div>
                )}
              </div>
              <div className="superhero-text-data">
                <h1 className="superhero-nickname">
                  {superhero?.nickname.toUpperCase()}
                </h1>
                <p className="real-name">{superhero?.real_name}</p>
                <p className="origin-description">
                  {superhero?.origin_description}
                </p>
                <div>
                  <h2 className="superpowers">Superpowers</h2>
                  <div className="superpowers-tags">
                    {superhero?.superpowers?.map((power) => (
                      <Tag key={power.id}>{power.superpower}</Tag>
                    ))}
                  </div>
                </div>
                <div className="buttons">
                  <NavLink to={routes.editSuperhero}>
                    <Button variant="primary" icon={icons.pencil}>
                      Edit
                    </Button>
                  </NavLink>
                  <Button
                    variant="caution"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={() => setIsModalOpen(false)}>
        <p>Are you sure you want to delete this superhero?</p>
        <Button variant="primary" onClick={handleDelete}>
          Yes
        </Button>
        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
          No
        </Button>
      </Modal>
    </>
  );
};

export default SuperheroPage;
