import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import './App.css';
import GeneralElements from './componentes/form/GeneralElements';
import Deshbord from './componentes/Deshbord';
import AdvanceElements from './componentes/form/AdvancedElements';
import Editors from './componentes/form/Editors';
import Validation from './componentes/form/Validation';
import SimpleTables from './componentes/table/SimpleTables';
import DataTables from './componentes/table/DataTables';
import Jsgrid from './componentes/table/Jsgrid';
import Login from './componentes/Login';
import Addpro from './componentes/productmanagement/Addpro';
import Viewpro from './componentes/productmanagement/Viewpro';


function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="deshbord" element={<Deshbord />} />
          <Route path="generalElements" element={<GeneralElements />} />
          <Route path="advanceElements" element={<AdvanceElements />} />
          <Route path="editors" element={<Editors />} />
          <Route path="validation" element={<Validation />} />
          <Route path="simpleTables" element={<SimpleTables />} />
          <Route path="dataTables" element={<DataTables />} />
          <Route path="jsgrid" element={<Jsgrid />} />
          <Route path="addproduct" element={<Addpro />} />
          <Route path="viewproduct" element={<Viewpro />} />

        </Route>
      </Routes>
    </> 
  );
}

export default App;
