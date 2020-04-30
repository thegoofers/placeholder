import Layout from '../components/Layout'
import styled from 'styled-components'

export default function Home() {
  return (
    <Layout>
      <Container>
        <PetBox>
          <Pet />
        </PetBox>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  height: 100vh;
`

const PetBox = styled.div`
  padding: 20px;
  height: fit-content;
`

const Pet = styled.div`
  height: 200px;
  width: 200px;
  background: url('/sprites/spritey.png') no-repeat left center;
  background-size: cover;
  @keyframes play {
    100% { background-position: -400px; }
  }
  animation: play 1s steps(2) infinite;
`
