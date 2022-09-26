import { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
import Spinner from '../Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import items from '../../helpers/data/galleryItems';


import {
  Header,
    Text,
    DescText,
    Wrapper,
} from './Cases.styled';

function Cases() {
  const [loading, setLoading] = useState(false);

    return (
        <>
        <Wrapper>
            <Text>This is what we do</Text>
            <Header>Business Cases</Header>
            <DescText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</DescText>
        </Wrapper>
        {/* <div className="App"> */}
{/* //       {loading && <Spinner />} */}
{/* //       <Searchbar onSubmit={handleFormSubmit} /> */}
       <ImageGallery items={items} />
{/* //       {items.length > 0 && <Button onBtnClick={onBtnClick} />} */}
{/* //       <ToastContainer autoClose={3000} /> */}
        {/* </div> */}
        </>
      
    );
}

export default Cases;
