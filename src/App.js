import Section from "./components/Section/Section";
import Contacts from "./components/Contacts/Contacts";
import PhoneBook from "./components/Phonebook/Phonebook";
import Filter from "./components/Filter/Filter";

function App() {
  return (
      <Section>
      <PhoneBook />
      <Filter />
      <Contacts />
      </Section>
  );
}

export default App;