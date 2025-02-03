// import  { useState, useEffect } from "react";
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../components";
// import {  FaSadCry } from "react-icons/fa";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     appwriteService.getPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//       }
//     });
//   }, []);

//   if (posts.length === 0) {
//     return (
//       <div className="w-screen py-8 text-center">
//         <Container>
//           <div className="flex flex-wrap">
//             <FaSadCry size={30} color="red" />
//             <div className="p-12 w-full">
//             {/* <FaSadTear size={30} color="blue" /> */}
//               <h1 className="text-3xl text-center font-bold hover:text-gray-500">
//                 Login to read posts
//               </h1>
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full py-8">
//       <h1 className='text-3xl font-bold mb-5'>Unleash Ideas, One Post At A Time!</h1>
//       <Container>
//         <div className="flex flex-wrap">
//           {posts.map((post) => (
//             <div key={post.$id} className="p-2 w-1/4">
//               <PostCard {...post} />
//             </div>
//           ))}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export  {Home};

import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { FaSadCry, FaSadTear } from "react-icons/fa";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // If no posts, show sad face + login message
  if (posts.length === 0) {
    return (
      <div className="w-screen h-[50vh] flex justify-center items-center">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <FaSadTear size={50} className="text-red-500 text-4xl transition-transform duration-300 hover:rotate-12 hover:scale-110" />
            <h1 className="text-3xl font-bold text-gray-800 hover:text-gray-500 mr-14">
              SignUp/Login to Read and Write the Posts
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <h1 className="text-3xl font-bold mb-5 text-center">
        Unleash Ideas, One Post At A Time!
      </h1>
      <Container>
        <div className="flex flex-wrap justify-center">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export { Home };
