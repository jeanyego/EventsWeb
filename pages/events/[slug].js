import Layout from "../../components/Layout";
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { API_URL } from "../../config/index";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Event.module.css";
export default function EventPage(props) {
  const titleName = props.event.name.split(" ");
  const deleteEvent = () => {
    console.log("delete event");
  }
  return (
    <div>
      {/* line 7 is my trial and it works but u will see the difference */}
      {/* <Layout title={props.eventEdna.name.split(" ", 2)}> */}
      <Layout title={`${titleName[0]} ${titleName[1]}`}>
        {/* <h1>{props.eventEdna.name}</h1> */}
        <div className={styles.event}>
          <div className ={styles.controls}>
            <Link href ={`events/edit/${props.event.id}`}>
              <a className ={styles.edit}>
                <FaPencilAlt/> Edit Event
              </a>
            </Link>
            <a href="#" onClick={deleteEvent} className={styles.delete}>
              <FaTimes/> Delete Event
            </a>
          </div>
          <span>
            {props.event.date} at {props.event.time}
          </span>
          <h1>{props.event.name}</h1>
          {props.event.image &&(
            <div className ={styles.image}>
              <Image src ={props.event.image} width={960} height={600} />
            </div>
          )
          }
          <h3>Performers</h3>
          <p>{props.event.performance}</p>
          <h3>Description</h3>
          <p>{props.event.description}</p>
          <h3>Venue: {props.event.venue}</h3>
          <p>{props.event.address}</p>
          <Link href ="/">
            <a className ={styles.back}>Go Back</a>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
// make specific request
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { event: events[0] },
  };
}