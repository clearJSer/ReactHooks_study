import { useEffect } from 'react'
export default function List() {
  useEffect(() => {
    console.log(' 你来了老弟 List页面');
    return () => {
      console.log('老弟你走了 ,List页面');
    };
  }, []);
  return <h2>List-Page</h2>;
}