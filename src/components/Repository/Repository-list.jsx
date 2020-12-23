import React from 'react';
import { Repository } from './Repository';


export const RepositoryList = ({mockRepositoryData}) => {
    return (
        <ul>
            {
                mockRepositoryData.map((item, index) => {
                    return (
                        <Repository 
                            key={index} 
                            repositoryInfo={item} 
                        />
                    )
                })
            }
        </ul>
    );
};

