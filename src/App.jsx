import { useEffect, useState } from 'react'
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'



function App() {
  const [sectionIds,setSectionIds] = useState([]); //เก็บ ID ของ sections ทั้งหมดที่อยู่ในหน้า
  const [navBarItems,setNavBarItem] =useState([]); //เก็บข้อมูล section (ID + title) สำหรับ navigation
  const [currentSection,setCurrentSection] =useState("");//เก็บค่า section ปัจจุบันที่อยู่ใน viewport

  const addSectionIds = (sectionId) => {
      
     const elementId = document.getElementById(sectionId).id;
     setSectionIds((prev) => [...new Set([...prev, elementId])]);


  const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
  const obj = {title: elementTitle,sectionIds: elementId}

  setNavBarItem((prev) => {
    if(prev.findIndex(e=>e.title === obj.title)< 0 ){
      return [...prev, obj];
    }
      return prev;
   });
 }

  // ฟังก์ชันจัดการการเลื่อนหน้า
  const handleScroll = () => {
    // วนลูปผ่านทุก section ใน sectionIds
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index]; // ดึง ID ของ section ปัจจุบัน
      const elOffsetTop = document.getElementById(element)?.getBoundingClientRect().top; // หาตำแหน่ง y ของ section
      const height = document.getElementById(element)?.getBoundingClientRect().height * 0.5; // ความสูงของ section * 0.5
      const viewHeight = window.innerHeight * 0.3; // ความสูงของ viewport * 0.3 (เป็น threshold สำหรับการจับตำแหน่ง)

      // หากตำแหน่งของ section อยู่ใน viewport
      if (elOffsetTop !== undefined && elOffsetTop <= 0) {
        if (elOffsetTop + height > viewHeight) {
          setCurrentSection(element); // อัปเดต currentSection เป็น ID ของ section นั้น
        }
      } else if (elOffsetTop > 0 && elOffsetTop < viewHeight) {
        setCurrentSection(element); // อัปเดต currentSection เป็น ID ของ section นั้น
      }
    }
  };
   
  // ตั้งค่า currentSection ให้เป็น section แรกเมื่อ sectionIds มีข้อมูล
  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection(sectionIds[0]);
    }
  }, [sectionIds]);

  // ใช้ useEffect เพื่อฟังการเลื่อนหน้าของ window และเรียกใช้ handleScroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // ทำการลบ event listener เมื่อไม่ใช้งาน
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]); // ทุกครั้งที่ sectionIds เปลี่ยนแปลง จะตั้ง event listener ใหม่


  return (
    <div className='mt-6 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]'>
     <LeftSection navBarItems={navBarItems} currentSection={currentSection}/>
     <RightSection onInitial={addSectionIds}/>
    </div>
  )

}
export default App;
