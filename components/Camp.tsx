import Image from "next/image";
import { useState } from "react";
import CustomAudio from "./CustomAudio";
import CustomAudProp from "./CustomAudProp";

const Camp = ({ onVideoUpload, onImageUpload, onAudioUpload }: any) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [showVideoUpload, setShowVideoUpload] = useState(true);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showAudioUpload, setShowAudioUpload] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFile2, setUploadedFile2] = useState(null);
  const [uploadedFile3, setUploadedFile3] = useState(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setUploadedFile(null);
  };

  const handleVideoUpload = (event: any) => {
    const video = event.target.files[0];
    onVideoUpload(video);
    setUploadedFile(video);
    setShowVideoUpload(true);
  };

  const handleImageUpload = (event: any) => {
    const image = event.target.files[0];
    onImageUpload(image);
    setUploadedFile2(image);
    setShowImageUpload(true);
  };

  const handleAudUpload = (event: any) => {
    const audio = event.target.files[0];
    onAudioUpload(audio);
    setUploadedFile3(audio);
    setShowAudioUpload(true);
  };

  return (
    <section className="bg-white w-[290px] h-[569px] rounded-[10px] boxShadow 2xl:max-container relative flex flex-col lg:mt-0 lg:mb-[15px]">
      <form>
        <div className="px-5">
          <div className="flex items-center space-x-4">
            <h2
              className={`font-medium text-[12px] mt-[12px] cursor-pointer mb-[12px] ${showVideoUpload ? 'active' : ''}`}
              onClick={() => {
                setShowVideoUpload(true);
                setShowImageUpload(false);              
              }}
            >
              Video
            </h2>
            <h2
              className={`font-medium text-[12px] mt-[12px] mb-[12px] cursor-pointer ${showImageUpload ? 'active' : ''}`}
              onClick={() => {
                setShowImageUpload(true);
                setShowVideoUpload(false);
              }}
            >
              Image
            </h2>
            
          </div>
          </div>
          {showVideoUpload && (
            <div className="px-5">
            {uploadedFile ? (
           
                <video 
               className="mx-auto rounded-[8px] h-[149px] w-[250px] object-cover">
                
              <source src={URL.createObjectURL(uploadedFile)} type="video/mp4"></source>
               </video>

             
            ) : (
            <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
              <input type="file" accept="video/*" id="file-input" onChange={handleVideoUpload} onClick={() => {
                  setUploadedFile2(null);
                  setUploadedFile3(null);
                }}/>
              <label htmlFor="file-input" className="cursor-pointer">
                <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                <p className="text-[#737477] text-[14px] pt-[5px]">Upload Video</p>
              </label>
            </div>
          )}
        </div>
        )}

        {showImageUpload && (
          <div className="px-5">
            {uploadedFile2 ? (
              <div>
                
                <img src={URL.createObjectURL(uploadedFile2)} alt="Uploaded Image" className="mx-auto rounded-[8px] h-[149px] w-[250px] object-cover" />
              </div>
            ) : (
              <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
                <input type="file" accept="image/*" id="file-input2" onChange={handleImageUpload} onClick={() => {
                  setUploadedFile(null);
                  setUploadedFile3(null);
                }}/>
                <label htmlFor="file-input2" className="cursor-pointer">
                  <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                  <p className="text-[#737477] text-[14px] pt-[5px]">Upload Image</p>
                </label>
              </div>
            )}
          </div>
        )}

        
          <div className="px-5 pt-[45px]">
            {uploadedFile3 ? (
             <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
             <img src="Audiowave.svg" alt="AudioWave" className='w-[1000px] h-[200px] mt-2' />
           </div>
            ) : (
              <div className="mx-auto border flex flex-col rounded-[8px] justify-center items-center h-[149px] w-[250px] boxBg boxShadow">
                <input type="file" accept="audio/*" id="file-input3" onChange={handleAudUpload} />
                <label htmlFor="file-input3" className="cursor-pointer">
                  <Image src="/upload.svg" alt="Upload Icon" width={20} height={20} className="mx-auto" />
                  <p className="text-[#737477] text-[14px] pt-[5px]">Upload Audio</p>
                </label>
              </div>
            )}
          </div>
        

        <div className="px-5 pt-[45px]">
          <button type="button" className="buttonBg w-full py-5 rounded-[8px] text-[14px] text-white font-bold">
            Generate
          </button>
        </div>
      </form>

      <style jsx>{`
        .active {
          color: white;
          font-weight: bold;
          font-size: 12px;
          padding: 5px 10px;
          border-radius: 4px;
          background-color: rgba(30, 30, 30, 1);
        }
      `}</style>
    </section>
  );
};

export default Camp;
