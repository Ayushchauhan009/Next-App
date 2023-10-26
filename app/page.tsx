import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  const selectedFilePath = "/img-1.png";

  // Convert the file path to a File object
  const selectedFile = new File([selectedFilePath], 'img-1.png');
  return (
    <div className=" ">
    <Hero selectedFile={selectedFile}/>
   
    </div>
  )
}
