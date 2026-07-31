import Heading from "./Heading.jsx";
import Section from "./Section.jsx";

export default function Page() {
  return (
    <Section>
      <Heading level={1}>Titre</Heading>
      <Section>
        <Heading level={2}>Section</Heading>
        <Heading level={2}>Section</Heading>
        <Heading level={2}>Section</Heading>
        <Section>
          <Heading level={3}>Sous-section</Heading>
          <Heading level={3}>Sous-section</Heading>
          <Heading level={3}>Sous-section</Heading>
          <Section>
            <Heading level={4}>Sous-sous-section</Heading>
            <Heading level={4}>Sous-sous-section</Heading>
            <Heading level={4}>Sous-sous-section</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
