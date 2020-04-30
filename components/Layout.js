import Head from 'next/head'
import styled from 'styled-components'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sprite Friend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div id='main'>
        {props.children}
      </div>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: white;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}


const Main = styled.main`
  height: 100%;
`

const LayoutContainer = styled.div`
  height: 100vh;
`