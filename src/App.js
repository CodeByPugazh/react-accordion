import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function App() {
  return (
    <div className="App">
      <h3>Accordion example using React Accessible Accordion</h3>
      <Accordion preExpanded={["one"]}>
        <AccordionItem uuid="one">
          <AccordionItemHeading>
            <AccordionItemButton>React</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>A JavaScript library for building user interfaces</p>
            <p>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="two">
          <AccordionItemHeading>
            <AccordionItemButton>Vue</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>The Progressive JavaScript Framework</p>
            <p>
              An incrementally adoptable ecosystem that scales between a library
              and a full-featured framework.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem uuid="three">
          <AccordionItemHeading>
            <AccordionItemButton>Angular</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>One framework. Mobile &amp; desktop.</p>
            <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
