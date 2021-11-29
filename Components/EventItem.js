import Link from "next/link";
import Image from "next/image";
import styles from "../styles/EventItem.module.css";

export default function EventItem(props) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        {/* <h1>{props.eventData.performance}</h1> */}
        <Image
          src={
            props.eventData.image
              ? props.eventData.image
              : "/images/sample/event1.jpg"
          }
          width={170}
          height={100}
        />
      </div>

      <div className={styles.info}>
        {/* <span>{props.eventData.date + " at " + props.eventData.time}</span> */}
        <span>
          {props.eventData.date} at {props.eventData.time}
        </span>
        <h3>{props.eventData.name}</h3>
      </div>

      <div className={styles.link}>
        <Link href={`/events/${props.eventData.slug}`}>
          <a>Details</a>
          {/* line 33 is used if you want it to open a new tab  */}
          {/* <a target="_blank">Details</a> */}
        </Link>
      </div>
    </div>
  );
}