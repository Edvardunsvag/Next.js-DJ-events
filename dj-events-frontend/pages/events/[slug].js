import React from "react";
import Layout from "@/components/Layout";
import { API_URL } from "config";
import styles from "@/styles/Event.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

function EventPage({ evt }) {
  const deleteEvent = () => {
    console.log("delete");
  };

  return (
    <Layout title="My Event">
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/event/edit/${evt.id}`}>
            <a>
              {" "}
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes></FaTimes> Delete Event
          </a>
        </div>
        <span>
          {evt.data} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={900} height={600}></Image>
          </div>
        )}

        <h3>Performers</h3>
        <p>{evt.performers}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>

        <Link href="/events">
          <a className={styles.back}>Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  console.log(API_URL);

  const slug = context.params.slug;

  const res = await fetch(`${API_URL}/api/events/${slug}`);

  const events = await res.json();

  return {
    props: { evt: events[0], revalitade: 1 },
  };
}

export default EventPage;
