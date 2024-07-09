import React from "react";
import VideoComponent from "../../components/VideoComponent";
import { ContainerContentCss, ContainerCss } from "../../styles/components/containers/container";
import GrowFromCenter from "../../components/Motion/GrowFromCenter";
const Videos: React.FC = () => {
    return (
        <GrowFromCenter>
            <ContainerContentCss $flexdirection="row" $gap="1.5em" $margintop="4em">
                <VideoComponent width="300px" height="250px" videoId="jStbakkc7V8" autoplay={false} />
                <VideoComponent width="300px" height="250px" videoId="Kqv7Y5_BYV8" autoplay={false} />
                <VideoComponent width="300px" height="250px" videoId="QMOraxgoY3s" autoplay={false} />
            </ContainerContentCss>
        </GrowFromCenter>

    );
};

export default Videos;
