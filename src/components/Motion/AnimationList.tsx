import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const ListItem: React.FC<{ text: string }> = ({ text }) => {
    return (
        <motion.li
            whileHover={{ scale: 1.2 }} // Efecto de escala al pasar el mouse
            style={{ cursor: 'pointer' }} // Cambia el cursor al pasar el mouse
        >
            <FontAwesomeIcon icon={faCheck} />
            <span>{text}</span>
        </motion.li>
    );
};

const List: React.FC<{ items: string[] }> = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <ListItem key={index} text={item} />
            ))}
        </ul>
    );
};

export default List;
