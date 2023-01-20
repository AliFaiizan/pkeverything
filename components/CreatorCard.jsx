import React from 'react';
import { useRouter } from 'next/router';

const CreatorCard = ({ element }) => {
  const router = useRouter();

  return (
    <div
      className="min-w-90 minlg:min-2-240 dark:bg-w-black-3 bg-white border dark:border-w-black-3 border-w-grey-1 rounded-3xl flex flex-col p-4 m-4"
      onClick={() => {
        router.push(element[2]);
      }}
    >
      <div className="my-2 flex justify-center">
        <div className=" flexCenter relative w-10 h-16 minlg:28 minlg:h-28">
          <i className={element[1]} />
        </div>
      </div>
      <p className="font-poppins text-color text-center text-sm minlg:text-sm">
        {element[0]}
      </p>
    </div>
  );
};

export default CreatorCard;
