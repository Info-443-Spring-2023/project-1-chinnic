import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  Text
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Rating System</FooterLink>
            <FooterLink href="#">Submit Feedback</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="tel:555-123-4567">
              <span className="material-icons">phone</span>555-123-4567</FooterLink>
            <FooterLink href="mailto:dubdumps@uw.edu">
              <span className="material-icons">email</span>dubdumps@uw.edu</FooterLink>
          </Column>
        </Row>
        <Text>Dub Dumps is brought to you by University of Washington students Amelia, Nic, Sydney, and Zach,
          created as a final project for INFO 340. Hope the site helps you in your darkest times!
        </Text>
      </Container>
    </Box>
  );
};
export default Footer;