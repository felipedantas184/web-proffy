import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/back.png';

import PageHeader from '../../components/PageHeader';

import logoImg from '../../assets/images/logo.svg';
import graduation from '../../assets/images/graduation.png';
import joaoGabriel from '../../assets/images/joaoGabriel.jpg';
import phone from '../../assets/images/phone-call.png';
import whatsapp from '../../assets/images/whatsappNovo.png';

import api from '../../services/api';

import './styles.css';

function Detail() {

    const [id, setId] = useState('');
    
    
    const teacher_id = localStorage.getItem('teacherId')    


    const teachers = [
        {
            "id": '1',
            "subject": "Física",
            "cost": "60",
            "online": "Disponível",
            "group": "Disponível",
            "course": "Medicina",
            "name": "Felipe Dantas",
            "avatar": "https://avatars0.githubusercontent.com/u/62896397?s=460&u=7f6eb283e67fddf77d5e43f2987cf9948bff7d55&v=4",
            "whatsapp": "86995185757",
            "bio": "Professor de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
          },
          {
            "id": '2',
            "subject": "Matemática",
            "cost": "50",
            "online": "Disponível",
            "group": "Disponível",
            "course": "Medicina",
            "name": "João Gabriel",
            "avatar": "https://mcusercontent.com/bc934d067a92cc650b4ec728f/images/a5aa0ab7-d7ea-432d-8d77-6c3858debc81.jpg",
            "whatsapp": "86994940808",
            "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
          },
          {
            "id": '3',
            "subject": "Matemática",
            "cost": "55",
            "online": "Disponível",
            "group": "Disponível",
            "course": "Medicina",
            "name": "Francisco Gabriel",
            "avatar": "https://mcusercontent.com/bc934d067a92cc650b4ec728f/images/cc557df7-6686-4f24-9bf1-bc6a2381f187.jpg",
            "whatsapp": "86994940808",
            "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
          },
          {
            "id": '4',
            "subject": "Matemática",
            "cost": "45",
            "online": "Disponível",
            "group": "Disponível",
            "course": "Medicina",
            "name": "Gabriel Soares",
            "avatar": "https://mcusercontent.com/bc934d067a92cc650b4ec728f/images/73df8814-14e5-4330-ade6-80b76faeaf72.jpg",
            "whatsapp": "86994940808",
            "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
          },
        {
          "id": '5',
          "subject": "Matemática",
          "cost": "60",
          "name": "Nicole Dantas",
          "avatar": "https://avatars0.githubusercontent.com/u/62896397?s=460&u=7f6eb283e67fddf77d5e43f2987cf9948bff7d55&v=4",
          "whatsapp": "86994940808",
          "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
        },
        {
            "id": '6',
            "subject": "Biologia",
            "cost": "60",
            "online": "Disponível",
            "group": "Disponível",
            "course": "Design Gráfico",
            "name": "Pam Beesly",
            "avatar": "https://i.insider.com/5aeb5fa742e1cc19da46a727?width=1100&format=jpeg&auto=webp",
            "whatsapp": "86994940808",
            "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
        },
        {
            "id": '7',
            "subject": "Biologia",
            "cost": "80",
            "online": "Disponível",
            "group": "Disponível",
            "course": "Administração",
            "name": "Michael Scott",
            "avatar": "https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png",
            "whatsapp": "86994940808",
            "bio": "Professora de Física, Matemática e Química. Gosto de ajudar alunos a alcançarem boas notas"
        },
      ]

    return(
        <div className="teacher-container">
            <section className="header">
                <Link to="/study" style={{border: 0, backgroundColor: 'transparent', marginLeft: 15}}>
                    <img src={backIcon} style={{width: 30, marginTop: 10}} />
                </Link>
                <h1 >MeuProf</h1>
                <img src={graduation} alt="myProf" style={{width: 40, marginRight: 15}} />
            </section>
            <main className="main" >
                {teachers
                .filter(teacher => teacher.id === `${teacher_id}`)
                .map((teacher) => {
                    return (
                        <div key={teacher.id}>
                            <img src={teacher.avatar} className="profilePic" />
                
                            <div className="teacherItem" style={{marginTop: -45, overflow: 'visible', height: 80}}>
                                <strong style={{fontSize:25}}>{teacher.name}</strong>
                                <p  style={{marginTop: 5, fontSize: 20}}>{teacher.subject}</p>
                            </div>

                            <div className="teacherItem" style={{display: 'flex', flexDirection: 'column'}}>
                                <div style={{marginBottom: 10}}>  
                                    <strong>Descrição:</strong>
                                    <p>{teacher.bio}</p>
                                </div>

                                <div className="infoGroup">
                                    <div style={{marginBottom: 10, width: '48%'}}>
                                        <strong>Online:</strong>
                                        <p>{teacher.online}</p>
                                    </div>

                                    <div style={{width: '48%'}}>
                                        <strong>Aulas em Grupo:</strong>
                                        <p>{teacher.group}</p>
                                    </div>
                                </div>

                                <div className="infoGroup">
                                    <div style={{marginBottom: 10, width: '48%'}}>
                                        <strong>Preço/Hora:</strong>
                                        <p>R${teacher.cost},00</p>
                                    </div>

                                    <div style={{width: '48%'}}>
                                        <strong>Cursa:</strong>
                                        <p>{teacher.course}</p>
                                    </div>
                                </div>
                            </div>

                            <section className="contact">
                                <div className="buttons-container">
                                    <a href={`https://api.whatsapp.com/send?phone=55${teacher.whatsapp}`}
                                    target="blank" className="study">
                                        <img src={whatsapp} alt="Estudar" />
                                        Whatsapp
                                    </a>

                                    <a href={`tel:${teacher.whatsapp}`}
                                    target="blank" className="give-classes">
                                        <img src={phone} alt="Dar Aulas" />
                                        Telefone
                                    </a>
                                </div>

                            </section>
                </div>
                    )
                })
                }
            </main>
        </div>
    )
}

export default Detail;