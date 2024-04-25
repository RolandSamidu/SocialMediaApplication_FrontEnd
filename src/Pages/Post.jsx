import React from 'react';
import Layout from "../components/Layout";
import { TEInput, TERipple, TESelect, TETextarea } from "tw-elements-react";

const Post = () => {

  const data = [
    { text: "Image Upload", value: 1 },
    { text: "Video Upload", value: 2 }
  ];

  return (
    <Layout>
      <div className="bg-indigo-300">

        <h1 className="mb-2 mt-5 text-5xl item-center font-medium leading-tight text-indigo-600">
          ADD NEW POST
        </h1>

        <div className="flex w-full items-center justify-center bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

          <form>
            <div className="grid grid-cols-2 gap-4">
              {/* <!--Topic input--> */}
              <TEInput
                type="text"
                label="Topic"
                className="mb-6"
              ></TEInput>
            </div>

            {/* <!--Description input--> */}
            <TETextarea id="textareaExample" label="Description" rows={4}></TETextarea>

            {/* <!--Selection input--> */}
            <div className="relative mb-3 md:w-96 pt-5">
              <TESelect data={data} />
            </div>

            {/* <!--Video or Image Upload--> */}
            <div className="mb-3 w-96">
              <label
                htmlFor="formFileMultiple"
                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                Video or Images Upload
              </label>
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div>

            {/* <!--Submit button--> */}
            <TERipple rippleColor="light" className="w-200">
              <button
                type="button"
                className="flex w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
              >

                - Share Now -
              </button>
            </TERipple>
          </form>
        </div>

      </div>
    </Layout>
  );
};
export default Post;
