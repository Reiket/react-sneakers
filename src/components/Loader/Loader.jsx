import React from "react";
import ContentLoader from "react-content-loader";
export const Loader = () => {
   return   <ContentLoader
       speed={2}
       width={150}
       height={250}
       viewBox="0 0 150 265"
       backgroundColor="#f3f3f3"
       foregroundColor="#ecebeb"
   >
       <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
       <rect x="0" y="97" rx="5" ry="5" width="150" height="15" />
       <rect x="0" y="116" rx="5" ry="5" width="100" height="15" />
       <rect x="0" y="143" rx="5" ry="5" width="90" height="24" />
       <rect x="119" y="140" rx="10" ry="10" width="32" height="32" />
   </ContentLoader>
}
