import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

export default function Home({ newResults, randomUsers }) {

  // console.log(randomUsers)
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex min-h-screen max-w-7xl mx-auto'>
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}

        <Widgets
          newResults={newResults}
          randomUsers={randomUsers}
        />


        {/* Modal */}

      </main>


    </div>
  )
}

export async function getServerSideProps() {

  // https://saurav.tech/NewsAPI/top-headlines/category/health/in.json

  // Widgets components {what's happening}
  const newResults = await fetch(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`).then(res => res.json());

  // Widgets components {Who's to follow}
  // https://randomuser.me/api/?results=50&inc=name,login,picture

  const randomUsers = await fetch(`https://randomuser.me/api/?results=50&inc=name,login,picture`).then(res => res.json());


  return {
    props: {
      newResults: Object.entries(newResults)[2][1],
      randomUsers: randomUsers.results,
    },
  }
}