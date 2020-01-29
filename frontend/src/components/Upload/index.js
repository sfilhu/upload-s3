import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { DropContainer, UploadMessager } from './style'

export default class Upload extends Component {

  renderDrgaMessage = (isDragActive, isDragReject) => {
    if(!isDragActive) {
      return <UploadMessager>Arraste suas imagens ou clique aqui!</UploadMessager>
    }

    if(isDragReject) {
      return <UploadMessager type="error" >Algum arquivo não é suportado!</UploadMessager>
    }

    return <UploadMessager type="success" >Solte suas imagens aqui</UploadMessager>
  }

  render() {
    const { onUpload } = this.props;

    return (
        <Dropzone accept="image/*"  onDropAccepted={ onUpload }>
            {
              ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer 
                  { ...getRootProps() }
                  isDragActive={ isDragActive }
                  isDragReject={ isDragReject }
                >
                  <input { ...getInputProps() } />
                  { this.renderDrgaMessage(isDragActive, isDragReject) }
                </DropContainer>
              )
            }
        </Dropzone>
    );
  }
}
