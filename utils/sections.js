import Section from "./section";
import classes from "./sections.module.css";

import mangoes from "../data/mangoes.json";

export default function Sections() {
  return (
    <div className={classes.sections}>
      <Section section={mangoes.section} tiles={mangoes.tiles} />
    </div>
  );
}
