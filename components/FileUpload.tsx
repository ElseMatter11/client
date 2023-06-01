import React, { useRef } from "react"

interface FileUploadProps{
    file:any;
    setFile:Function;
    children:React.ReactNode;
    accept:any;
}

const FileUpload:React.FC<FileUploadProps> = ({file,setFile,children,accept}) => {
    const ref=useRef<HTMLInputElement>(null);
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files? e.target.files[0]:'')
        console.log(e.target.files![0])
    }
    
    return(
        <>
        <div onClick={ () =>ref.current?.click() }>
        <input type="file" 
        accept={accept}
        style={{display:"none"}}
        ref={ref}
        onChange={onChange}
        />
        {children}
        </div>
        </>
    )
}

export default FileUpload