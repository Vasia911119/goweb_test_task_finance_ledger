import TeamGallery from '../TeamGallery/TeamGallery';
import {
  Header,
    Text,
    DescText,
    Wrapper,
} from './Team.styled';
import items from '../../helpers/data/teamItems';

function Team() {

    return (
        <>
            <Wrapper>
                <Text>Who we are</Text>
                <Header>Our Professional Team</Header>
                <DescText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</DescText>
            </Wrapper>
            <TeamGallery items={items} />
        </>
      
    );
}

export default Team;