import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

export interface Teacher {
        id: number
        avatar: string
        bio: string
        cost: number
        name: string
        subject: string
        whatsapp: string
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> =({teacher}) => {
    function createNewConnections() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }
    return (
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.name}/>
            <div>
                <strong>{teacher.name}</strong>
                <samp>{teacher.subject}</samp>
            </div>
        </header>
                <p>{teacher.bio}</p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R${teacher.cost}</strong>
                    </p>
                    <a 
                        target="_black"
                        href={`https://wa.me/${teacher.whatsapp}`} 
                        onClick={createNewConnections}>
                        <img src={whatsappIcon} alt="Entrar em contato"/>
                        Entrar em contato
                    </a>
                </footer>
    </article>
    )
}
export default TeacherItem