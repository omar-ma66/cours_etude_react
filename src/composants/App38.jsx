import { useState } from 'react';

function Panel({ title, children }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={() => setIsActive(true)}>
          Afficher
        </button>
      )}
    </section>
  );
}

export default function Accordion() {
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="À propos">
        Avec une population d'environ 2 millions d'habitants, Almaty est la plus grande ville du Kazakhstan. Elle en était la capitale 1929 à 1997.
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel title="Étymologie">
        Le nom vient de <span lang="kk-KZ">алма</span>, le mot kazakh pour « pomme » ; il est souvent traduit par « pleine de pommes ». En fait, la région entourant Almaty est considérée comme le berceau ancestral de la pomme, et la <i lang="la">Malus sieversii</i> sauvage est considérée comme une probable candidate pour être l'ancêtre de la pomme domestique moderne.
      </Panel>
    </>
  );
}
