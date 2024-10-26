// Import React and CKEditor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const CkEditor = ({ setEditorData }: any) => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor:any) => {
          const data = editor.getData();
          setEditorData(data);
          // console.log({ event, editor, data });
        }}
      />
    </div>
  );
};

export default CkEditor;
