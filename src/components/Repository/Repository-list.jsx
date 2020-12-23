import React from 'react';
import Reposirory from 'components';


const ReposiroryList = ({mockRepositoryData}) => {

    mockRepositoryData.map((item) => {
        return(
            <Reposirory/>
        )
    });
};

