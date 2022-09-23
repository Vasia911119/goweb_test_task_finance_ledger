import { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Searchbar from './components/Searchbar';
// import Button from './components/Button';
import Spinner from '../Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import items from '../../helpers/data/data';


import {
  Header,
    Text,
    DescText,
    Wrapper,
} from './Cases.styled';

function Cases() {
    // const [imageName, setImageName] = useState('');
  const [loading, setLoading] = useState(false);
//   const [page, setPage] = useState(1);
  
    
//     useEffect(() => {
//     if (!imageName) return;
//     setLoading(true);
//     const fetchImages = async () => {
//       try {
//         const data = await imagesApi(imageName, page);
//         setItems(images => [...images, ...data]);
//       } catch (e) {
//         throw e;
//       } finally {
//         setLoading(false);
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       }
//     };
//     fetchImages();
//   }, [page, imageName]);

//   const handleFormSubmit = imageName => {
//     setImageName(imageName);
//     setItems([]);
//     setPage(1);
//   };

//   const onBtnClick = () => {
//     setPage(prevPage => prevPage + 1);
//   };

    return (
        <>
        <Wrapper>
            <Text>This is what we do</Text>
            <Header>Business Cases</Header>
            <DescText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</DescText>
        </Wrapper>
        <div className="App">
{/* //       {loading && <Spinner />} */}
{/* //       <Searchbar onSubmit={handleFormSubmit} /> */}
       <ImageGallery items={items} />
{/* //       {items.length > 0 && <Button onBtnClick={onBtnClick} />} */}
{/* //       <ToastContainer autoClose={3000} /> */}
        </div>
        </>
      
    );
}

export default Cases;

// function App() {
//   const [imageName, setImageName] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [items, setItems] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     if (!imageName) return;
//     setLoading(true);
//     const fetchImages = async () => {
//       try {
//         const data = await imagesApi(imageName, page);
//         setItems(images => [...images, ...data]);
//       } catch (e) {
//         throw e;
//       } finally {
//         setLoading(false);
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       }
//     };
//     fetchImages();
//   }, [page, imageName]);

//   const handleFormSubmit = imageName => {
//     setImageName(imageName);
//     setItems([]);
//     setPage(1);
//   };

//   const onBtnClick = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   return (
//     <div className="App">
//       {loading && <Spinner />}
//       <Searchbar onSubmit={handleFormSubmit} />
//       <ImageGallery items={items} />
//       {items.length > 0 && <Button onBtnClick={onBtnClick} />}
//       <ToastContainer autoClose={3000} />
//     </div>
//   );
// }
// export default App;
