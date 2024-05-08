import Image from "next/image";
import classes from "./tile.module.css";

export default function Tile(props) {
  return (
    <div className={classes.tile}>
      <Image
        src={props.data.image}
        alt={props.title + " references"}
        width={150}
        height={150}
        // fill={true}
      ></Image>
      <div className={classes.text}>
        <h2 className={classes.title}>{props.data.title}</h2>
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
