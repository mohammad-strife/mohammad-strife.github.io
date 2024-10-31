// CKEditorComponent.tsx
import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CKEditorComponent: any = ({ content, setContent }: any) => {
  // const [content, setContent] = useState<string>("");

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        config={{
          ckfinder: {
            uploadUrl: "http://localhost:8000/api/v1/temp_media", // Replace with your server's upload endpoint
          },
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
        onError={(error) => {
          console.error("CKEditor error:", error);
        }}
      />
    </div>
  );
};

export default CKEditorComponent;
