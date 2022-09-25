import { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Searchbar from './components/Searchbar';
// import Button from './components/Button';
import Spinner from '../Loader/Loader';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import imagesApi from './services/imagesApi';
import img1 from "../../images/cases/cases1.jpg";
import webp1 from "../../images/cases/cases1.webp";
import img2x1 from "../../images/cases/cases1@2x.jpg";
import webp2x1 from "../../images/cases/cases1@2x.webp";
import img2 from "../../images/cases/cases2.jpg";
import webp2 from "../../images/cases/cases2.webp";
import img2x2 from "../../images/cases/cases2@2x.jpg";
import webp2x2 from "../../images/cases/cases2@2x.webp";
import img3 from "../../images/cases/cases3.jpg";
import webp3 from "../../images/cases/cases3.webp";
import img2x3 from "../../images/cases/cases3@2x.jpg";
import webp2x3 from "../../images/cases/cases3@2x.webp";
import img4 from "../../images/cases/cases4.jpg";
import webp4 from "../../images/cases/cases4.webp";
import img2x4 from "../../images/cases/cases4@2x.jpg";
import webp2x4 from "../../images/cases/cases4@2x.webp";
import img5 from "../../images/cases/cases5.jpg";
import webp5 from "../../images/cases/cases5.webp";
import img2x5 from "../../images/cases/cases5@2x.jpg";
import webp2x5 from "../../images/cases/cases5@2x.webp";
import img6 from "../../images/cases/cases6.jpg";
import webp6 from "../../images/cases/cases6.webp";
import img2x6 from "../../images/cases/cases6@2x.jpg";
import webp2x6 from "../../images/cases/cases6@2x.webp";
import img7 from "../../images/cases/cases7.jpg";
import webp7 from "../../images/cases/cases7.webp";
import img2x7 from "../../images/cases/cases7@2x.jpg";
import webp2x7 from "../../images/cases/cases7@2x.webp";
import img8 from "../../images/cases/cases8.jpg";
import webp8 from "../../images/cases/cases8.webp";
import img2x8 from "../../images/cases/cases8@2x.jpg";
import webp2x8 from "../../images/cases/cases8@2x.webp";

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
  
    const items = [{ id: 1, img: img1, webp: webp1, img2x: img2x1, webp2x: webp2x1, tags: "people work at the table" }, { id: 2, img: img2, webp: webp2, img2x: img2x2, webp2x: webp2x2, tags: "laptop, pen, notebook on the table" }, { id: 3, img: img3, webp: webp3, img2x: img2x3, webp2x: webp2x3, tags: "a man works at a table with a laptop" }, { id: 4, img: img4, webp: webp4, img2x: img2x4, webp2x: webp2x4, tags: "skyscrapers and sky" }, { id: 5, img: img5, webp: webp5, img2x: img2x5, webp2x: webp2x5, tags: "handshake in the office" }, { id: 6, img: img6, webp: webp6, img2x: img2x6, webp2x: webp2x6, tags: "a girl in glasses on the background of a working team" }, { id: 7, img: img7, webp: webp7, img2x: img2x7, webp2x: webp2x7, tags: "six palms on top of each other in the office" }, { id: 8, img: img8, webp: webp8, img2x: img2x8, webp2x: webp2x8, tags: "smiling woman at the laptop in the office" }];
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
