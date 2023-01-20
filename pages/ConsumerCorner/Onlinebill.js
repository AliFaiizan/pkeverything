import React, { useState } from 'react';
import { Button, Input, RelatedContent, Banner } from '../../components';

const OnlineBill = () => {
  const [ConsumerId, setConsumerId] = useState('0');

  const companies = {
    11: 'lesco',
    12: 'gepco',
    13: 'fesco',
    14: 'iesco',
    15: 'mepco',
    26: 'pesco',
    37: 'hesco',
    38: 'sepco',
    48: 'qesco',
  };

  function calculate(ref) {
    let type = 'general';
    let company = 'fesco';
    let url = '';
    const types = {
      0: 'industrial',
      1: 'general',
    };
    company = ref.replace(' ', '').slice(2, 4);
    type = ref.slice(0, 2);

    if (type > 20) {
      type = types['0'];
    } else {
      type = types['1'];
    }
    if (company === '11') {
      // specific for lesco
      url = `http://www.lesco.gov.pk:36247/BillNew.aspx?BatchNo=${ref.slice(0, 2)}&SubDiv=${ref.slice(2, 8).trim()}&RefNo=${ref.slice(8, 16).trim()}&RU=U&Exec=941N7&nCtID=`;
    } else if (company === '26' || company === '37' || company === '38' || company === '48') {
      url = `https://bill.pitc.com.pk/${companies[company]}bill/${type}?refno=${ref}`;
    } else {
      url = `https://bill.pitc.com.pk/${companies[company]}bill/${type}/${ref}`;
    }
    window.location.href = url;
  }

  return (
    <div className="sm:px-4 p-12 py-5 w-full minmd:w-4/5">
      <Banner
        name={window.location.pathname.split('/')[2]}
        substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
        styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded"
      />
      <p className="font-poppins text-color minlg:text-xl text-sm">
        Here you can find Bills of all Electric companies of Pakistan
      </p>
      <div className="flex-row flexBetween flex-wrap">
        {Object.keys(companies).map((key) => (
          <div className=" mr-3 mt-3  border dark:border-w-black-2 border-w-grey-1 p-1 rounded-lg">
            <p
              title={companies[key]}
              className="font-poppins text-color minlg:text-xl text-sm"
            >
              {companies[key].toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      <p className=" mt-2 font-poppins text-color minlg:text-xl text-sm">
        To Find the Bill information Enter the Consumer ID mentioned on your
        bill
      </p>
      <div className="">
        <Input
          title="ConsumerID"
          type="number"
          placeholder="Enter Your Consumer ID"
          handleClick={() => {
            setConsumerId(ConsumerId);
          }}
        />
      </div>
      <div className="flex-row flexBetween">
        <Button
          styles="rounded my-4"
          btnName="Submit"
          handleClick={() => calculate(ConsumerId)}
        />
        <a href="/" className="text-xs text-color minlg:text-xl ">
          Cant Find Your Bill ?
        </a>
      </div>
      <RelatedContent />
    </div>
  );
};
export default OnlineBill;
