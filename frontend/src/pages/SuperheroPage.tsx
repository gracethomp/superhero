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

const SuperheroPage: FC = () => {
  const [isOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const superhero = useAppSelector(
    (state) => state.superheroes.currentSuperhero
  );
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchSuperheroById(parseInt(id)));
    }
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <main>
        <div className="superhero-main">
          <img
            src="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
            alt=""
            className="superhero-image"
          />
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
                  <Tag>{power.superpower}</Tag>
                ))}
              </div>
            </div>
            <div className="buttons">
              <NavLink to={routes.editSuperhero}>
                <Button variant="primary" icon={icons.pencil}>
                  Edit
                </Button>
              </NavLink>
              <Button variant="caution" onClick={() => setIsModalOpen(true)}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Modal isOpen={isOpen} onClose={() => setIsModalOpen(false)}>
        <p>Are you sure you want to delete this superhero?</p>
        <Button
          variant="primary"
          onClick={() => {
            if (superhero?.id) {
              dispatch(deleteSuperhero(superhero?.id));
              navigate(routes.home);
            }
          }}
        >
          Yes
        </Button>
        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>No</Button>
      </Modal>
    </>
  );
};

export default SuperheroPage;
