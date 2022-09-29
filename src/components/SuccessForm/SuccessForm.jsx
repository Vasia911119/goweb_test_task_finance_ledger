import { Container, Title, Text, ExitLink } from './SuccessForm.styled';

export default function SuccessForm({ onClose }) {
  return (
    <Container>
      <Title>Hi! Thank you!</Title>
      <Text>Your form submission has been received.</Text>
      <ExitLink onClick={onClose}>&#60; Back to our site</ExitLink>
    </Container>
  );
}