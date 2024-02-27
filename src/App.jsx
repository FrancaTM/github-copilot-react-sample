import { useState } from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import Footer from './components/Footer.jsx';
import TabContent from './components/TabContent.jsx'; // new component

const topics = ['components', 'jsx', 'props', 'state']; // new constant

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.id}
                title={concept.title}
                image={concept.image}
                description={concept.description}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {topics.map((topic) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onSelect={() => handleSelect(topic)}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </TabButton>
            ))}
          </menu>
          <TabContent selectedTopic={selectedTopic} /> {/* new component */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;