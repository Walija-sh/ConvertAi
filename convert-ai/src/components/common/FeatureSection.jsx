import React from 'react'
import HeaderPill from './HeaderPill'
import Button from './Button'
import FeatureCard from './FeatureCard'

const FeatureSection = ({ header, cards, cta }) => {
  return (
    <section className="max-w-[500px] lg:max-w-[1064px] mx-auto py-[60px] px-[20px] grid gap-[60px] lg:gap-[80px] lg:py-[80px] lg:px-8 overflow-hidden">
      
      {/* header */}
      <div className="flex flex-col items-center gap-8 max-w-[720px] mx-auto text-center">
        <HeaderPill text={header.pill} />
        <div className="grid gap-4 text-balance text-black-2">
          <h2 className="text-[28px] font-medium lg:text-[34px] xl:text-[36px]">
            {header.title}
          </h2>
          {header.subtitle && (
            <p className="text-[18px] lg:text-[19px] xl:text-xl">{header.subtitle}</p>
          )}
        </div> 
      </div>

      {/* feature cards */}
      <div className="grid gap-[60px]">
        {cards.map((card) => (
          <FeatureCard
            key={card.id}
            title={card.title}
            description={card.description}
            features={card.features}
            image={card.image}
            imageSide={card.imageSide}
            bgColor={card.bgColor}
          />
        ))}
      </div>

      {/* optional CTA */}
      {cta && (
        <Button
          text={cta.text}
          to={cta.to}
          variant={cta.variant}
          className={cta.className || "px-10 w-fit mx-auto"}
          shadow={cta.shadow || false}
        />
      )}
    </section>
  )
}

export default FeatureSection
