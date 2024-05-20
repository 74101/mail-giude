import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import {Outlook} from "./components/Outlook.jsx";
import {Thunderbird} from "./components/Thunderbird.jsx";
import {Mailbird} from "./components/Mailbird.jsx";
import {Home} from "./components/Home.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="outlook" element={<Outlook />} />
          <Route path="thunderbird" element={<Thunderbird />} />
          <Route path="mailbird" element={<Mailbird />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div className="relative flex min-h-screen">
      <aside className="sticky top-0 w-96 h-screen p-5 border-r">
        <nav>
          <ol className="flex flex-col gap-4 list-decimal pl-7 text-2xl">
            <li>
              <Link to="/outlook">Microsoft Outlook</Link>
            </li>
            <li>
              <Link to="/thunderbird">Mozilla Thunderbird</Link>
            </li>
            <li>
              <Link to="/mailbird">Mailbird</Link>
            </li>
          </ol>
        </nav>
      </aside>
      <section className="grow p-5">
        <Outlet/>
      </section>
    </div>
  );
}

export default App;
