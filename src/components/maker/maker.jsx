import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../footer/footer";
import Header from "../header/header";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import styles from "./maker.module.css";
import { useState } from "react";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "sean",
      company: "no",
      title: "Fengineer",
      email: "deathsizes@hotmail.com",
      message: "go got it",
      fileName: "nothing",
      fileUrl: "sean.png",
      theme: "dark",
    },
    2: {
      id: "2",
      name: "sean",
      company: "no",
      title: "Fengineer",
      email: "deathsizes@hotmail.com",
      message: "go got it",
      fileName: "nothing",
      fileUrl: "sean.png",
      theme: "dark",
    },
    3: {
      id: "3",
      name: "sean",
      company: "no",
      title: "Fengineer",
      email: "deathsizes@hotmail.com",
      message: "go got it",
      fileName: "nothing",
      fileUrl: "sean.png",
      theme: "dark",
    },
  });

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });


  const createOrUpdateCard = card => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = card => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id]
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
