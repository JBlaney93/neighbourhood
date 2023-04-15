import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/Nav';
import { supabase } from './../../lib/supabaseClient';
import Welcome from '@/components/Welcome';
import About from '@/components/About';

function Home({ comments }) {
  // console.log({comments})
  return (
      <>
        <Head>
        <title>Neighbourhood</title>
        <meta name="description" content="Website for Neighbourhood in Shawlands, Glasgow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        
        <main className={styles.main}>
          <Welcome />
          <About />
        <div>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}><p>{comment.username}</p><p>{comment.comment}</p></li>
            ))}
          </ul>
        </div>

        </main>
      </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from('comments').select()

  return {
    props: {
     comments: data
    },
  }
}

export default Home;