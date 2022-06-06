import './App.css';

import Name from './components/name/name'
import Menu from './components/menu/menu'
import PageInfo from './components/pageInfo/pageInfo'
import PageProjects from './components/pageProjects/pageProjects'
import PageContacts from './components/pageContacts/pageContacts'

export default function App() {
  return (
    <div>
      <Name />
      <Menu />

      <PageInfo/>
      <PageProjects />
      <PageContacts />
    </div>
  );
}