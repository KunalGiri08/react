import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

// control ko use karte hai kuki jo bhi isko call karega vo isko use kar paega
export default function RTE({name, control, label, defaultValue =''}) {
  return (
    <div>
       {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

     <Controller 
      name={name || content}
      control={control}
      render={({field: {onChange}})=> (
         <Editor
         apiKey='88mh0w4hkjox9fs4a1rzlzyj1t9wr42fvrwt6hs28pooq80p'
         initialValue = {defaultValue}
        init={{
            //  initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
      )}
     />

    </div>
  )
}