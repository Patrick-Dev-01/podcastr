import { Header } from "./components/Header";

interface Episodes{
  id: string;
  title: string;
  members: string;
  thumbnail: string;
  publish_at: string;
  file: {
    duration: number;
    type: string;
    url: string; 
  }
}

export default function Home(props) {
  console.log(props.episodes)

  return (
    <h1>Index</h1>
  )
}

export async function getServerSideProps(){
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json()

  return{
    props: {
      episodes: data,
    }
  }
}

/** SSG - Static Side Generation **/

// export async function getStaticProps(){
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json()

//   return{
//     props: {
//       episodes: data,
//     },
//     revalidate: 60 * 60 * 8,
//   }
// }
