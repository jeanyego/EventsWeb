import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <div>
      <Layout title="About Page">
        <h1>About Page</h1>
        <p>This is a page about events</p>
        <Link href="/">Home Page</Link>
      </Layout>
      {/* <h1>About Page</h1>
            <p>This is a page about events</p>
            <Link href="/">Home Page</Link> */}
    </div>
  );
}
