import AntProvider from "./contexts/AntProvider";
import Rotas from "./routes/Rotas";

const App = () => {
  return (
    <>
      <AntProvider>
        <Rotas />
      </AntProvider>
    </>
  )
}

export default App;