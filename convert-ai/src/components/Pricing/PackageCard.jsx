import React from 'react';
import { PiCheckCircleThin, PiCheckCircleFill } from 'react-icons/pi';
import Button from '../common/Button';

const PackageCard = ({ 
  title, 
  description, 
  price, 
  pricePeriod, 
  features, 
  bgGradient, 
  borderColor, 
  buttonText,
  buttonVariant
}) => {
  return (
    <article className={`p-6 rounded-2xl grid gap-8 ${bgGradient} ${borderColor || ''}`}>
      {/* header */}
      <div className="grid gap-3">
        <h4 className="text-[20px] lg:text-[22px] xl:text-[24px] font-medium">{title}</h4>
        <p className="text-[14px] lg:text-[15px] xl:text-[16px]">{description}</p>
      </div>

      {/* price */}
      <div className="flex items-end gap-2">
        <p className='text-[28px] lg:text-[34px] xl:text-[36px] font-medium'>{price}</p>
        <p className='text-[14px] lg:text-[15px] xl:text-[16px] font-light pb-1.5'>{pricePeriod}</p>
      </div>

      {/* features */}
      <div className="grid gap-2.5 text-[16px] xl:text-[18px]">
        <p className="font-medium">What's included:</p>
        <ul className='grid gap-2.5 lg:text-[17px] xl:text-[18px]'>
          {features.map((f, idx) => (
            <li key={idx} className="flex items-center gap-3">
              {f.checked ? (
                <PiCheckCircleFill className='text-xl lg:text-2xl text-primary' />
              ) : (
                <PiCheckCircleThin className='text-xl lg:text-2xl' />
              )}
              <p>{f.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        text={buttonText} 
        variant={buttonVariant || 'secondary'} 
        to='/' 
        shadow={true} 
        className=' py-1.5'
      />
    </article>
  );
};

export default PackageCard;
