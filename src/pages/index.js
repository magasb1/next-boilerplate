import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const Home = ({ pageProps }) => {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      // The user is not authenticated, handle it here.
      router.push("/api/auth/signin");
    },
  });

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Layout>
        <div className="">
          {status === "authenticated" && (
            <pre>
              <code>{JSON.stringify(session, null, 2)}</code>
              <div />
            </pre>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
