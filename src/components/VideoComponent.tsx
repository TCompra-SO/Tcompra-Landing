import React from 'react';
import { Content, Title, StyledIframe } from '../styles/Utils/videoCss';

interface VideoComponentProps {
    width: string;
    height: string;
    videoId: string;
    autoplay?: boolean; // Propiedad autoplay opcional
    marginTop?: string; // Nuevo parámetro marginTop opcional
}

const VideoComponent: React.FC<VideoComponentProps> = ({ width, height, videoId, autoplay, marginTop }) => {
    return (
        <Content $marginTop={marginTop}>
            <StyledIframe
                width={width}
                height={height}
                src={`https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1' : ''}`} // Añade autoplay si es true
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </Content>
    );
};

export default VideoComponent;
