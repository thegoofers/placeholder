import Layout from '../components/Layout'
import styled from 'styled-components'

export default function Home() {
  return (
    <Layout>
      <Container>
        <PetBox>
          <Pet src='/sprites/spritey.png' />
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

const Pet = styled.img`
  height: 200px;
  width: 200px;
`

const Something = styled.div`
  color: red;
`