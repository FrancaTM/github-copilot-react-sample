import { EXAMPLES } from '../data.js';

function TabContent({ selectedTopic }) {
    if (!selectedTopic) {
        return <p>Please select a topic.</p>;
    }

    return (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    );
}

export default TabContent;