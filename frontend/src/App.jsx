import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import IndexBudgetManagement from './pages/BudgetManagement/index';
import CreateBudgetManagement from './pages/BudgetManagement/create';
import UpdateBudgetManagement from './pages/BudgetManagement/update';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/budget-management/index" element={<IndexBudgetManagement />} />
          <Route path="/budget-management/create" element={<CreateBudgetManagement />} />
          <Route exact path="/budget-management/update/:id" element={<UpdateBudgetManagement />} />
      </Routes>
    </>
  );
}

export default App;
