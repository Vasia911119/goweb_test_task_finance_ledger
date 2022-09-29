import {
    List,
  Item,
    Link,
} from './Navigation.styled';

function Navigation() {
  return (
          <List>
              <Item><Link href="#home">Home</Link></Item>
              <Item><Link href="#about">About</Link></Item>
              <Item><Link href="#cases">Cases</Link></Item>
              <Item><Link href="#blog">Blog</Link></Item>
              <Item><Link href="#contact">Contact</Link></Item>
        </List>
  );
}

export default Navigation;