import { Routes, Route, Outlet} from "react-router-dom";
import {Thunderbird} from "./components/Thunderbird.jsx";
import {Mailbird} from "./components/Mailbird.jsx";
import {Home} from "./components/Home.jsx";
import {OutlookHosting} from "./components/OutlookHosting.jsx";
import {OutlookCorp} from "./components/OutlookCorp.jsx";
import {MyLink} from "./components/MyLink.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="outlook-hosting" element={<OutlookHosting />} />
          <Route path="outlook-corp" element={<OutlookCorp />} />
          <Route path="thunderbird-hosting" element={<Thunderbird />} />
          <Route path="thunderbird-corp" element={<Thunderbird />} />
          <Route path="mailbird-hosting" element={<Mailbird />} />
          <Route path="mailbird-corp" element={<Mailbird />} />
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
          <ul className="flex flex-col gap-4 text-2xl">
            <li>
              Microsoft Outlook
              <ul className="mt-2 text-xl space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li>
                  <MyLink to="/outlook-hosting">hosting</MyLink>
                </li>
                <li>
                  <MyLink to="/outlook-corp">corp</MyLink>
                </li>
              </ul>
            </li>
            <li>
              Mozilla Thunderbird
              <ul className="mt-2 text-xl space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li>
                  <MyLink to="/outlook-hosting">hosting</MyLink>
                </li>
                <li>
                  <MyLink to="/outlook-corp">corp</MyLink>
                </li>
              </ul>
            </li>
            <li>
              Mailbird
              <ul className="mt-2 text-xl space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
                <li>
                  <MyLink to="/outlook-hosting">hosting</MyLink>
                </li>
                <li>
                  <MyLink to="/outlook-corp">corp</MyLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="grow p-5">
        <Outlet/>
      </section>
    </div>
  );
}

export default App;
