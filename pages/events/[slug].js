import Layout from "../../components/Layout";
import { API_URL } from "../../config/index";
export default function EventPage(props) {
  const titleName = props.eventEdna.name.split(" ");
  return (
    <div>
      {/* line 7 is my trial and it works but u will see the difference */}
      {/* <Layout title={props.eventEdna.name.split(" ", 2)}> */}
      <Layout title={`${titleName[0]} ${titleName[1]}`}>
        <h1>{props.eventEdna.name}</h1>
      </Layout>
    </div>
  );
}
// make specific request
export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { eventEdna: events[0] },
  };
}