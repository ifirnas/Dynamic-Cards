import React, { useEffect, useState } from "react";
import './index.scss';
import ContentText from "../../atoms/Text/ContentText";
import Headline from "../../atoms/Text/Headline";
import TitleText from "../../atoms/Text/Title";
import Button from "../../atoms/Button";


const Card = ({data}) => {
  
  const [ hovered, setHover] = useState(false);
  const [ imageUrl, setImageUrl] = useState('');
  
  const onMouseEnterHandler = () => {
    setHover(true);
  }
  
  const onMouseLeaveHandler = () => {
    setHover(false);
  }

  useEffect(() => {
    const fetchImage = async () => {
        try {
          const response = await import(`../../../assets/images/${data.imageName}`) // change relative path to suit your needs
          setImageUrl(response.default)
        } catch (err) {
          alert(err);
        }
    }

    fetchImage()
}, [data])


  return (
    <div className="card card-wrapper" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
      <div className="card-wrapper-img" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className={`card-wrapper-content`}>
        <TitleText {...data} />
        <Headline {...data}  />
        <ContentText data={data} hovered={hovered} />
        <Button hovered={hovered}/>
      </div>
    </div>
  )
};

export default Card;