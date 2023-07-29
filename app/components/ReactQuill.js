import React from 'react';
import dynamic from 'next/dynamic';

const DynamicReactQuill = dynamic(() => import('react-quill'), {
  loading: () => <p>Loading...</p>
});

export default function ReactQuill () {
  return <DynamicReactQuill />;
}

// const ReactQuill = dynamic(
//   async () => {
//     const { default: RQ } = await import("react-quill");
//
// return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
// },
// {
//   ssr: false
// }
// );
//
//
// export default function QuillWrapper() {
//   const quillRef = React.useRef(false)
//
//   return <>
//     <ReactQuill forwardedRef={quillRef} />
//   </>
// }