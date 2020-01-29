import React from 'react';

import { Container, FileInfo, Preview } from './style';
import { CircularProgressbar } from 'react-circular-progressbar';
import {  MdCheckCircle, MdError, MdLink } from 'react-icons/md';

const FileList = ({ files, onDelete }) => (
  <Container>
    { files.map( (file, index) => (
       <li key={ index }>
        <FileInfo>
          <Preview src={ file.preview }></Preview>
          <div>
            <strong>{ file.name }</strong>
            <span>
              { file.readableSize } 
              { !! file.url && ( <button onClick={ () => onDelete(file.id) }>Excluir</button> ) }
              
            </span>
          </div>
        </FileInfo>
  
        <div>
          { !file.uploaded && !file.error && (
             <CircularProgressbar 
              styles={{
                root: { width: 24  },
                path: { stroke: '#7159c1' },
              }}
              strokeWidth={10}
              value={ file.progress }
            />                                
          )}      
          
          { file.url && (
            <a href="http://localhost:3001/files/c8c93cd34efb824b1ec1a46f7a0dfd3f-profile.png" target="_blank" rel="noopener noreferrer">
              <MdLink style={{ marginRight: 8 }} size={24} color="#222"></MdLink>
            </a>
          )}
          
          
          { file.error &&  <MdError size={24} color="#e57878"></MdError> }
          { file.uploaded && <MdCheckCircle size={24} color="#78e5d5"></MdCheckCircle> }
          
        </div>
      </li>
    )) }  
  </Container>
);

export default FileList;
