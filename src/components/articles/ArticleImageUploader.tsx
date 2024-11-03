import { useState, useEffect, ChangeEvent } from "react";
import axios from "@/api/axios";
import { FcAddImage } from "react-icons/fc";
import { useSelector } from "react-redux";

const ArticleImageUploader = ({ cover, setCover }: any) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { userInfo } = useSelector((state: any) => state.auth);

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("upload", selectedFile);
    // console.log(formData);

    try {
      const result = await axios.post("/temp_media", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      const { url } = result.data;
      setCover(url);

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCover(URL.createObjectURL(file));
      setSelectedFile(file);
    }
  };

  // Watch for selectedFile changes and upload after selection
  useEffect(() => {
    if (selectedFile) {
      handleSubmit();
    }
  }, [selectedFile]);

  return (
    <div className="flex flex-col items-center rounded-lg">
      {!cover ? (
        <>
          <label
            htmlFor="file-upload"
            className="cursor-pointer h-20 w-20 mb-4 text-white bg-gray-600 rounded-full hover:bg-gray-700 flex items-center justify-center"
          >
            <FcAddImage className="size-10" />
          </label>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </>
      ) : (
        <div className="relative rounded-full">
          <img src={cover} className="object-cover rounded-lg shadow-md" />
          <button
            onClick={() => document.getElementById("file-upload")?.click()}
            className="absolute bottom-2 right-2 p-1 bg-white rounded-full shadow hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-5m-6 1l9-9m-6 4l4 4"
              />
            </svg>
          </button>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default ArticleImageUploader;
