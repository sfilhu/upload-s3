import React,  { Component } from 'react';
import GlobalStyled from './styles/global';
import { uniqueId } from 'lodash'
import fileSize from 'filesize'
import { Container, Content } from './style';
import Upload from './components/Upload';
import FileList from './components/FileList';
import api from './services/api';
 



export default class App extends Component {
  state = {
    uploadFiles: []
  }


  handlerUpload = (files) => {
    
    const itemsFiles = files.map( file => (
      {
        file,
        id: uniqueId(),
        name: file.name,
        readableSize: fileSize(file.size),
        preview: URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: null
      }
    ))

      this.setState({
        uploadFiles: this.state.uploadFiles.concat(itemsFiles) 
      })

      itemsFiles.forEach(this.processFiles);
  } 

  updateFile = (id, data) => {
    this.setState({
      uploadFiles: this.state.uploadFiles.map( uploadedFile => {
        return id === uploadedFile.id ? {...uploadedFile, ...data} : uploadedFile;
      })
    })

    console.log(this.state.uploadFiles)
  }

  processFiles = (el) => {
    const data  = new FormData();

    data.append('file', el.file, el.name);

    api.post('post', data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round( (e.loaded * 100) / e.total));
        this.updateFile( el.id, { progress })
      }
    }).then( response => {
      const { url, _id } = response.data;
      this.updateFile(el.id, {
        uploaded: true,
        url,
        id: _id,
      })
    }).catch( () => {
      this.updateFile(el.id, { error: true })
    })
  }

  handlerDelete = async (id) => {
    await api.delete(`post/${id}`);

    this.setState({
      uploadFiles: this.state.uploadFiles.filter( item => item.id !== id )
    })
  }

  render() {
    const { uploadFiles } = this.state

    return (
      <Container>
        <Content>
          <Upload onUpload={ this.handlerUpload }/>
          {!!uploadFiles.length && ( 
            <FileList files={ uploadFiles }  onDelete={ this.handlerDelete } /> 
          )}
          
        </Content>
        <GlobalStyled />
      </Container>
  );
  }
}
