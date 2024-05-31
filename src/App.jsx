import { Routes, Route, Outlet} from "react-router-dom";
import {ThunderbirdCorp} from "./components/ThunderbirdCorp.jsx";
import {ThunderbirdHosting} from "./components/ThunderbirdHosting.jsx";
import {Mailbird} from "./components/Mailbird.jsx";
import {Home} from "./components/Home.jsx";
import {OutlookHosting} from "./components/OutlookHosting.jsx";
import {OutlookCorp} from "./components/OutlookCorp.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {Search} from "./components/Search.jsx";
import {ScrollToTopButton} from "./components/ScrollToTopButton.jsx";

const articles = [
  { id: 1, keywords: 'рщыештп hosting [jcnbyu хостинг почта gjxnf Outlook щгедщщл', title: 'Хостинг почта Outlook', path: 'outlook-hosting' },
  { id: 3, keywords: 'рщыештп hosting [jcnbyu хостинг почта gjxnf Thunderbird ергтвук', title: 'Хостинг почта Thunderbird', path: 'thunderbird-hosting' },
  { id: 5, keywords: 'рщыештп hosting [jcnbyu хостинг почта gjxnf Mailbird ьфшд', title: 'Хостинг почта Mailbird', path: 'mailbird-hosting' },
  { id: 2, keywords: 'сщкз rjhg corp корпоративная почта gjxnf Outlook щгедщщл', title: 'Корпоративная почта Outlook', path: 'outlook-corp' },
  { id: 4, keywords: 'сщкз rjhg corp корпоративная почта gjxnf Thunderbird ергтвук', title: 'Корпоративная почта Thunderbird', path: 'thunderbird-corp' },
  { id: 6, keywords: 'сщкз rjhg corp корпоративная почта gjxnf Mailbird ьфшд', title: 'Корпоративная почта Mailbird', path: 'mailbird-corp' }
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="outlook-hosting" element={<OutlookHosting />} />
          <Route path="outlook-corp" element={<OutlookCorp />} />
          <Route path="thunderbird-hosting" element={<ThunderbirdHosting />} />
          <Route path="thunderbird-corp" element={<ThunderbirdCorp />} />
          <Route path="mailbird-hosting" element={<Mailbird />} />
          <Route path="mailbird-corp" element={<Mailbird />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

function Layout() {
  return (
    <div className="relative flex flex-shrink-0 min-h-screen max-w-screen-2xl mx-auto">
      <Sidebar />
      <section className="relative grow p-5">
        <Outlet/>
      </section>
      <Search articles={articles}/>
    </div>
  );
}

export default App;
