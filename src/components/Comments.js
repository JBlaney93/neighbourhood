import { supabase } from './../../lib/supabaseClient';

export default function Comments({ comments }) {
    console.log({comments})
    return(
        <>
            <div>
            <ul>
                {comments.map((comment) => (
                <li key={comment.id}><p>{comment.username}</p><p>{comment.comment}</p></li>
                ))}
            </ul>
            </div>
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