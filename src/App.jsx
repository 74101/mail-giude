import { Routes, Route, Outlet, Link } from "react-router-dom";
import {Outlook} from "./components/Outlook.jsx";
import {Thunderbird} from "./components/Thunderbird.jsx";
import {Mailbird} from "./components/Mailbird.jsx";
import {Home} from "./components/Home.jsx";
import {OutlookHosting} from "./components/OutlookHosting.jsx";
import {OutlookCorp} from "./components/OutlookCorp.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="outlook" element={<Outlook />}>
            <Route path="hosting" element={<OutlookHosting />} />
            <Route path="corp" element={<OutlookCorp />} />
          </Route>
          <Route path="thunderbird" element={<Thunderbird />} />
          <Route path="mailbird" element={<Mailbird />} />
        </Route>
      </Routes>
    </>
  );
}

function Layout() {
  return (
    <div className="relative flex min-h-screen max-w-7xl mx-auto">
      <aside className="sticky flex-shrink-0 top-0 w-96 h-screen p-5 border-r">
        <nav>
          <ol className="flex flex-col gap-4 list-decimal pl-7 text-2xl">
            <li>
              <Link to="/outlook">Microsoft Outlook</Link>
              <ul>
                <li>
                  <Link to="/outlook/hosting">hosting</Link>
                </li>
                <li>
                  <Link to="/outlook/corp">corp</Link>
                </li>
              </ul>
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
