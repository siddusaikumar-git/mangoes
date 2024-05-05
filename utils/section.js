import classes from "./section.module.css";
import Tile from "./tile";
import Link from "next/link";
export default function Section({ tiles, section }) {
  return (
    <>
      <div className={classes.background_tile}>
        {/* <h1 className={classes.title}>{section}</h1> */}
        <div className={classes.programming_tiles}>
          {tiles.map((language) => (
            <Link
              key={language.pathName}
              href={language.pathName}
              className={classes.link}
            >
              <Tile data={language} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
