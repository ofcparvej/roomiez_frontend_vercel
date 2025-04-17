// import React from 'react'
import React, { useState } from 'react';

const Image = (props) => {

    // const [imageUrl, setImageUrl] = useState('');
    // console.log(props.prop);

  return (
    <div>
        <img src={props.prop} alt="Dynamic image" />;
    </div>
  )
}

export default Image






// import React, { useState } from 'react';

// function DynamicImage() {


//   const [imageUrl, setImageUrl] = useState('http://res.cloudinary.com/dsjecjjig/image/upload/v1734249828/xhxs2kglohw7jvxzh2j8.png');


//   return <img src={imageUrl} alt="Dynamic image" />;
// }