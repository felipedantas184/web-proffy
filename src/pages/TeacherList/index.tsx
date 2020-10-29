import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css';


function TeacherList() {
    const history = useHistory();

    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    function handleDetails(id: string) {
        localStorage.setItem('teacherId', id)
        history.push('/detail')
    }

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
          "online": "Disponível",
          "group": "Disponível",
          "course": "Medicina",
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
      

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <div id="search-teachers">
                
                    <button onClick={() => {setSubject("Matemática")}}>
                        Matemática
                    </button>

                    <button onClick={() => {setSubject("Física")}}>
                        Física
                    </button>

                    <button onClick={() => {setSubject("Biologia")}}>
                        Biologia
                    </button>

                    <button onClick={() => {setSubject("Química")}}>
                        Química
                    </button>

                    <Select 
                        name="subject" 
                        label="Outra Matéria"
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }} 
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'História', label: 'História' },
                            { value: 'Biologia', label: 'Biologia' },
                        ]}
                    />
                </div>
            </PageHeader>

            <section>
                
            </section>

            <main>
                {teachers
                .filter(teacher => teacher.subject === `${subject}`)
                .map((teacher) => {
                    return (
                        <article key={teacher.id} className="teacher-item">
                            <header>
                                <img src={teacher.avatar} alt={teacher.name} style={{objectFit: 'cover'}} />
                                <div>
                                    <strong>{teacher.name}</strong>
                                    <span>{teacher.subject}</span>
                                </div>
                            </header>
                            <div className="infoGroupTeacher" style={{justifyContent: 'flex-start'}}>
                                <div style={{justifySelf: 'flex-start', marginLeft: 3, marginBottom: 10, display: 'flex', flexDirection: 'row'}}>
                                    <strong style={{marginRight: 10}} >Cursa:</strong>
                                    <p>{teacher.course}</p>
                                </div>
                            </div>

                            <div className="infoGroupTeacher">
                                <div style={{width: '48%'}}>
                                    <strong>Aulas em Grupo:</strong>
                                    <p>{teacher.group}</p>
                                </div>

                                <div style={{width: '48%', justifySelf: 'flex-end'}}>
                                    <strong>Aulas Online:</strong>
                                    <p>{teacher.online}</p>
                                </div>
                            </div>

                            <footer>
                                <p>
                                    Preço/Hora
                                    <strong>R$ {teacher.cost},00</strong>
                                </p>
                                <button 
                                    onClick={()=> handleDetails(teacher.id) }
                                    >
                                    Ver Detalhes
                                </button>
                            </footer>
                        </article>
                    )
                })}
            </main>
        </div>
    )
}

export default TeacherList;
