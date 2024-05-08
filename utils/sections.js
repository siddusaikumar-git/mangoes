import Section from "./section";
import classes from "./sections.module.css";

import mangoes from "../data/mangoes.json";

export default function Sections() {
  return (
    <div className={classes.sections}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc_bV09X-MqSt3GsKT0XRdNsIBozckKPJSPWmqm52AXPx28Jg/viewform?embedded=true"
        // width="640"
        // height="100%"
        // frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      {/* <Section section={mangoes.section} tiles={mangoes.tiles} /> */}
    </div>
  );
}
