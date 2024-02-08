import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { getSession } from "next-auth/client";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";
// import Posts from "../components/Feed";

interface HomeProps {
  session: any;
  posts: any[];
}

export default function Home({ session, posts }: HomeProps) {
  if (!session) return <Login />;
  return (
    <div className="h-screen bg-gray-100 dark:bg-[#18191A] overflow-hidden">
      <Head>
        <title>Facebook (Clone)</title>
      </Head>

      <Header />

      <main className="flex justify-center xl:-ml-32">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
// @TODO fix any if possible!
