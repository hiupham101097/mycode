import image1 from '../home/image.png';
import image2 from '../home/img2.png';
import image3 from '../home/img3.png';
import './home.css';
import { useState } from 'react';
import { pdfjs } from 'react-pdf';


function getCookie(cookie) {
    let value = cookie.split(';');
    console.log('cookie : ', value);
    return value[0] == "" ||value[0] == "NaN" || value[0] == undefined || value == "undefined" ? null : value[0];
  
  }

const HomePage = () => {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const token = getCookie(document.cookie);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const goToNextPage = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );
    var url = ''
    if (window.location.pathname.startsWith("/login") == false && token != null) {
        return (
            <div className='homepage'>
                <div className='title'>
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />

                </div>
            </div>
        );
    }

}


export default HomePage;