import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.scss';
import Card from '../../components/molecules/Card';
import { actionRequest } from '../../store/Cards/CardsAction';

export default function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionRequest());
  }, [dispatch]);

  const cards = useSelector((state) => state.cards ? state.cards[0] : []);

  return (
    <div className="container">
      {
        cards && cards.valtech ? cards.valtech.map(item => {
            return (
              <div className="row mb-4">
                <div className="col">
                  <Card data={item} />
                </div>
              </div>
            )
      
        }) : <></>
      } 

      <div className="row">
        {
          cards && cards.europe ? cards.europe.map(item => {
            return (
              <div className={`col-12 pb-4 col-lg-4 ${item.isBigCard ? 'col-xl-6' : 'col-xl-3'}`}>
                <Card data={item} /> 
              </div>
            )
          }) : <></>
        }
      </div>

      <div className="row">
        {
          cards && cards.asia ? cards.asia.map(item => {
            return (
              <div className={`col-12 pb-4 col-lg-4 ${item.isBigCard ? 'col-xl-6' : 'col-xl-3'}`}>
                <Card data={item} /> 
              </div>
            )
          }) : <></>
        }
      </div>
    </div>
  )
}