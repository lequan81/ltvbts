import { Editor } from '@tinymce/tinymce-react';
import { useCallback, useRef, useState } from 'react';
import { toast } from "react-hot-toast";
import Loader from './Loader';
import Notify from './Notify';
// https://codesandbox.io/s/4f7eo?file=/src/index.js
const CreatePost = () => {
  const editorRef = useRef(null);
  const [count, setCount] = useState(0);
  const [isLoad, setIsLoad] = useState(true);

  const [state, setState] = useState({
    nickname: "",
    fullname: "",
    userClass: "",
    title: "",
    hashtag: ""
  });
  let { fullname, nickname, userClass, hashtag, title } = state;

  const handleChange = useCallback(({ target: { name, value } }) => {
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const goback = () => {
    // window.history.go(-1)
    window.location.replace("/")
  }

  setTimeout(() => {
    setIsLoad(false)
  }, 3000)

  const postData = async () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent({ format: "raw" }).replace(/(&nbsp;)*/g, ""));

      if (fullname === "" || userClass === "" || title === "" || count === 0) {
        toast.error("Fullname, Class, Title and Content should not be empty")
      } else {
        const doc = {
          title: title,
          nickname: nickname,
          fullname: fullname,
          userClass: userClass,
          hashtag: hashtag,
          body: editorRef.current.getContent().replace(/(&nbsp;)*/g, ""),
          date: (new Date()).toLocaleDateString('vi-VN'),
        }

        let res = await fetch('https://obvious-tested-walk.glitch.me/blogs', {
          method: 'POST',
          body: JSON.stringify(doc),
          headers: { 'Content-Type': 'application/json' }
        });

        if (res.ok) {
          console.log('ok');
          toast.success("Send post successfully")
        }
      }
    }
  };
  // Custom tinymce wordCount function working on React
  const wordCount = (editor) => {
    let text = editor.getContent({ format: "text" })
    return (((text.replace(/(&nbsp;)*/g, "")).replace(/(<p>)*/g, "")).replace(/<(\/)?p[^>]*>/g, ""))
  };

  const handleUpdate = (value, editor) => {
    const wCount = wordCount(editor).split(' ');

    let _count = 0;
    wCount.forEach((word) => {
      if (word.trim() !== '') {
        _count++;
      }
    });
    setCount(_count);
  }
  return (
    <>
      <Notify />
      {isLoad && <Loader />}
      <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900">
        <div className="heading text-center font-bold text-2xl m-5 text-gray-800 dark:text-white">New Post</div>
        <div className="editor flex grow w-full max-w-5xl mx-auto rounded">
          <div className="dark:bg-gray-800 bg-gray-100 h-full rounded mx-auto flex flex-col p-4 w-full">
            <div className="flex flex-col sm:flex-row gap-x-6 px-2 mb-0 sm:mb-4 justify-start w-full">
              <div className="w-12/12 sm:w-3/12 mb-4 sm:mb-0">
                <label className="block uppercase text-gray-700 dark:text-white text-sm font-semibold mb-2">
                  Nickname
                </label>
                <input value={nickname} className="focus:border-gray-500 dark:text-white dark:border-gray-800 rounded w-full bg-gray-200 dark:bg-gray-600/50 border border-gray-300 p-2 mb-2 outline-none" spellCheck="false" placeholder="Nickname" name="nickname" type="text" onChange={handleChange} />
                <p className="text-gray-600 dark:text-white/50 text-sm italic">Remove if not needed</p>
              </div>
              <div className="w-12/12 sm:w-5/12 mb-4 sm:mb-0">
                <label className="block uppercase text-gray-700 dark:text-white text-sm font-semibold mb-2">
                  {'Fullname (*)'}
                </label>
                <input required value={fullname} className="focus:border-gray-500 dark:text-white dark:border-gray-800 w-full dark:bg-gray-600/50 rounded bg-gray-200 border border-gray-300 p-2 mb-2 outline-none" spellCheck="false" placeholder="Full-name" type="text" onChange={handleChange} name="fullname" />
              </div>
              <div className="w-12/12 sm:w-2/12 mb-4 sm:mb-0">
                <label className="block uppercase text-gray-700 dark:text-white text-sm font-semibold mb-2">
                  {'Class (*)'}
                </label>
                <input required value={userClass} className="focus:border-gray-500 dark:text-white dark:border-gray-800 w-full dark:bg-gray-600/50 rounded bg-gray-200 border border-gray-300 p-2 mb-4 outline-none" spellCheck="false" placeholder="Your class" type="text" name="userClass" onChange={handleChange} />
              </div>
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-sm font-bold mb-2">
                Title
              </label>
              <input required value={title} className="dark:text-white dark:border-gray-800 appearance-none dark:bg-gray-600/50 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" placeholder='Title of your post' type="text" name="title" onChange={handleChange} />
            </div>
            <div className="w-full h-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 dark:text-white text-sm font-bold mb-2">
                Content
              </label>
              <div className="dark:bg-gray-600/50 dark:text-white text-gray-900 rounded w-full min-h-[100px] bg-gray-100 outline-none overflow-y-auto overflow-x-hidden max-h-full">
                <Editor
                  id='content'
                  apiKey='7xvf9wm3aanhu6pxscb3t6ylca6vfmgyeoh46v28fgv6pizz'
                  onInit={(evt, editor) => {
                    editorRef.current = editor;
                  }}
                  onEditorChange={handleUpdate}
                  init={{
                    menubar: false,
                    statusbar: false,
                    toolbar_sticky: true,
                    advlist_bullet_styles: 'disc',
                    advlist_number_styles: 'default',
                    paste_as_text: true,
                    lists_indent_on_tab: true,
                    block_formats: 'Paragraph=p',
                    content_langs: [
                      { title: 'Vietnamese', code: 'vi' },
                    ],
                    plugins: [
                      'advlist', 'autolink', 'autoresize', 'lists', 'link', 'image', 'charmap',
                      'searchreplace'
                    ],
                    toolbar: 'undo redo | styles |' +
                      'bold italic underline blockquote | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent',
                    content_style: 'body { font-family:"Be Vietnam Pro",sans-serif; font-size:18px; background-color: rgb(229 231 235); color: rgb(17 24 39); margin-top: 12px; margin-bottom: 12px; margin-left: 20px !important; margin-right: 20px !important;} ' +
                      '@media (prefers-color-scheme: dark) { body { background-color: rgb(75 85 99 / 0.5); color: rgb(249 250 251) !important;}',
                    content_css: "/src/assets/index.css",
                    formats: {
                      bold: { inline: 'span', classes: 'font-semibold' },
                      italic: { inline: 'span', classes: 'italic' },
                      underline: { inline: 'span', classes: 'underline', exact: true },
                      numlist: { inline: 'ol', classes: 'list-decimal' },
                      blockquote: { block: 'blockquote', classes: 'italic text-gray-500 dark:text-gray-200/70', wrapper: true },
                    },
                  }}
                />
              </div>
            </div>
            <div className="icons px-3 w-full flex gap-x-4 flex-between text-gray-500 mt-2 mb-6">
              <div className="flex grow flex-col mb-4 sm:mb-0">
                <label className="block uppercase text-gray-700 dark:text-white text-sm font-semibold mb-2">
                  Hashtag
                </label>
                <input className="focus:border-gray-500 dark:text-white dark:border-gray-800 rounded w-8/12 bg-gray-200 dark:bg-gray-600/50 border border-gray-300 p-2 mb-2 outline-none" spellCheck="false" placeholder="Ex:  #blvanhngoc #tronganhnguoc #anhkhonganmung #dikhitacontre" type="text" name="hashtag" onChange={handleChange} value={hashtag} />
                <p className="text-gray-600 dark:text-white/50 text-sm italic">Remove if not needed</p>
              </div>
              <div className="count grow-0 text-gray-400 text-sm font-semibold">{count} words</div>
            </div>
            <div className="buttons flex justify-end gap-x-2">
              <button onClick={goback} className="flex items-center px-6 py-2.5 sm:px-6 font-medium text-md text-center text-gray-500 dark:text-white/50 dark:hover:text-white border border-gray-300 rounded hover:bg-gray-100 dark:bg-gray-800/80 hover:dark:bg-gray-700/80 focus:outline-none">
                Cancel
              </button>
              <button onClick={postData} className="flex items-center px-6 py-2.5 sm:px-6 font-medium text-md sm:text-lg text-center text-white bg-green-700 rounded hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default CreatePost;