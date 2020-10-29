import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/back.png';
import graduation from '../../assets/images/graduation.png';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" style={{alignSelf: 'flex-start', marginTop: -3}} >
                        <img src={backIcon} alt="Voltar" style={{width: 30}} />
                </Link>
                    <h1 style={{fontFamily: 'Righteous'}}>MeuProf</h1>
                    <img src={graduation} alt="proffy" style={{width: 30, height: 30}} />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                
                {props.children}
            </div>

            
        </header>
    )
}

export default PageHeader;
