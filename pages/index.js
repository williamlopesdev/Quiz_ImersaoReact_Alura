import styled from 'styled-components'
import db from '../db.json';
import Widget from '../source/components/Widget'
import Footer from '../source/components/Footer'
import GitHubCorner from '../source/components/GitHubCorner'
import QuizBackground from '../source/components/QuizBackground'
import QuizLogo from '../source/components/QuizLogo'

/*
const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position:center;
  `;
  */

  export const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 45px;
    margin: auto 10%;
    @media screen and (max-width: 500px){
      margin: auto;
      padding: 15px;
    }
  `;

  
export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
                <h1>the legend of coofee</h1>
          </Widget.Header>
            <Widget.Content>
          
                <p>Lorem ipsum</p>
              
            </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>

            <p>Lorem ipsum</p>
            </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectURL="https://github.com/williamlopesdev"/>
    </QuizBackground>
  );
}
