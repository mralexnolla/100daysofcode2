import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navibar from "./components/Navibar";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navibar />
        <br />
        <Routes>
          <Route path="/" exact element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
