import React from "react";
import Hookah from "../../components/Hookah/models/Hookah";
import StandardCup from "../../components/Hookah/models/Cup/Standart";
import FunnelCup from "../../components/Hookah/models/Cup/Funnel";

const HookahComponent = () => {
  const alphaHookah = new Hookah("Альфа хука", "sm", "green");
  alphaHookah.addComplect(new StandardCup("Par", "lg", "brown", 500));
  alphaHookah.addComplect(new FunnelCup("Par", "lg", "brown", 500, "lg"));

  return (
    <div>
      <button onClick={alphaHookah.blow}>Дуть кальян Альфа</button>
      <button onClick={() => console.log(alphaHookah.getPrice())}>
        Посчитать цену
      </button>
    </div>
  );
};

export default HookahComponent;
