import React, { useRef, useState } from 'react'

function Drag({files, setFiles}) {
    const inputRef = useRef();


    const handleDragOver = (event) =>{
        event.preventDefault();
    }
    const handlerDrop = (event) =>{
        event.preventDefault();
        setFiles(event.dataTransfer.files[0]);
    }


    if (files ) return (
        <div style={{
            border: '2px dashed',
            padding: '1rem',
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px',
          }}>
            <ul>
                <li >{files.name}</li>
            </ul>
            <div>
                <button onClick={()=> setFiles(null)}>취소</button>
            </div>
        </div>
    )


  return (
    <>
        {!files && (
            <div style={{
                border: '2px dashed',
                padding: '1rem',
                display: 'flex',
                flexDirection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
              }}onDragOver={handleDragOver}
                onDrop={handlerDrop}>
                
                <h1>이미지 파일을 박스 안으로 드래그 혹은 버튼을 클릭 해주세요.</h1>
                {/* <h1>or</h1> */}
                <input 
                type='file' 
                multiple
                onChange={(event)=> setFiles(event.target.files[0])}
                hidden
                ref={inputRef}
                />
                <button onClick={()=> inputRef.current.click()} style={{padding:"12px", fontSize: 'medium'}}>파일 선택</button>
            </div>
        )}
    </>
  )
}

export default Drag


