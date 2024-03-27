import RightSide from "./components/RightSide";
import Posts from "./components/Posts";
import { Main, Header, Wrapper } from "./components/styled";

function App() {
  return (
    <div className="App">
      <Main>
        <Header>
          Posts
        </Header>

        <Wrapper>
          <Posts />
          <RightSide />
        </Wrapper>
      </Main>
    </div>
  );
}

export default App;
