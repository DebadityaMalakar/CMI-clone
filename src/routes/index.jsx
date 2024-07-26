import { Title } from "@solidjs/meta";
import Sidebar from "../components/sidebar";
import "./index.css";

export default function Home() {
  return (
    <>
      <Title>Chennai Mathematical Institute</Title>
      
      <main>
        <header class="bg-gray-800 text-white p-4 text-center">
          <h1 class="text-2xl font-bold">Chennai Mathematical Institute</h1>
        </header>
        
        <div class="flex flex-grow" style={{height:"100vh"}}>
          <Sidebar />
          
          <main class="flex-grow bg-gray-100 p-4">
            <div style={{ fontSize: "1em" }}>
              <p class="text-lg para">
                Chennai Mathematical Institute is a centre of excellence for teaching and research in the mathematical sciences. Founded in 1989 as part of the SPIC Science Foundation, it has been an autonomous institute since 1996.
              </p>
              <p class="text-lg para">
                The research groups in Mathematics and Computer Science at CMI are among the best known in the country. The Institute has nurtured an impressive collection of PhD students.
              </p>
              <p class="text-lg para">
                In 1998, CMI took the initiative to bridge the gap between teaching and research in India by starting BSc and MSc programmes in Mathematics and allied subjects. Students who have graduated from CMI have gone on to join leading institutions throughout the world.
              </p>
              <p class="text-lg para">
                CMI occupies a unique position in Indian academia, attracting substantial funding from both corporate and government sources.
              </p>
              <p class="text-lg para">
                In October, 2005, CMI moved to its new campus at Siruseri, on the southern outskirts of Chennai. In December, 2006, CMI was recognized by the Government of India as a University under Section 3 of the UGC Act, 1956.
              </p>
              <p class="text-lg para">
                CMI's vision is to build on its early success and develop into a well-rounded academic institution, in the tradition of the best universities around the world.
              </p>
            </div>
          </main>
          
          <aside class="w-[15%] bg-gray-200 p-4">
            <h2 class="text-lg font-bold">Right Sidebar</h2>
            <p>Content for the right sidebar.</p>
          </aside>
        </div>
        
        <footer class="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
