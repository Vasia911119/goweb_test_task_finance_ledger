import ImageGallery from '../ImageGallery/ImageGallery';
import items from '../../helpers/data/galleryItems';
import useWindowDimensions from '../../hooks/useWindowDimensions';


import {
  Header,
    Text,
    DescText,
    Wrapper,
} from './Cases.styled';

function Cases() {
  const {width} = useWindowDimensions();
  const galleryItems = () => {
  const odd = items.filter(elem => elem.id % 2 !== 0);
  const pair = items.filter(elem => elem.id % 2 === 0).slice(0, 2);
  const result = [...odd, ...pair];
  return result
  };
  
    return (
      <>
        <Wrapper>
            <Text>This is what we do</Text>
            <Header>Business Cases</Header>
            <DescText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</DescText>
        </Wrapper>
        <ImageGallery items={ width >= 1360 ? items : galleryItems()} />
      </>
      
    );
}

export default Cases;
