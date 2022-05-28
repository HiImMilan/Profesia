import { FaFileUpload } from 'react-icons/fa';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import styled from 'styled-components';

const config = {
  headers: { 'content-type': 'multipart/form-data;boundary=gc0p4Jq0M2Yt08jU534c0p' }
};

const getColor = (props) => {
  if (props.isDragAccept) {
    return '#00FF00';
  }
  if (props.isFocused) {
    return '#0000FF';
  }
  return '#eeeeee';
};


const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-width: 4px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #1f1f1f;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  outline: none;
  transition: border 0.24s ease-in-out;
`;


function UploadFileForm({ onDrop }) {
  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    open,
    isDragAccept,
    isFocused,
    isDragReject,
  } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
  });

  if (acceptedFiles.length > 0) {
    let data = new FormData();
    data.append("file0", acceptedFiles.pop());
    const start = new Date().getTime();
    axios.post("http://localhost:8080/api/files/uploadFile", data, config).then(res => {
      const end = new Date().getTime();
      const time = end - start;
      console.log(`Finished in ${time} ms`);
      if (res.status === 200) {
        document.getElementById("uploadBtn").innerHTML = `Súbor bol úspešne nahraný za ${time} ms`;
        console.log(res.data);
      } else {
        document.getElementById("uploadBtn").innerHTML = `Nepodarilo sa nahrať súbor`;
      }
    });
  }

  return (
    <>
      {' '}
      <section className="dropbox">
        <Container
          className="dropbox"
          {...getRootProps({ isDragAccept, isFocused, isDragReject })}>
          <input {...getInputProps()} />
          <FaFileUpload size={80} />
          <p>Nahrajte sem požadované súbory</p>
          <button type="button" id="uploadBtn" className="btn" onClick={open}>
            Presunte sem súbory alebo kliknutím vyberiete konkrétny súbor.
          </button>
        </Container>
      </section>
    </>
  );

}
export default UploadFileForm;