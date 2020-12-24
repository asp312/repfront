import React from 'react';
import { Repository } from './Repository';


export const RepositoryList = ({ mockRepositoryData }) =>
    (
        <div className="list-container">
            <ul>
                {
                    mockRepositoryData.map((item, index) =>
                        (
                            <Repository
                                key={index}
                                repositoryInfo={item}
                            />
                        ))
                }
            </ul>
        </div>
    );

