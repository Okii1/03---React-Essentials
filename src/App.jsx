import { useState } from 'react';

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcep.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // Toggle the selected topic
    setSelectedTopic((prevTopic) => (prevTopic === selectedButton ? null : selectedButton));
    console.log(selectedTopic);
  }

  let tabContent = <h3>Please select a topic</h3>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conseptItem) => <CoreConcept key={conseptItem.title} {...conseptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActive={selectedTopic === 'components'} 
            onSelect={() => handleSelect('components')}
            >
              Components
            </TabButton>
            <TabButton isActive={selectedTopic === 'jsx'} 
            onSelect={() => handleSelect('jsx')}
            >
              JSX
            </TabButton>
            <TabButton isActive={selectedTopic === 'props'} 
            onSelect={() => handleSelect('props')}
            >
              Props
            </TabButton>
            <TabButton isActive={selectedTopic === 'state'} 
            onSelect={() => handleSelect('state')}
            >
              State
            </TabButton>
          </menu>
          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
