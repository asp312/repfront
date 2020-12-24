import React from 'react';
import { Repository } from './Repository';


export const RepositoryList = ({mockRepositoryData}) => {
    return (
        <div className = "list-container">
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
        </div>
    );
};

