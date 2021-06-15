import Head from 'next/head'
import TopBar from 'src/components/TopBar/TopBar'
import Main from 'src/components/Main/Main'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  min-height: 100vh;
  background: ${({ theme }) =>
    `linear-gradient(to right top, ${theme.colors.primary}, ${theme.colors.secondary})`};
`
const LayoutCircle = styled.div`
  background-color: red;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.3)
  );
  height: 20rem;
  width: 20rem;
  position: absolute;
  border-radius: 50%;
  ${(p) => (p.left ? 'bottom: 2%; left: 5%' : 'top: 5%; right: 7%;')};
`

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Tasker</title>
        <meta name="description" content="Tasker" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <LayoutCircle left />
        <LayoutCircle />
        <TopBar />
        <Main />
      </Layout>
    </>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }
