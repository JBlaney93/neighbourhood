import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { supabase } from './../../lib/supabaseClient';

function Home({ comments }) {
  // console.log({comments})
  return (
      <>
    <Head>
    <title>Create Next App</title>
    <meta name="description" content="Website for Neighbourhood in Shawlands, Glasgow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1>HOMEPAGE</h1>

    <ul>
      {comments.map((comment) => (
        <li key={comment.id}><p>{comment.username}</p><p>{comment.comment}</p></li>
      ))}
    </ul>
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





// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Website for Neighbourhood in Shawlands, Glasgow" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <div>HOMEPAGE</div>
//       </main>
//     </>
//   )
// }
