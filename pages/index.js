import { API_URL } from "../config/index";
import Layout from "../components/Layout";
import EventItem from "../Components/EventItem";

export default function Homepage(props) {
  console.log(props.events);
  return (
    <div>
      <Layout>
        <h1>Music Events</h1>
        {props.events.map((event) => {
          // return <h3 key={event.id}>{event.name}</h3>;
          return <EventItem key={event.id} eventData={event} />;
        })}
        {/* the line 14 is only for getting the first one on the list */}
        {/* {props.events[0].venue} */}
      </Layout>
      {/* <h1>Lakehub</h1>
      <Link href="/About">About Page</Link> */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return {
    props: { events },
  };
}