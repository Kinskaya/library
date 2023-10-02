import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Context } from '../../context';
import {BurgerMenu} from "../burger-menu/burger-menu";
import {Menu} from "../menu/menu";

export const Layout = () => {
  const [view, setView] = useState('till');

  return (
    <Context.Provider value={ useMemo(() =>  ( {view, setView} ), [view]) }>
      <div className='wrapper'>
        <Header/>
        <main className='main'>
          <div className='container'>
            <BurgerMenu />
            <Menu />
            <Outlet />
          </div>
        </main>
        <Footer/>
      </div>
    </Context.Provider>
  );
}
